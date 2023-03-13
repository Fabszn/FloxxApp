import _ from 'lodash'



import { ref, reactive, toRefs } from "@vue/runtime-core";

const overflowCssIndex = {
    1: "overflowJustFull",
    2: "overflowMedium",
    3: "overflowRequiered",
}

var tokenKey = "X-Auth-Token"
var pAdmin = "isAdmin"

export default {
    colorByPercentage: function chooseColor(percentage: number): string {
        return cc(percentage)
    },
    securityAccess: function sa(router, run) {
        var token = sessionStorage.getItem(tokenKey);
        if (_.isNull(token)) {
            router.push("/?authenticate=no")
        } else {
            run()
        }
    },
    storeToken: function st(token: string, isAdmin: string, name: string) {
        sessionStorage.setItem(tokenKey, token);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem(pAdmin, isAdmin);
    },
    cleanToken: function ch() {
        sessionStorage.clear();
    },
    tokenHandle: function th() {
        var token: string = sessionStorage.getItem(tokenKey) ?? 'not available';
        const h = new Headers()
        h.append('Authorization', token)
        h.append('Accept', "application/json")
        return h
    },
    readAdminEtat: function th() {
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
        return "red";
    } else {
        return "violet";
    }
}