<template>
  <div class="container-fluid">
    <div id="errorlogin" class="errorMsg" :hidden="loginFailedMsg">Authentification Failed</div>
    <div id="errorUnthorized" class="errorMsg" :hidden="notAuthrized">Authentification required</div>
    <form id="signup-form" @submit.prevent="processForm">
      <div class="form-group">
        <label for="login">Email address</label>
        <input
          id="login"
          type="email"
          v-model="email"
          class="form-control"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="mdp">Password</label>
        <input
          id="mdp"
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit &nbsp;
        <font-awesome-icon icon="sign-in-alt" />
      </button>
    </form>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      loginFailedMsg: true,
      notAuthrized: true
    };
  },
  created() {
    var a = this.$route.query.authenticate;
    if (a == "no") {
      this.notAuthrized = false;
    }
  },
  methods: {
    processForm: function() {
      this.$http
        .post(
          BACKEND_URL + "api/login",
          JSON.stringify({
            login: this.email,
            mdp: this.password
          })
        )
        .then(
          r => {
            sessionStorage.setItem("token", r.body.token);
            sessionStorage.setItem("name", r.body.name);
            sessionStorage.setItem("isAdmin", r.body.isAdmin);
            this.$router.push("/menu");
          },
          r => {
            this.loginFailedMsg = false;
          }
        );
    }
  }
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

