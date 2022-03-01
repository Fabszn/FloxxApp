function cc(p) {
    var p = _.toInteger(p);
    if (p <= 40) {
        return ["green"];
    } else if (p > 40 && p <= 70) {
        return ["orange"];
    } else if (p > 70 && p <= 100) {
        return ["red"];
    } else {
        return ["violet"];
    }
}

var tokenKey = "X-Auth-Token"

export default {
    colorByPercentage: function chooseColor(percentage) {
        cc(percentage)
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
        sessionStorage.setItem("isAdmin", isAdmin);
    },
    cleanToken: function ch() {
        sessionStorage.clear(tokenKey);
        sessionStorage.clear("isAdmin");
        sessionStorage.clear("name");
    },
    tokenHandle: function th() {
        var token = sessionStorage.getItem(tokenKey);
        return {
            Authorization: token,
            Accept: "application/json"
        }
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