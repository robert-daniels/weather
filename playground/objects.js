// Object Property Shorthand

const name = 'robert';
const userAge = 31;

const user = {
    name, 
    userAge, 
    location: 'USA'
}

console.log(user)

// Object destructure

const product = {
    label: 'red',
    price: 3.09,
    stock: 2000,
    salePrice: undefined
};

// const label = product.label

const { label, price, stock, salePrice } = product;

console.log(label);