export class ProductService {
    async fetchProducts(): Promise<Array<Product>> {
        let products: Array<Product> = [];

        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => products = json)

        return products;
    }
}