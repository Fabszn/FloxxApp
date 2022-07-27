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
      <v-select
        :options="days"
        v-model="selectedDay"
        @option:selected="setSelectedDay"
      ></v-select>
      <v-select
        :options="currentTimeSlots"
        v-model="selectedSlot"
        @option:selected="setSelectedSlot"
      ></v-select>
    </div>

    <apexchart
      width="1000"
      height="350"
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
    const categories = ref([]);
    const series = ref([]);
    const selectedDay = ref(null);
    const selectedSlot = ref(null);
    const currentTimeSlots = ref(new Array<string>());

    return {
      categories,
      series,
      selectedDay,
      currentTimeSlots,
      selectedSlot,
    };
  },
  created() {
    this.initData();
  },
  data() {
    return {
      days: [
        new Day(1, "wednesday"),
        new Day(2, "thursday"),
        new Day(3, "friday"),
      ], // to make dynamique
      stats: new Array<StatItem>(),
      chartOptions: {
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        chart: {
          id: "vuechart-example",
        },
        yaxis: {
          labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 500,
            style: {
              colors: "#FFF",
              fontSize: "20px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
        xaxis: {
          categories: this.categories,
          labels: {
            show: true,
            style: {
              colors: "#FFF",
              fontSize: "11px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            },
          },
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
    setSelectedDay() {
      const current = this.stats[this.selectedDay.label];
      this.currentTimeSlots = _.map(_.keys(current), (v) => new SlotItem(v, v));
    },
    setSelectedSlot() {
      const dataToDisplay =
        this.stats[this.selectedDay.label][this.selectedSlot.label];
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: _.map(dataToDisplay, (i) => i["talk"].title),
          },
        },
      };

      //this.categories =  ["zerze", 1992, 1993, 1994, 1995, 1996, 1997, 1998]; //
      const s = _.map(dataToDisplay, (i) => i["percentage"]);
      this.series = [
        {
          name: "test",
          data: s,
        },
      ];
    },
    backAdminMenu: function () {
      this.$router.push("/adminMenu");
    },
    initData() {
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/stats/slots", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            this.stats = p;
          });
      });
    },
  },
});
</script>