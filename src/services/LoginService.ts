import axios from "axios";

export class LoginService {
    async login(user: UserLoginData) {
        return await axios.post('https://httpbin.org/post', user)
            .then(response => response.status);
    }
}