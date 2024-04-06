<template>
  <div>
    <input
      type="file"
      id="imageFile"
      :onchange="onFileChanged"
      capture="environment"
      accept="image/*"
    />
    <button type="button" v-on:click="sendPhoto" class="btn btn-secondary">
      Send
    </button>
    <div>Number of people : </div>
    <div> <span > {{ nbPersonne }} </span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  setup() {},
  data: function () {
    return {
      nbPersonne: "",
    };
  },
  methods: {
    onFileChanged: function ($event) {
      console.log("onfile changed");
      const target = $event.target;
      if (target && target.files) {
        console.log(target.files[0]);
        this.fileItem = target.files[0];
      }
    },
    sendPhoto: function () {
      console.log(this.fileItem);
      let formData = new FormData();
      formData.append("file", this.fileItem);
      fetch("https://floxx-ia.cleverapps.io/photo", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((res) => {
          this.nbPersonne = res.nbp;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
