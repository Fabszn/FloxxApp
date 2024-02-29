import _ from 'lodash'
import Vue from 'vue';
import Vuex, { useStore } from 'vuex';
import { useRouter } from 'vue-router';



import { ref, reactive, toRefs } from "@vue/runtime-core";

const overflowCssIndex = {
    1: "overflowJustFull",
    2: "overflowMedium",
    3: "overflowRequiered",
}

var tokenKey = "X-Auth-Token"
var pAdmin = "isAdmin"


export default {

    checkStore: async function (store) {
            if (_.isEmpty(store.state.rooms)) {
            await store.dispatch('fetchRooms');
            await store.dispatch('fetchPlanning');
            await store.dispatch('fetchDays');
        }
    },
    colorByPercentage: function (percentage: number): string {
        return cc(percentage)
    },

    tokenHandle: function () {
        const token: string = sessionStorage.getItem(tokenKey) ?? 'not available';
        const h = new Headers()
        h.append('Authorization', token)
        h.append('Accept', "application/json")
        return h

    },
    securityAccess: function (router, run) {
        var token = sessionStorage.getItem(tokenKey);
        if (_.isNull(token)) {
            router.push("/?authenticate=no")
        } else {
            run()
        }
    },
    storeToken: function (token: string, isAdmin: string, name: string) {
        sessionStorage.setItem(tokenKey, token);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem(pAdmin, isAdmin);
    },
    cleanToken: function () {
        sessionStorage.clear();
    },
    readAdminEtat: function () {
        return sessionStorage.getItem(pAdmin) == "true";
    }
}


function cc(p: number) {
    var pi = _.toInteger(p);
    if (pi <= 40) {
        return "green";
    } else if (pi > 40 && pi <= 70) {
        return "orange";
    } else if (pi > 70 && pi <= 100) {
        return "#8B0000";
    } else {
        return "violet";
    }
}