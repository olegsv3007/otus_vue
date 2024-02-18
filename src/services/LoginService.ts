import axios from "axios";

export class LoginService {
    async login(user: UserLoginData) {
        return await axios.post('https://httpbin.org/post', user)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('login', user.login);
                }

                return response.status;
            });
    }

    getAuthenticatedUser(): string|null {
        return localStorage.getItem('login')
    }

    logout(): void {
        localStorage.removeItem('login');
    }
}