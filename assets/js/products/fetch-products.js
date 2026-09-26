import {data} from './data.js';


//Здесь ты по инпуту ищешь
function searchProducts(query) {
    const result = data.filter(function (item) {
        return item.title.toLowerCase().includes(query.toLowerCase());
    });
    renderProducts(result);

}


function filterInStock() {
    const result = data.filter(function (item) {
        return item.inStock;
    });
    renderProducts(result);
}


function filterByPrice(minPrice, maxPrice) {
    const result = data.filter(function (item) {
        const okMin = minPrice === null ? true : item.price >= minPrice;
        const okMax = maxPrice === null ? true : item.price <= maxPrice;

        return okMin && okMax;
    });
    renderProducts(result);
}


let renderTimerId = null;
function renderProducts(items) {
    const productsEl = document.getElementById('products-search__results');
    const preloaderEl = document.getElementById('products-search__preloader');

    // productsEl.innerHTML = items.map(function (item) {
    //     return `
    //     <div class="product__card">
    //         <div class="product__card-top">
    //             <div class="product__card-text">
    //                 <div class="product__card-title">${item.title}</div>
    //                 <div class="product__card-price">${item.price}</div>
    //             </div>
    //         </div>
    //         <div class="product__card-bottom">
    //             <div class="product__card-category">${item.category}</div>
    //             <div class="product__card-in-stock">${item.inStock === true ? "in stock" : "out stock"}</div>
    //         </div>
    //     </div>`
    // }).join('\n');

    productsEl.textContent = '';
    preloaderEl.classList.remove('preloader--hidden');


    clearTimeout(renderTimerId);
    renderTimerId = setTimeout(function () {

        preloaderEl.classList.add('preloader--hidden');
        items.forEach(function (item) {

            const cardEl = document.createElement('div');
            cardEl.className = 'product__card';

            const titleEl = document.createElement('div');
            titleEl.className = 'product__card-title';
            titleEl.textContent = item.title ? item.title : 'No title';

            const priceEl = document.createElement('div');
            priceEl.className = 'product__card-price';
            priceEl.textContent = item.price ? item.price : 'Price not available';

            const categoryEl = document.createElement('div');
            categoryEl.className = 'product__card-category';
            categoryEl.textContent = item.category ? item.category : 'No category specified';

            const inStockEl = document.createElement('div');
            inStockEl.className = 'product__card-in-stock';
            inStockEl.textContent = item.inStock === true ? 'in stock' : 'out stock';


            cardEl.append(titleEl, priceEl, categoryEl, inStockEl);
            productsEl.append(cardEl);
        })
    }, 1100)
}


function initSearch() {
    const searchEl = document.getElementById('products-search');

    searchEl.addEventListener('input', function () {
        searchProducts(searchEl.value);
    })
}


function initStockFilter() {
    const buttonEl = document.getElementById('products-search__in-stock');
    let inStock = false;

    buttonEl.addEventListener('click', function () {
        inStock = !inStock;
        if (inStock) {
            filterInStock();
        } else {
            renderProducts(data);
        }
    });
}


function initPriceFilter() {
    const minPriceEl = document.getElementById('products-search__min-price');
    const maxPriceEl = document.getElementById('products-search__max-price');

    function handlePriceChange() {
        let minPrice = null;
        let maxPrice = null;
        const minValue = Number(minPriceEl.value);
        const maxValue = Number(maxPriceEl.value);

        if (minPriceEl.value !== '' && Number.isInteger(minValue)) {
            minPrice = minValue;
        }
        if (maxPriceEl.value !== '' && Number.isInteger(maxValue)) {
            maxPrice = maxValue;
        }

        filterByPrice(minPrice, maxPrice);
    }

    function blockInvalidKeys(event) {
        const blocked = ['+', '-', '.', ',', 'e', 'E']
        if (blocked.includes(event.key)) {
            event.preventDefault();
        }
    }

    minPriceEl.addEventListener('input', handlePriceChange);
    maxPriceEl.addEventListener('input', handlePriceChange);
    minPriceEl.addEventListener('keydown', blockInvalidKeys);
    maxPriceEl.addEventListener('keydown', blockInvalidKeys);
}

document.addEventListener('DOMContentLoaded', function () {
        renderProducts(data);
        initSearch();
        initStockFilter();
        initPriceFilter();
})


//сделать кнопку которая будет показывать только те что в наличии , inStock - true
// сделать фильтр по цене ( инпут интеджерс , с числами )
// накинуть красивый фронт энд , с сет таймаутом на прелоадер
// вывести все категории, кнопками и проводить по ним фильттрацию