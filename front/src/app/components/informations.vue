<template>
  <div class="d-flex justify-content-center separate-headfooter">
    <button
      v-on:click="backMenu"
      type="button"
      class="btn btn-secondary navbtn"
    >
      <font-awesome-icon icon="arrow-circle-left" />
    </button>
  </div>

  <div v-if="this.adminState">
    <button
      type="button"
      class="btn btn-secondary btn-lg new-information"
      v-on:click="addInformation"
    >
      Add new Info
    </button>
  </div>

  <div class="info-list">
    <div v-for="item in items" :key="item.id">
      <button
        type="button"
        class="btn btn-secondary btn-lg block"
        v-on:click="readInformation(item.id)"
      >
        {{ item.title }}
        <span
          class="badge text-bg-secondary text-bg-danger"
          v-if="isNewInfo(item.id)"
          >New</span
        >
      </button>
    </div>
  </div>

  <GDialog v-model="dialogState">
    <div class="floxxmodal over">
      <div class="modalinfo">
        Add new information

        <div>
          <label for="title">Title</label>
          <input
            id="title"
            class="form-control"
            v-model="title"
            placeholder="Information title"
          />
          <label for="content">Content</label>
          <QuillEditor theme="snow" contentType="html" v-model:content="content" placeholder="Information content" />
        
        </div>
      </div>
      <div class="buttonmodal">
        <button type="button" v-on:click="hide" class="btn btn-secondary">
          Close
        </button>
        <button
          type="button"
          v-on:click="saveInformation"
          class="btn btn-secondary"
        >
          Save
        </button>
      </div>
    </div>
  </GDialog>
  <GDialog v-model="dialogStateRead">
    <div class="floxxmodal over">
      <div class="modalinfo">
        <div class="info-title">
          <p class="info-title-">{{ this.currentReadInfo.title }}</p>
        </div>
        <div class="info-content">
          <p class="info-content">{{ this.currentReadInfo.content }}</p>
        </div>
      </div>
      <div class="buttonmodal">
        <button type="button" v-on:click="hideRead" class="btn btn-secondary">
          Close
        </button>
        <button
          v-if="this.adminState"
          type="button"
          v-on:click="archiveInformation(currentReadInfo.id)"
          class="btn btn-secondary"
        >
          Delete
        </button>
      </div>
    </div>
  </GDialog>
</template>

<script>
import shared from "../shared";
import { defineComponent, ref } from "@vue/runtime-core";
import { useToast } from "vue-toastification";
import _ from "lodash";
import { Information } from "../models";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default defineComponent({
  components: {
    QuillEditor
  },
  setup() {
    const items = ref(Array[Information]);
    const unReadInfoId = ref([]);
    const currentReadInfo = new Information(-1, "", "", "");
    const title = "";
    const content = ref(null);
    const adminState = ref(false);
    const toast = useToast();
    const refreshInfoList= ref(0)

    return {
      toast,
      adminState,
      title,
      content,
      items,
      currentReadInfo,
      unReadInfoId,
      refreshInfoList
    };
  },
  data: function () {
    return {
      dialogState: false,
      dialogStateRead: false,
    };
  },
  created() {
    shared.securityAccess(this.$router, (p) => {
      Promise.all([
        fetch("/api/informations", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            this.items = map2Information(p);
          }),
        ,
        reloadUnRead.bind(this)(),
      ]);
    });

    this.adminState = shared.readAdminEtat();
  },
  methods: {
    progress_end: function () {},
    progress: function () {},
    hide() {
      this.dialogState = false;
    },
    hideRead() {
      this.currentReadInfo.reset();
      this.dialogStateRead = false;
    },
    backMenu: function () {
      this.$router.push("/menu");
    },
    addInformation: function () {
      this.dialogState = true;
    },
    saveInformation: function () {
      /*fetch("/api/informations", {
        headers: shared.tokenHandle(),
        body: JSON.stringify({
          title: this.title,
          content: this.content,
        }),
        method: "POST",
      })
        .then((response) => response.json())
        .then((p) => {
          this.items = map2Information(p);
          this.title = "";
          this.content = "";
          reloadUnRead.bind(this)();
        });*/
        console.info("save " + this.content);
        
      this.dialogState = false;
    },
    archiveInformation: function (infoId) {
      fetch("/api/informations/_archive/" + infoId, {
        headers: shared.tokenHandle(),
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((p) => {
          this.items = map2Information(p);
        });
      this.dialogStateRead = false;
    },
    isNewInfo: function (infoId) {
      return _.size(_.filter(this.unReadInfoId, (id) => infoId == id)) > 0;
    },
    readInformation: function (infoId) {
      const ci = _.filter(this.items, (item) => item.id == infoId)[0];
      this.currentReadInfo.updateInfo(
        ci.id,
        ci.title,
        ci.content,
        ci.dateCreate
      );
      markInfoAsRead.bind(this)(infoId);
      this.dialogStateRead = true;
    },
  },
});

function reloadUnRead() {
  return fetch("/api/informations/_unread", {
    headers: shared.tokenHandle(),
  })
    .then((response) => response.json())
    .then((p) => {
      this.unReadInfoId = p;
    });
}

function markInfoAsRead(infoId) {
  return fetch("/api/informations/_markAsRead/" + infoId, {
    headers: shared.tokenHandle(),
    method: "PATCH",
  }).then((response) => response.json())
    .then((p) => {
      this.unReadInfoId = p;
    });
}

function map2Information(jsonresp) {
  var r = _.map(
    jsonresp,
    (info) =>
      new Information(info.id, info.title, info.content, info.dateCreate)
  );
  return r;
}
</script>

<style  scoped>
.block {
  width: 100%;
  border: 1px solid #f6f2c9;
  background-color: #30260f;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
.new-information {
  width: 100%;
  border: 1px solid #f6f2c9;
  background-color: #7d210d;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.info-list {
  margin: 10px;
}
.newInfo {
  background-color: #7d210d;
}

.info-content {
  border-radius: 10px;
  background-color: #30260f;
  color: #f6f2c9;
  margin: 5px;
  height: 180px;
  overflow: auto;
}
.info-title {
  display: flex;
  justify-content: center;
  font-size: 30px;
  border-radius: 10px;
  background-color: cadetblue;
  color: #f6f2c9;
  margin: 5px;
}

</style>
