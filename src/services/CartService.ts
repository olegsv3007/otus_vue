import {inject} from "vue";
import {Emitter} from "mitt";

export class CartService {
    private emptyCart: Cart = {lines: []};
    private emitter: Emitter<Events> = inject('emitter') as Emitter<Events>;

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
        this.emitter.emit('cartLinesQuantityChanged', this.getTotalQuantity());
    }

    clear(): void {
        localStorage.setItem('cart', JSON.stringify(this.emptyCart));
        this.emitter.emit('cartLinesQuantityChanged', 0);
    }

    deleteLine(product: Product): void {
        let cart = this.getCart();
        let cartLine = cart.lines.find((line) => line.product.id === product.id);

        if (!cartLine) {
            return;
        }

        cart.lines.splice(cart.lines.indexOf(cartLine), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.emitter.emit('cartLinesQuantityChanged', this.getTotalQuantity());
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
        this.emitter.emit('cartLinesQuantityChanged', this.getTotalQuantity());
    }

    getTotalQuantity(): number {
        return this.getCart().lines.reduce((acc: number, line: CartLine) => acc + line.quantity, 0);
    }
}