// Destruturing
//--------------------------------------------------------

// Array 
const colors = ['red', 'green', 'blue'];
// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];
// console.log(color1, color2, color3);

// Array (Destructuring)
const [color1, color2, color3] = colors; // color1 = 'red', color2 = 'green', color3 = 'blue'
// const [,,color3] = colors; // color3 = 'blue'
console.log(color1, color2, color3);

//--------------------------------------------------------
// Object
const product = {
    productName: 'Laptop',
    price: 30000,
    stock: 10
}
// const productname = product.productName;
// const price = product.price;
// const stock = product.stock;
// console.log(productname, price, stock);

// Object (Destructuring)
const { productName, price, stock } = product;
console.log(productName, price, stock);
