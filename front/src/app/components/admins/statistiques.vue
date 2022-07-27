<template>
  <div>
    
    <div class="d-flex justify-content-around separate-headfooter">
      <div>
        <button
          v-on:click="backAdminMenu"
          type="button"
          class="btn btn-secondary"
        >
          <font-awesome-icon icon="arrow-circle-left" />
        </button>
      </div>
    </div>
    <div>
      <v-select :options="days" v-model="selectedDay" @option:selected="setSelectedDay"></v-select>
      <v-select :options="currentTimeSlots" v-model="selectedSlot" @option:selected="setSelectedSlot"></v-select>
    </div>

    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import shared from "../../shared";
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { StatItem } from "../../models";
import _ from "lodash";

class Day {
    id: string;
    label: string;
    constructor(dayId, day) {
        this.label = day;
        this.id = dayId;
    }
}

class SlotItem {
    id: string;
    label: string;
    constructor(dayId, day) {
        this.label = day;
        this.id = dayId;
    }
}

export default defineComponent({
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const categories = ref(new Array<string>());
    const series = ref([]);
    const selectedDay = ref(null);
    const selectedSlot = ref(null);
    const currentTimeSlots = ref(new Array<string>());

    return {
      categories,
      series,
      selectedDay,
      currentTimeSlots,
      selectedSlot
    };
  },
  created() {
    this.initData();
  },
  data() {
    return {
      days: [new Day(1,"wednesday"), new Day(2,"thursday"),new Day(3,"friday")], // to make dynamique
      stats: new Array<StatItem>(),
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: this.categories,
        },
      },
      series: [
        {
          name: "%",
          data: this.series,
        },
      ],
    };
  },
  methods: {
    setSelectedDay(){
        const current = this.stats[this.selectedDay.label];
        this.currentTimeSlots = _.map(_.keys(current), v => new SlotItem(v,v))
    },
    setSelectedSlot(){
        
        const dataToDisplay = this.stats[this.selectedDay.label][this.selectedSlot.label];
        this.categories =   _.map(dataToDisplay, i => i["talk"].title)
        const s =_.map(dataToDisplay, i => i["percentage"])
        this.series = [{
          name: "test",
          data: s
        },{
          name: "test1",
          data: s
        }]
        
    },
    backAdminMenu: function () {
      this.$router.push("/adminMenu");
    },
    initData() {
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/stats/slots", {
          headers: shared.tokenHandle(),
        }).then((response) => response.json())
          .then((p) => {
            this.stats = p;
          });
      });
    },
  },
});
</script>