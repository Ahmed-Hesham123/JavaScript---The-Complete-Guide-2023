class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price){
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(Product) {
    this.Product = Product;
  }
  render(){
    const prodEl = document.createElement("li");
    prodEl.className = 'product-item';
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
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'Ahmed Hesham',
      'A soft pillow',
      19.99
    ),
    new Product(
      'A Carpet',
      'Ahmed Hesham',
      'A carpet which you might like - or not',
      89.99
    )
  ];
  constructor() {}
  render(){
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
       const productItem = new ProductItem(prod);
       const prodEl = productItem.render();
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
}
}


const productList = new ProductList();
productList.render();

