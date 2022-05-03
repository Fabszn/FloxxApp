import { createApp } from 'vue'
import { createRouter } from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routeur-config.js';
import Dropdown from 'vue-simple-search-dropdown';
import VueLodash from 'vue-lodash';
import Notifications from 'vue-notification'
import './floxxStyle.css'
import async from 'async'
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faSignInAlt, faArrowCircleLeft, faSignOutAlt, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './state'
import Tabs from 'vue-tabs-component';

const router = createRouter({
    routes
});

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
Object.defineProperty(app.prototype, '$async', { value: async });

app.use(VuejsDatatableFactory);
app.use(VueResource);
app.use(router);
app.use(Dropdown);
app.use(VueLodash);
app.use(Notifications)
app.use(VModal)
app.use(BootstrapVue3)
app.use(Tabs);



app.component('dropdown', Dropdown)
app.component('font-awesome-icon', FontAwesomeIcon)