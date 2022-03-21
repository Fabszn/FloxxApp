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
    <b-input-group size="sm">
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>
<dropdown
    :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}, { id: 3, name: 'Option 4'}]"
    v-on:selected="validateSelection"
    :disabled="false"
    name="zipcode"
    :maxItem="10"
    placeholder="Please select an option">
</dropdown>

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
        { key: "percentage", sortable: true }
      ],
      filter: null,
      filterOn: ["slotId"]
    };
  },
  created: function() {

  },
  methods: {
    backAdminMenu: function() {
      this.$router.push("/admin");
    },
    validateSelection: function(value) {
    console.log(value.id)
    },
    refresh: function() {
      shared.securityAccess(this.$router, p => {
            this.$http
              .get("/api/stats/slots", {
                headers: shared.tokenHandle()
              })
              .then(p => {
                this.items = p.data;
              });
          });
    }
  }
};
</script>