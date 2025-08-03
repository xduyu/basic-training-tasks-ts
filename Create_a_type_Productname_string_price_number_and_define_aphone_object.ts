type Product = {
    name: string;
    price: number;
}

function createProduct(name: string, price: number): Product {
    return { name, price };
}


const product = createProduct('Laptop', 999.99);
console.log(product); // { name: 'Laptop', price: 999.99 }