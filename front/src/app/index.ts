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
import { faSync, faSignInAlt, faArrowCircleLeft, faSignOutAlt, faCopy, faPhotoFilm} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";




const store = createStore({
    state: {
        username: "-",
        rooms: [],
        confDays: []
    },
    mutations: {
        setUsername(state, name) {
            state.username = name;
        },
        setRooms(state, rooms) {
            state.rooms = rooms;
        },
        setConfDays(state, confDays) {
            state.confDays = confDays;
        }
    }
});





const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)



app.component('font-awesome-icon', FontAwesomeIcon)

app.component('v-select', vSelect) // --> Move locally

library.add(faSignInAlt, faSync, faArrowCircleLeft, faSignOutAlt, faCopy, faPhotoFilm)

app.use(router)

//app.use(VuejsDatatableFactory);
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
