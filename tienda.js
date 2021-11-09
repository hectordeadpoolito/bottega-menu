const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closets('.item');

    const itemTitle = item.querySelector('.item-title').textCotntent;
    const itemTitle = item.querySelector('.item-price').textCotntent;
    const itemTitle = item.querySelector('.item-title').src;

    addItemsToShoppingCart(iteTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemprice, itemImage) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = '
    <div class="row shopingcartItem">
    <div class='col-6'>
        <div class="shopping-cart-item" d-flex align-items-center h-100 border-bottom pb-3">
        <img src="">
            <h6 class="shopping-cart-item-title shoopingCartItemTitle text-truncate ml-3 mb-0"> </h6>
        
    </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            ItemPrice">6.99€</p>
            </div>
