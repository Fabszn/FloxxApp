import _ from 'lodash'

function cc(p) {
    var pi = _.toInteger(p);
    if (pi <= 40) {
        return ["green"];
    } else if (pi > 40 && pi <= 70) {
        return ["orange"];
    } else if (pi > 70 && pi <= 100) {
        return ["red"];
    } else {
        return ["violet"];
    }
}

class Conference {
    title: string
    abstract: string
    kind: String
    room: string
}

var tokenKey = "X-Auth-Token"
var pAdmin = "isAdmin"

export default {
    colorByPercentage: function chooseColor(percentage) {
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
    storeToken: function st(token, isAdmin, name) {
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
    computeHit: function computeHit(percentage, key, refComponent) {
        //var room = _.split(key, "_", 2)[1];

        console.log("refComponent._243");
        console.log(refComponent._243.percent);
        refComponent._243.percent = 30;
        if (key.includes("par243")) {
            //refComponent._243.percent.value = _.toInteger(percentage);
            /*refComponent._243.bgShadow({
                inset: true,
                vertical: 2,
                horizontal: 2,
                blur: 4,
                opacity: .4,
                color: 'red'
            });*/
        } else if (key.includes("c_maillot")) {
            /*refComponent._maillot.updateProgress(_.toInteger(percentage));
            refComponent._maillot.updateFill({
                gradient: cc(percentage)
            });*/
        } else {
            console.log("out");
        }
    }


}