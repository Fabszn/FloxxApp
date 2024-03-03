<template>
  <div>
    <div>
      <div class="d-flex justify-content-around separate-headfooter">
        <div>
          <button
            v-on:click="backAdminMenu"
            type="button"
            class="btn btn-secondary navbtn"
          >
            <font-awesome-icon icon="arrow-circle-left" />
          </button>
        </div>
      </div>
      <div class="screen-title">Statistics</div>

      <div class="selector-item">
        <label>Select day</label>
        <v-select
          :options="days"
          v-model="selectedDay"
          @option:selected="setSelectedDay"
        ></v-select>
      </div>
      <div class="selector-item">
        <label>Select time</label>
        <v-select
          :options="currentTimeSlots"
          v-model="selectedSlot"
          @option:selected="setSelectedSlot"
        ></v-select>
      </div>
    </div>

    <div>
      <apexchart
        type="bar"
        :options="chartOptionsBySlotTime"
        :series="series"
      ></apexchart>
    </div>

    <hr />

    <div class="chartGlobalFilling">
      <apexchart
        :options="chartOptionsGlobalFilling"
        :series="perseries"
      ></apexchart>
    </div>
    <hr />
    <div class="chartDayFilling">
      <div class="chartDayFilling-item">
        <apexchart
          :options="chartOptionsDay1"
          :series="perseriesDay1"
        ></apexchart>
      </div>
      <div class="chartDayFilling-item">
        <apexchart
          :options="chartOptionsDay2"
          :series="perseriesDay2"
        ></apexchart>
      </div>
      <div class="chartDayFilling-item">
        <apexchart
          :options="chartOptionsDay3"
          :series="perseriesDay3"
        ></apexchart>
      </div>
    </div>
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
    const perseries = ref([]);
    const perseriesDay1 = ref([]);
    const perseriesDay2 = ref([]);
    const perseriesDay3 = ref([]);
    const perlabel = ref([]);
    const selectedDay = ref(null);
    const selectedSlot = ref(null);
    const currentTimeSlots = ref(new Array<string>());

    return {
      categories,
      series,
      perseries,
      perseriesDay1,
      perseriesDay2,
      perseriesDay3,
      perlabel,
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
      chartOptionsBySlotTime: {
        title: {
          text: "Repartition of filling by slot time",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        tooltip: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        chart: {
          id: "compareShart",
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
      chartOptionsGlobalFilling: {
        title: {
          text: "Repartition of filling on whole conference",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        legend: {
          labels: { useSeriesColors: true },
          position: "bottom",
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          width: 700,
          type: "pie",
        },
        labels: this.perlabel,
      },
      chartOptionsDay1: {
        title: {
          text: "Repartition of filling on whole conference Wednesday",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        legend: {
          labels: { useSeriesColors: true },
          position: "bottom",
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          width: 700,
          type: "donut",
        },
        labels: this.perlabel,
      },
      chartOptionsDay2: {
        title: {
          text: "Repartition of filling on whole conference Thursday",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        legend: {
          labels: { useSeriesColors: true },
          position: "bottom",
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          width: 700,
          type: "donut",
        },
        labels: this.perlabel,
      },
      chartOptionsDay3: {
        title: {
          text: "Repartition of filling on whole conference Friday",
          align: "center",
          margin: 40,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#FFF",
          },
        },
        legend: {
          labels: { useSeriesColors: true },
          position: "bottom",
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          width: 700,
          type: "donut",
        },
        labels: this.perlabel,
      },
      series: [
        {
          name: "%",
          data: this.perseries,
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
        this.stats[this.selectedDay.label][this.selectedSlot .label];
      this.chartOptionsBySlotTime = {
        ...this.chartOptionsBySlotTime,
        ...{
          xaxis: {
            categories: _.map(dataToDisplay, (i) => i["title"]),
          },
        },
      };
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
        fetch("/api/admin/stats/slots", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            this.stats = p;
          });
      });
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/admin/stats/slots/_filling/0", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            (this.perseries = p["percentages"]),
              (this.chartOptionsGlobalFilling = {
                ...this.chartOptionsGlobalFilling,
                ...{
                  labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
                },
              });
          });
      });
      
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/admin/stats/slots/_filling/1", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            (this.perseriesDay1 = p["percentages"]),
              (this.chartOptionsDay1 = {
                ...this.chartOptionsDay1,
                ...{
                  labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
                },
              });
          });
      });
      
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/admin/stats/slots/_filling/2", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            (this.perseriesDay2 = p["percentages"]),
              (this.chartOptionsDay2 = {
                ...this.chartOptionsDay2,
                ...{
                  labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
                },
              });
          });
      });
     
      shared.securityAccess(this.$router, (v) => {
        fetch("/api/admin/stats/slots/_filling/3", {
          headers: shared.tokenHandle(),
        })
          .then((response) => response.json())
          .then((p) => {
            (this.perseriesDay3 = p["percentages"]),
              (this.chartOptionsDay3 = {
                ...this.chartOptionsDay3,
                ...{
                  labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
                },
              });
          });
      });
    },
  },
});

/*function fetchData(url, series, option) {
  return shared.securityAccess(this.$router, (v) => {
    fetch(url, {
      headers: shared.tokenHandle(),
    })
      .then((response) => response.json())
      .then((p) => {
        (series = p["percentages"]),
          (option = {
            ...option,
            ...{
              labels: _.map(p["labels"], (i) => "Filled at " + i + "%"),
            },
          });
      });
  });
}*/
</script>
<style scoped>
.selector-item {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.params-selector {
  width: 32%;
}

.chartGlobalFilling {
  display: flex;
  justify-content: center;
}
.chartDayFilling {
  display: flex;
  flex-direction: column;
}
</style>