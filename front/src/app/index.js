import { createApp } from 'vue'
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routeur-config.js';
import Dropdown from 'vue-simple-search-dropdown';
import VueLodash from 'vue-lodash';
import VueNativeSock from 'vue-native-websocket'
import Notifications from 'vue-notification'
import './floxxStyle.css'
import async from 'async'
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faSignInAlt, faArrowCircleLeft, faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './state'
import Tabs from 'vue-tabs-component';


const app = createApp({
    router,
    store,
    render: h => h(App),
    mounted: function() {
        if (window.location.pathname == "") {
            this.$router.push("/reload/" + window.location.pathname);
        }
    }
}).mount('#app')


library.add(faSignInAlt, faSync, faArrowCircleLeft, faSignOutAlt, faCopy)
Object.defineProperty(Vue.prototype, '$async', { value: async });

Vue.use(VuejsDatatableFactory);
Vue.use(VueResource);
Vue.use(Router);
Vue.use(Dropdown);
Vue.use(VueLodash);
Vue.use(Notifications)
Vue.use(VModal)
Vue.use(BootstrapVue)
Vue.use(Tabs);



Vue.component('dropdown', Dropdown)
Vue.component('font-awesome-icon', FontAwesomeIcon)


const router = new Router({
    routes,
    mode: 'history',
});