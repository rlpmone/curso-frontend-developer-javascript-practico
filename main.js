const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
};

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
};

const productList = [];

productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});
productList.push({
    name: 'Product',
    price:120,
    image: 'https://th.bing.com/th/id/OIP.MqZs4_j6U41mEe0FsVioJwHaFj?pid=ImgDet&rs=1',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
        
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
        
    
    
    }
}

renderProducts(productList);
