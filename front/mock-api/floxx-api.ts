//import { MockMethod } from 'vite-plugin-mock'

class UserAuthenticated {
    name: string;
    token: string;
    isAdmin: boolean = false;
    constructor(name, token, isAdmin) {
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