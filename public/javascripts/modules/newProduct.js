const newProduct = function newProduct(product) {
    //setup products
    const cards = document.getElementById('cards');
    //new product
    const card = document.createElement('div');
    card.className = "box";
    //add image
    const image = document.createElement('img');
    image.className = "image-box";
    if (product.url_image == "" || product.url_image == null)
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
    else
        image.src = product.url_image;
    card.appendChild(image);
    //add title
    const title = document.createElement('h4');
    title.innerHTML = product.name;
    card.appendChild(title);
    //add separator
    const separator = document.createElement('hr');
    card.appendChild(separator);
    //add price and cart
    const bottom = document.createElement('div');
    bottom.className = "grid-container";
    const price = document.createElement('div');
    price.innerHTML = "$" + product.price;
    price.style.textAlign = "left";
    bottom.appendChild(price);
    const cart = document.createElement('div');
    cart.innerHTML = '<a href=""><i class="fa fa-shopping-cart"></i></a>';
    cart.style.textAlign = "right";
    bottom.appendChild(cart);
    card.appendChild(bottom);

    return card;
}

module.exports = newProduct;