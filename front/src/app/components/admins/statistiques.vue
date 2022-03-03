<template>
  <div>
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button v-on:click="backAdminMenu" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
      <div>
        <button v-on:click="refresh" type="button" class="btn btn-secondary">
          <font-awesome-icon icon="sync" />
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      &nbsp;
      &nbsp;
    </div>
    <b-input-group size="sm">
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>

    <b-table
      head-variant="light"
      details-td-class="cell"
      dark="true"
      responsive="true"
      striped
      hover
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :fields="fields"
      :items="items"
      :filter="filter"
    >
      <template v-slot:cell(slotId)="data">{{ data.value.id }}</template>
      <template v-slot:cell(talk)="data">{{ data.value.title }} ({{ data.value.talkType }})</template>
      <template v-slot:cell(percentage)="data">{{ data.value }}</template>

      <template v-slot:head(slotId)>Id</template>
      <template v-slot:head(percentage)>%</template>
      <template v-slot:head(roomid)>Room</template>
      <template v-slot:head(fromtime)>Start</template>
      <template v-slot:head(totime)>End</template>
    </b-table>
  </div>
</template>



<script>
import shared from "../../shared";
export default {
  data() {
    return {
      items: [],
      sortBy: "slotId",
      sortDesc: false,
      fields: [
        { key: "slotId", sortable: true },
        { key: "talk", sortable: true },
        { key: "percentage", sortable: true },
        { key: "roomid", sortable: true },
        { key: "fromtime", sortable: true },
        { key: "totime", sortable: false },
        { key: "day", sortable: false }
      ],
      filter: null,
      filterOn: ["slotId"]
    };
  },
  created: function() {
    shared.securityAccess(this.$router, p => {
      this.$http
        .get("api/stats/slots", {
          headers: shared.tokenHandle()
        })
        .then(p => {
          this.items = p.data;
        });
    });
  },
  methods: {
    backAdminMenu: function() {
      this.$router.push("/admin");
    },
    refresh: function() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.cell {
  color: blanchedalmond;
}
</style>