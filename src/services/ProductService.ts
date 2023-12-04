export class ProductService {
    async fetchProducts(): Promise<Array<Product>> {
        let products: Array<Product> = [];

        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => products = json)

        return products;
    }

    async searchProducts(searchQuery: string): Promise<Array<Product>> {
        return await this.fetchProducts().then(products => {
            return products.filter((product: Product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        })
    }
}