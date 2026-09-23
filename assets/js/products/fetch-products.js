import {data} from './data.js';


//Здесь ты по инпуту ищешь
function searchProducts(query) {
    const result = data.filter(function (item){
        return item.title.toLowerCase().includes(query.toLowerCase());
    });
    renderProducts(result);

}


function filterInStock(){
    const result = data.filter(function (item){
       return item.inStock;
    });
    renderProducts(result);
}


function filterByPrice(minPrice, maxPrice){
    const result = data.filter(function (item){
        const okMin = minPrice === null ? true : item.price >= minPrice;
        const okMax = maxPrice === null ? true : item.price <= maxPrice;

        return okMin && okMax;
    });
    renderProducts(result);
}


//здесь ты рендеришь результат
function renderProducts(items) {
    const productsEl = document.getElementById('products-search__results');

    productsEl.innerHTML = items.map(function (item) {
        return `
        <div class="product__card">
            <div class="product__card-top">
                <div class="product__card-text">
                    <div class="product__card-title">${item.title}</div>
                    <div class="product__card-price">${item.price}</div>
                </div>
            </div>
            <div class="product__card-bottom">
                <div class="product__card-category">${item.category}</div>
                <div class="product__card-in-stock">${item.inStock === true ? "in stock" : "out stock"}</div>
            </div>
        </div>`
    }).join('\n');

}

//
// function renderCategories(items){
//     const categoriesEl = document.getElementById('products-search__categories');
//     if(!items.length) return console.error('No items found.');
//
//     const categories = items.map(function (item) {
//         return item.category;
//     })
//
//     categories.forEach((item, index) => {
//         if(item){
//             const catId = item.toLowerCase()
//             categoriesEl.insertAdjacentHTML('beforeend', `
//             <button class="product__card">
//                 ${item}
//             </button>`)
//             console.log(catId)
//         }
//
//     })
// }
//

function initSearch(){
    const searchEl = document.getElementById('products-search');

    searchEl.addEventListener('input', function() {
        searchProducts(searchEl.value);
    })
}


function initStockFilter(){
    const buttonEl = document.getElementById('products-search__in-stock');
    let inStock = false;

    buttonEl.addEventListener('click', function() {
        inStock = !inStock;
        if (inStock) {
            filterInStock();
        }else{
            renderProducts(data);
        }
    });
}


function initPriceFilter(){
    const minPriceEl = document.getElementById('products-search__min-price');
    const maxPriceEl = document.getElementById('products-search__max-price');

    function handlePriceChange(){
         // const minPrice = minPriceEl.value === '' ? null : parseInt(minPriceEl.value);
         // const maxPrice = maxPriceEl.value === '' ? null : parseInt(maxPriceEl.value);
        let minPrice = null;
        let maxPrice = null;
        const minValue = Number(minPriceEl.value);
        const maxValue = Number(maxPriceEl.value);

        if(minPriceEl.value !== '' && Number.isInteger(minValue)){
            minPrice = minValue;
        }
        if(maxPriceEl.value !== '' && Number.isInteger(maxValue)){
            maxPrice = maxValue;
        }

         filterByPrice(minPrice, maxPrice);
    }

    function blockInvalidKeys(event){
        const blocked = ['+', '-', '.', ',', 'e', 'E']
        if(blocked.includes(event.key)){
            event.preventDefault();
        }
    }

    minPriceEl.addEventListener('input', handlePriceChange);
    maxPriceEl.addEventListener('input', handlePriceChange);
    minPriceEl.addEventListener('keydown', blockInvalidKeys);
    maxPriceEl.addEventListener('keydown', blockInvalidKeys);
}

document.addEventListener('DOMContentLoaded', function(){
    renderProducts(data);
    initSearch();
    initStockFilter();
    initPriceFilter();
})


// renderCategories(data);

//сделать кнопку которая будет показывать только те что в наличии , inStock - true
// сделать фильтр по цене ( инпут интеджерс , с числами )
// накинуть красивый фронт энд , с сет таймаутом на прелоадер
// вывести все категории, кнопками и проводить по ним фильттрацию