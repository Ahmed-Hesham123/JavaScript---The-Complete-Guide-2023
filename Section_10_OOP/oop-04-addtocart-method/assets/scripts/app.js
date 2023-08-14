class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput = `<h2>Total: \$${0}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput 
    return cartEl;
  }
}

class ProductItem {
  constructor(Product) {
    this.Product = Product;
  }
  addToCart() {
    console.log("Adding product to cart...");
    console.log(this.Product);
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
    <div>
        <img src="${this.Product.imageUrl}" alt="${this.Product.title}">
        <div class="product-item__content">
            <h2>${this.Product.title}</h2>
            <h3>\$${this.Product.price}</h3>
            <p>${this.Product.description}</p>
            <button>Add to Cart</button>
        </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product("A Pillow", "Ahmed Hesham", "A soft pillow", 19.99),
    new Product(
      "A Carpet",
      "Ahmed Hesham",
      "A carpet which you might like - or not",
      89.99
    ),
  ];
  constructor() {}
  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();
