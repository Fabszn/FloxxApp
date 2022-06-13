import login from './components/login.vue'
import mainmenu from './components/mainMenu.vue'
import overflow from './components/selections/overflow.vue'
import rooms from './components/selections/rooms.vue'
import fill from './components/fillPercentage.vue'
import adminmenu from './components/adminMenu.vue'
import filling from './components/admins/filling.vue'
import mappingRCR from './components/admins/mappingRCR.vue'
import mySlots from './components/mySlots.vue'
import planning from './components/desktop/planning.vue'
import allactivesslots from './components/AllActiveSlots.vue'
import reload from './components/reload.vue'
import statistiques from './components/admins/statistiques.vue'

export const routes = [{
    path: '/',
    component: login,
    children: []
}, {
    path: '/menu',
    component: mainmenu,
    children: []
}, {
    path: '/rooms',
    component: rooms,
    children: []
}, {
    path: '/overflow',
    component: overflow,
    children: []
}, {
    path: '/fill/:slotid',
    component: fill,
    children: []
}, {
    path: '/adminMenu',
    component: adminmenu,
    children: []
}, {
    path: '/filling',
    component: filling,
    children: []
}, {
    path: '/mappingRC',
    component: mappingRCR,
    children: []
}, {
    path: '/myslots',
    component: mySlots,
    children: []
}, {
    path: '/planning',
    component: planning,
    children: []
}, {
    path: '/allactivesslots',
    component: allactivesslots,
    children: []
}, {
    path: '/statistics',
    component: statistiques,
    children: []
}, {
    path: '/reload/:pathRoute',
    component: reload,
    children: []
}];