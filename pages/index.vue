<template>
  <v-container class="ma-2 pa-0 px-2" fluid>
    <div >
      <v-row justify="start" align="start" class="mt-4">
        <template>
          <!-- <v-progress-circular
          
          ></v-progress-circular> -->
          <summarycard
            v-for="(item, i) in patient_items"
            :key="i"
            :item="item"
          ></summarycard>
          <!-- <v-progress-circular
          
          ></v-progress-circular> -->
          <summarycard
            v-for="(item, i) in service_items"
            :key="item.title"
            :item="item"
          ></summarycard>

          <!-- <v-progress-circular ></v-progress-circular> -->

          <summarycard
        
            v-for="(item, i) in user_items"
            :key="item.title"
            :item="item"
          ></summarycard>

          <!-- <v-progress-circular
        
          ></v-progress-circular> -->

          <summarycard
            v-for="(item, i) in ward_bed"
            :key="item.title"
            :item="item"
          ></summarycard>
        </template>
      </v-row>
      <v-row justify="start" align="start" class="mt-3" v-if="patienttrends">
        <v-col
          v-for="(item, i) in patient_trends"
          :key="i"
          cols="12"
          sm="6"
          md="2"
          class="ma-0 pa-0 mt-1"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="default mx-1" :elevation="hover ? 3 : 1" dense>
                <v-card-text class="ma-0">
                  <pie-chart :data="item" :height="200"></pie-chart>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
      <v-row justify="start" align="start" class="mt-3">
        <v-col cols="12" sm="6" class="ma-0 pa-0 mt-2 ">
          <!-- <v-card class="mr-1 ml-1 mx-auto default " height="400" dense>
            <line-chart-gradient :data="service_trends"></line-chart-gradient>
          </v-card> -->
        </v-col>
        <v-col cols="12" sm="6" v-if="bsc_size > 0" class="ma-0 pa-0 mt-2">
          <v-card class="mr-1 ml-1 mx-auto default " height="400" dense>
            <area-chart-spline
              :data="bsc_chart"
              class="ma-0 "
            ></area-chart-spline>
          </v-card>
        </v-col>
      </v-row>
    </div>
  
      <v-progress-circular
        indeterminate
        color="grey lighten-5"
        size="16"
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import PieChartComponent from "@/components/charts/PieChartComponent";
import BasicBarChartComponent from "@/components/charts/BasicBarChart";
import SummaryCardComponent from "@/components/statistics/dashboard_card";
import DonutChartCompoent from "@/components/charts/DonutChartComponent";
import AreaChartSpline from "@/components/charts/area_chart_spline";
import LineChartGradient from "@/components/charts/line-chart-gradient";
import { mapGetters } from "vuex";
export default {
  components: {
    "pie-chart": PieChartComponent,
    "bar-chart": BasicBarChartComponent,
    "line-chart-gradient": LineChartGradient,
    summarycard: SummaryCardComponent,
    donutchart: DonutChartCompoent,
    "area-chart-spline": AreaChartSpline
  },
  data: () => ({
    apexdata: {
      series: [
        {
          name: "Trends",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ]
    },
    pie_options: {
      series: [44, 55, 13, 33],
      chartOptions: {
        labels: ["Apple", "Mango", "Orange", "Watermelon"]
      }
    }
  }),
  methods: {
    percentCalculation: function(percent, total) {
      var number = (percent / total) * 100;

      return +number.toFixed(2);
    },
    syncro: async function() {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        // vm.$store.dispatch("retrievephysicians"),
        // vm.$store.dispatch("retrieve_statistics")
      ]).then(function() {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    }
  },
  mounted: function() {
    const col = window.localStorage.getItem("color");
    if (col != null) {
      this.$vuetify.theme.themes.light.primary = col;
    }
    this.syncro();
    const exipire = window.localStorage.getItem("date");
    const status =
      (exipire === null ? new Date().getTime() - 2 : exipire) -
        new Date().getTime() >
      0;
    if (!status) {
      this.$store.dispatch("logout");
    }
  },

  created() {
    var color = localStorage.getItem("color");
    console.log(color);
    if (color != null) {
      this.$vuetify.theme.themes.light.primary = color;
    }
  },

  computed: {
    ...mapGetters({
      // staffs: "staffStatistics",
      // servicetrends: "serviceTrends",
      // users: "userStatistics",
      // patient: "patientStatistics",
      // ward: "wardstatistics",
      // services: "servicestatistics",
      // patienttrends: "patienttrends"
    }),
    // statistics() {
    //   return this.$store.getters.statistics;
    // },
    patient_trends: {
      get() {
        return [
          {
            series: [5, 6],
            chartOptions: {
              labels: ["Male ", "Female"]
            },
            title: "Gender Composition"
          },
          {
            series: [7, 8],
            chartOptions: {
              labels: [
                "Out Patient Department(OPD)",
                "In Patient Department (IPD) "
              ]
            },
            title: "OPD Vs IPD in (%)"
          },
          {
            series: [10, 11],
            chartOptions: {
              labels: ["Active", "Inactive"]
            },
            title: "Consultations distribution"
          },
          {
            series: [
              this.services.totalAssigned,
              this.services.totalUnAssigned
            ],
            chartOptions: {
              labels: ["Assigned", "Un-Assigned"]
            },
            title: "Consultations assignment"
          },
          {
            series: [12, 3],
            chartOptions: {
              labels: ["Occupied beds", "Free beds"]
            },
            title: "Beds distributions"
          },
          {
            series: [4, 1],
            chartOptions: {
              labels: ["Users", "Staffs"]
            },
            title: "System users Vs Staff's"
          }
        ];
      }
    },
    patient_items: {
      get() {
        return [
          {
            title: "Overall Total Patients",
            subtitle: "Overall Total Patients",
            value: 2,
            icon: "mdi-account-group-outline",
            color: "blue"
          },
          {
            title: "Males",
            subtitle: "Male Patients",
            value: 1,
            icon: "mdi-gender-male",
            color: "indigo"
          },
          {
            title: "Females",
            subtitle: "Female patients",
            value: 10,
            icon: "mdi-gender-female",
            color: "deep-orange"
          },
          {
            title: "Others",
            subtitle: "Special Gender",
            value: 11,
            icon: "mdi-gender-male-female",
            color: "orange"
          }
        ];
      }
    },
    user_items: {
      get() {
        return [
          {
            title: "Users",
            subtitle: "Users",
            value: 12,
            icon: "mdi-account-star",
            color: "orange"
          },
          {
            title: "Staff's",
            subtitle: "Staff's",
            value: 19,
            icon: "mdi-account-supervisor",
            color: "orange"
          }
        ];
      }
    },
    service_items: {
      get() {
        return [
          
          {
            title: "Total Case",
            subtitle: "Total consultations",
            measure: "p/d",
            value: 20,
            icon: "mdi-egg",
            color: "red"
          },
          {
            title: "Active Case",
            subtitle: "Active consultations",
            measure: "p/d",
            value: 21,
            icon: "mdi-order-alphabetical-ascending",
            color: "red"
          },
          {
            title: "Inactive Case",
            subtitle: "Inactive consultations",
            measure: "p/d",
            value: 25,
            icon: "mdi-order-bool-ascending",
            color: "red"
          },
          {
            title: "Assigned Case",
            subtitle: "Assigned consultations",
            measure: "p/d",
            value: 22,
            icon: "mdi-order-numeric-descending",
            color: "red"
          },
          {
            title: "Unassigned Case",
            subtitle: "Unassigned consultations",
            value: 12,
            icon: "mdi-order-bool-ascending",
            color: "teal"
          },
          {
            title: " Stations",
            subtitle: "OPD  consultations",
            value: 10,
            measure: "p/d",
            icon: "mdi-account-group-outline",
            color: "lime"
          },
          // {
          //   title: "IPD ",
          //   subtitle: "IPD  consultations",
          //   measure: "p/d",
          //   value: 89,
          //   icon: "mdi-bed",
          //   color: "green"
          // },
          // {
          //   title: "Physicians",
          //   subtitle: "No. of Physicians",
          //   value: 90,
          //   icon: "mdi-doctor",
          //   color: "light-blue"
          // }
          
        ];
      }
    },
    ward_bed: {
      get() {
        return [
          {
            title: "Total Cells",
            subtitle: "Total beds",
            value: 10,
            icon: "mdi-bed-single",
            color: "brown"
          },
          {
            title: "Occupied Cells",
            subtitle: "Occupied beds",
            value: 2,
            icon: "mdi-bunk-bed",
            color: "grey"
          },
          {
            title: "Un-Occupied Cells",
            subtitle: "Un-Occupied beds",
            value: 10,
            measure: "pt/min",
            icon: "mdi-bed-empty",
            color: "cyan"
          }
        ];
      }
    },

    bsc_size: {
      get() {
        return this.patienttrends == undefined ? 0 : this.patienttrends.length;
      }
    },
    bsc_chart: {
      get() {
        var item = this.patienttrends;
        var datatotal = new Array();
        var datamale = new Array();
        var datafemale = new Array();
        var dataother = new Array();
        var categories = new Array();

        item.forEach(element => {
          datatotal.push(element.total);
          datamale.push(element.male);
          datafemale.push(element.female);
          dataother.push(element.other);
          categories.push(element.date);
        });
        categories.push(0);
        var data = {
          series: [
            {
              name: "Total",
              data: datatotal
            },
            {
              name: "Male",
              data: datamale
            },
            {
              name: "Female",
              data: datafemale
            },
            {
              name: "Other",
              data: dataother
            }
          ],
          categories: categories
        };

        return data;
      }
    },
    service_trends: {
      get() {
        var item = this.servicetrends;
        var datas = new Array();
        var categories = new Array();
        if (item !== undefined) {
          item.forEach(element => {
            datas.push(element.total);
            var val = element.date;
            categories.push(new Date(val).toISOString().split("T")[0]);
          });
        }
        var data = {
          series: [
            {
              // name: "Number of Case",
              // data: datas
            }
          ],
          categories: categories
        };
        return data;
      }
    }
  },
  // created() {
  //   this.$store.dispatch("retrieve_profile");
  // }
};
</script>
