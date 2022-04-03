import login from './components/login.vue'
import menu from './components/menu.vue'
import planning from './components/planning.vue'

export const routes = [{
    path: '/desktop',
    component: login,
    children: []
}, {
    path: '/menu',
    component: menu,
    children: []
}, {
    path: '/planning',
    component: planning,
    children: []
}];