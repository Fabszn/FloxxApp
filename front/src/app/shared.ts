import _ from 'lodash'

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
        var token = sessionStorage.getItem(tokenKey);
        return {
            Authorization: token,
            Accept: "application/json"
        }
    },
    readAdminEtat: function th() {
        return sessionStorage.getItem(pAdmin) == "true";
    },
    computeHit: function computeHit(p, key) {
        if (key.includes("par243")) {
            this.per243 = _.toInteger(p);
            this.col243 = cc(p);
        } else if (key.includes("c_maillot")) {
            this.perMaillot = _.toInteger(p);
            this.col24Maillot = cc(p);
        } else if (key.includes("b_amphi")) {
            this.perAmphiB = _.toInteger(p);
            this.col24AmphiB = cc(p);
        } else if (key.includes("par242AB")) {
            this.per242 = _.toInteger(p);
            this.col242 = cc(p);
        } else if (key.includes("par241")) {
            this.per241 = _.toInteger(p);
            this.col241 = cc(p);
        } else if (key.includes("f_neu251")) {
            this.per251 = _.toInteger(p);
            this.col251 = cc(p);
        } else if (key.includes("e_neu252")) {
            this.per252 = _.toInteger(p);
            this.col252 = cc(p);
        } else if (key.includes("neu253")) {
            this.per253 = _.toInteger(p);
            this.col253 = cc(p);
        }
    }


}