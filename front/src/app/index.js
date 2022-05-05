import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from "vuex";
import App from './App.vue';
import { routes } from './routeur-config.js';
import Dropdown from 'vue-simple-search-dropdown';
import VueLodash from 'vue-lodash';
import './floxxStyle.css'
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faSignInAlt, faArrowCircleLeft, faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Tabs from 'vue-tabs-component';
import Notifications from 'vue3-vt-notifications'


const store = createStore({
    state: {
        username: "-",
        rooms: []
    },
    mutations: {
        setUsername(state, name) {
            state.username = name;
        },
        setRooms(state, rooms) {
            state.rooms = rooms;
        }
    }
});





const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App, {
    router,
    mounted: function() {
        if (window.location.pathname == "") {
            this.$router.push("/reload/" + window.location.pathname);
        }
    }
})
app.use(store)
app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('dropdown', Dropdown)

library.add(faSignInAlt, faSync, faArrowCircleLeft, faSignOutAlt, faCopy)


app.use(VuejsDatatableFactory);
app.use(router);
app.use(Dropdown);
app.use(VueLodash);
app.use(Notifications)
app.use(VModal)
app.use(BootstrapVue3)
app.use(Tabs);