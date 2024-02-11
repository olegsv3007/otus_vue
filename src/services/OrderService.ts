import axios from "axios";

export class OrderService {
    async storeOrder(order: Order) {
        return await axios.post('https://httpbin.org/post', order)
            .then(response => response.status);
    }
}