import {data} from './data.js';
//Это у нас пришло с фетча


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
        return item.price >= minPrice && item.price <= maxPrice;
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
         const minPrice = parseInt(minPriceEl.value) || parseInt("0");
         const maxPrice = parseInt(maxPriceEl.value) || Infinity;
         filterByPrice(minPrice, maxPrice);
    }

    minPriceEl.addEventListener('input', handlePriceChange);
    maxPriceEl.addEventListener('input', handlePriceChange);
}


renderProducts(data);
initSearch();
initStockFilter();
initPriceFilter();

//сделать кнопку которая будет показывать только те что в наличии , inStock - true
// сделать фильтр по цене ( инпут интеджерс , с числами )
// накинуть красивый фронт энд , с сет таймаутом на прелоадер
// вывести все категории, кнопками и проводить по ним фильттрацию