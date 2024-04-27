import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from "vuex";
import App from './App.vue';
import { routes } from './routeur-config.js';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'
import lodash from 'vue-lodash';
import './floxxStyle.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faSignInAlt, faArrowCircleLeft, faSignOutAlt, faCopy, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import shared from "./shared";
import { IPlanning } from './models.js';

const router = createRouter({
    history: createWebHistory(),
    routes
});


const store = createStore({
    strict:true,
    state: {
        username: "-",
        rooms: [],
        planning: [],
        confDays: []
    },
    mutations: {
        username(state, name) {
            state.username = name;
        },
        rooms(state, rooms) {
            state.rooms = rooms;
        },
        planning(state, planning) {
            state.planning = planning;
        },
        days(state, confDays) {
            state.confDays = confDays;
        }
    },
    actions: {
        async fetchRooms(context) {
            shared.securityAccess(router, async () => {
                const roomsResp = await fetch("/api/rooms", {
                    method: "GET",
                    headers: shared.tokenHandle() })
                const roomsData = await roomsResp.json()
                context.commit('rooms', roomsData);
            })
        },
        async fetchPlanning(context) {
            shared.securityAccess(router, async () => {
                const planningResp = await fetch("/api/planning", {
                    method: "GET",
                    headers: shared.tokenHandle() })
                const planningData:IPlanning = await planningResp.json()
                context.commit('planning', planningData);
               
            })
        },
        async fetchDays(context) {
            shared.securityAccess(router, async () => {
                const daysResp = await fetch("/api/days", {
                    method: "GET",
                    headers: shared.tokenHandle() })
                const daysData = await daysResp.json()
                context.commit('days', daysData);
            })
        }
        ,
        async fetchUserInfo(context) {
            shared.securityAccess(router, async () => {
                const usernameResp = await fetch("/api/informations/current-user", {
                    method: "GET",
                    headers: shared.tokenHandle() })
                const usernameData = await usernameResp.text()
                context.commit('username', usernameData);
            })
        }
    }
});


async function initStore() {
    await store.dispatch('fetchRooms');
    await store.dispatch('fetchPlanning');
    await store.dispatch('fetchDays');
    await store.dispatch('fetchUserInfo');
    
}

initStore().then(() => {
    const app = createApp(App)
    app.component('font-awesome-icon', FontAwesomeIcon)

    app.component('v-select', vSelect) // --> Move locally

    library.add(faSignInAlt, faSync, faArrowCircleLeft, faSignOutAlt, faCopy, faPhotoFilm)

    app.use(router)

    
    app.component('GDialog', GDialog)
    app.use(router);
    app.use(lodash);
    app.use(Toast);
    app.use(createBootstrap({
        components: true,
        directives: true,
    }))


    app.use(store)
    app.mount('#app')
});
