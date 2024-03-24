<template>
  <div class="container-fluid">
    <div id="errorlogin" class="errorMsg" :hidden="loginFailedMsg">
      Authentification Failed
    </div>
    <div id="errorUnthorized" class="errorMsg" :hidden="notAuthorized">
      Authentification required
    </div>
    <form id="signup-form" @submit.prevent="processForm">
      <div class="form-group">
        <label for="login">Login</label>
        <input id="login" type="text" v-model="login" class="form-control" placeholder="Enter login" />
      </div>
      <div class="form-group">
        <label for="mdp">Password</label>
        <input id="mdp" type="password" class="form-control" v-model="password" placeholder="Enter password" />
      </div>
      <div class="d-flex justify-content-center p-3">
        <button type="submit" class="btn btn-primary">
          Submit
          <font-awesome-icon icon="sign-in-alt" />
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import _ from "lodash";
import shared from "../shared";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    var email = ""
    var login = ""
    var password = ""
    var loginFailedMsg = true;
    var notAuthorized = true;

    function processForm() {
      Promise.all([
        fetch("/login", {
          body: JSON.stringify({
            login: this.login,
            mdp: this.password,
          }),
          method: "POST",
        })
          .then((response) => response.json())
          .then(
            (r) => {
              shared.storeToken(r.token, r.isAdmin, r.name);
              store.commit("username", r.name);
            },
            (r) => {
              this.loginFailedMsg = false;
              router.push("/login")

            }
          )

      ])
        .then((v) => router.push("/menu"));
    }

    return {
      email,
      login,
      password,
      loginFailedMsg,
      notAuthorized,
      processForm
    }
  },
  created() {
    const a = this.$route.query.authenticate;
    if (a == "no") {
      this.notAuthorized = false;
    }
  },

};
</script>

<style>
.errorMsg {
  background-color: red;
  font-size: 16px;
  color: whitesmoke;
  text-align: center;
  margin: 17px 13px 14px 10px;
  padding: 10px 0px 10px 0px;
}
</style>
