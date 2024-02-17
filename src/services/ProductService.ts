import axios from "axios";

export class ProductService {
    async fetchProducts(): Promise<Array<Product>> {
        let products: Array<Product> = [];

        await axios.get('https://fakestoreapi.com/products')
            .then((response) => products = response.data);

        return products;
    }

    async searchProducts(searchQuery: string): Promise<Array<Product>> {
        return await this.fetchProducts().then(products => {
            return products.filter((product: Product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        })
    }

    async getPriceRange(searchQuery: string): Promise<number[]> {
        return await this.searchProducts(searchQuery).then(products => {
            const prices = products.map(product => product.price);

            if (!prices.length) {
                return [0, 0];
            }

            return [Math.min(...prices ?? 0), Math.max(...prices ?? 0)];
        })
    }

    async applyFilter(filter: Filter): Promise<Array<Product>> {
        return await this.searchProducts(filter.query).then(products => {
            return products.filter(product => product.price >= filter.price[0] && product.price <= filter.price[1]);
        });
    }

    async storeProduct(product: Product): Promise<number> {
        return await axios.post('https://httpbin.org/post', product)
            .then(response => response.status);
    }

    async getProductById(productId: string): Promise<Product> {
        return await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.data);
    }
}