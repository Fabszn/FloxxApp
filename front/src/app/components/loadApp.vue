<template>
  <div class="spinner">
    <div>Please wait while loading Floxx ....</div>
    <div><b-spinner label="Loading..."></b-spinner></div>
  </div>
</template>

<script>
import _ from "lodash";
import shared from "../shared";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onBeforeMount } from "vue";
export default {


  setup() {
    const router = useRouter();
    const store = useStore();


    onBeforeMount(() => {
      fetch("try-reco", {
        headers: shared.tokenHandle(),
        method: "POST",
      })
        .then((response) => response.json())
        .then((p) => {
          shared.storeToken(p.token, p.isAdmin, p.name);
          store.commit("username", p.name);
          router.push("/menu");
        })
        .catch((err) => {
          router.push("/login");
        });
    }
    )

    return {}
  }
}

</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
}
</style>