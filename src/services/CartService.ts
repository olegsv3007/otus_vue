export class CartService {
    private emptyCart: Cart = {lines: []};

    getCart(): Cart {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) as Cart : this.emptyCart;
    }

    addProduct(product: Product): void {
        let cart = this.getCart();
        let cartLine = cart.lines.find((line) => line.product.id === product.id);

        if (!cartLine) {
            cartLine = {product: product, quantity: 0};
            cart.lines.push(cartLine);
        }

        cartLine.quantity++;

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    clear(): void {
        localStorage.setItem('cart', JSON.stringify(this.emptyCart));
    }

    deleteLine(product: Product): void {
        let cart = this.getCart();
        let cartLine = cart.lines.find((line) => line.product.id === product.id);

        if (!cartLine) {
            return;
        }

        cart.lines.splice(cart.lines.indexOf(cartLine), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    deleteItem(product: Product): void {
        let cart = this.getCart();
        let cartLine = cart.lines.find((line) => line.product.id === product.id);

        if (!cartLine) {
            return;
        }

        if (cartLine.quantity === 1) {
            this.deleteLine(product);

            return;
        }

        cartLine.quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    getNumberOfLines(): number {
        return this.getCart().lines.length;
    }
}