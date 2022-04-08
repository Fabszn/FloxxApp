function cc(p) {
    console.log(p);
    console.log(p);
    console.log(p);
    console.log(p);
    console.log(p);
    console.log(p);
    console.log(p);
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
        sessionStorage.clear(tokenKey);
        sessionStorage.clear(pAdmin);
        sessionStorage.clear("name");
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
        var room = _.split(key, "_", 2)[1];

        if (key.includes("par243")) {
            refComponent._243.updateProgress(_.toInteger(percentage));
            refComponent._243.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("c_maillot")) {
            refComponent._maillot.updateProgress(_.toInteger(percentage));
            refComponent._maillot.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("b_amphi")) {
            refComponent._amphiB.updateProgress(_.toInteger(percentage));
            refComponent._amphiB.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("par242AB")) {
            refComponent._242.updateProgress(_.toInteger(percentage));
            refComponent._242.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("par241")) {
            refComponent._241.updateProgress(_.toInteger(percentage));
            refComponent._241.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("f_neu251")) {
            refComponent._251.updateProgress(_.toInteger(percentage));
            refComponent._251.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("e_neu252")) {
            refComponent._252.updateProgress(_.toInteger(percentage));
            refComponent._252.updateFill({
                gradient: cc(percentage)
            });
        } else if (key.includes("neu253")) {
            refComponent._253.updateProgress(_.toInteger(percentage));
            refComponent._253.updateFill({
                gradient: cc(percentage)
            });
        }
    }


}