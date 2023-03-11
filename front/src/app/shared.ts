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

const overflowCssIndex = {
    1: "backgroube",
    2: "Modéré",
    3: "Requis",
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
    },
    computeHit: function computeHit(p, key, o) {
        if (key.includes("par243")) {
            this.state243.data.per = _.toInteger(p);
            this.state243.data.color = cc(p);
            console.log("this.state243.data.per");
            console.log(this.state243.data);
        } else if (key.includes("c_maillot")) {
            this.stateMaillot.data.per = _.toInteger(p);
            this.stateMaillot.data.color = cc(p);
        } else if (key.includes("b_amphi")) {
            this.stateAmphiB.data.per = _.toInteger(p);
            this.stateAmphiB.data.color = cc(p);
        } else if (key.includes("par242AB")) {
            this.state241.data.per = _.toInteger(p);
            this.state241.data.color = cc(p);
        } else if (key.includes("par241")) {
            this.state241.data.per = _.toInteger(p);
            this.state241.data.color = cc(p);
        } else if (key.includes("f_neu251")) {
            this.state251.data.per = _.toInteger(p);
            this.state251.data.color = cc(p);
        } else if (key.includes("e_neu252")) {
            this.state252.data.per = _.toInteger(p);
            this.state252.data.color = cc(p);
        } else if (key.includes("neu253")) {
            this.state253.data.per = _.toInteger(p);
            this.state252.data.color = cc(p);
        }
    }


}