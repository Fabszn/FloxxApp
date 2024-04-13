<template>
  <div class="d-flex flex-column">
    <router-view />
    <div class="version">
      {{ version }} - <span> {{ username }} </span>
    </div>
    <div id="username"></div>
  </div>

</template>
<script setup lang="ts">

import { onBeforeMount, computed, Ref, ref } from 'vue';
import { useStore } from 'vuex';
import _ from "lodash";

const store = useStore();
const version:Ref<String> =  ref("");
const username:Ref<String> =  computed(() => store.state.username);

onBeforeMount(async () => {
  if (_.isEmpty(store.state.username)) {
        await store.dispatch('fetchUserInfo');
    }
  fetch("/infos")
    .then((response) => response.text())
    .then(
      (v) => {
        version.value = v;
      },
      (error) => {
        console.log(error);
      }
    );
    
    

});




</script>