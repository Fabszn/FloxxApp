import { MockMethod } from 'vite-plugin-mock'

class UserAuthenticated {
    name: String;
    token: String;
    isAdmin: Boolean = false;
    constructor(name: string, token: string, isAdmin: boolean) {
        this.name = name;
        this.token = token;
        this.isAdmin = isAdmin;
    }
}


export default [
    {
        url: '/login',
        method: 'post',
        response: ({ query }) => {
            console.log(query)
            return new UserAuthenticated("Fabrice Sznajderman", "token", true);
        }
    }
]