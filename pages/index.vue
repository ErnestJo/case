
<template>
 <v-container class="ma-2 pa-0 px-2" fluid>
   <div v-if=" statisticsvolunteer">
   <v-row justify="start" align="start" class="mt-2">
     <template>
    <summarycard
          
            v-for="(item, i) in patient_items"
            :key="i"
            :item="item"
          ></summarycard>
         
    </template>
  </v-row>
<v-row justify="start" align="start" class="mt-3" >
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
        <v-col cols="12" sm="6" class="ma-0 pa-0 mt-2">
          <v-card class="mr-1 ml-1 mx-auto default" height="400" dense>
            <line-chart-gradient :data="service_trends"></line-chart-gradient>
          </v-card>
        </v-col>
       
      </v-row>

</div>

  </v-container>
</template>
<script>
import SummaryCardComponent from "@/components/statistics/dashboard_card";
import PieChartComponent from "@/components/charts/PieChartComponent"; 
import LineChartGradient from "@/components/charts/line-chart-gradient";
import { mapGetters } from "vuex";
export default {
  
  components: {
      summarycard: SummaryCardComponent,
       "pie-chart": PieChartComponent,
        "line-chart-gradient": LineChartGradient
 },
 mounted() {},
  methods: {
   syncro: async function () {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        vm.$store.dispatch("getstatistics")
      ]).then(function () {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    },
  },  
  mounted: function () {
    this.syncro();
  },
computed: {
     ...mapGetters({
     
      states:"statusvolunteer",
      
    }),
    
    statisticsvolunteer(){
   return this.$store.getters.statusvolunteer;
},
    
    
   
  patient_trends: {
      get() {
       
        return [
          {
       series: [this.states.gender[0].gender__count,this.states.gender[1].gender__count],
            chartOptions: {
              labels: ["Male ", "Female"],
            },
            title: "Gender Composition",
          },
          {
 series: [this.states.employment[0].Status_of_Employment__count,this.states.employment[1].Status_of_Employment__count],
            chartOptions: {
              labels: [
                "Employed",
                "UnEmployed ",
              ],
            },
            title: "Employment contribution",
          },
          {
            series: [6,7],
            chartOptions: {
              labels: [ "Not Assigned","Assigned"],
            },
            title: "Event Assignement",
          }
         
        ];
      },
    },
   patient_items: {
      get() {
        return [
          {
            title: "Total Volunteer",
            subtitle: " Total  Volunteer",
            value:this.states.total_users,
            icon: "mdi-account-group-outline",
            color: "blue",
          }, 
          {
            title: "Males",
            subtitle: "Male ",
      
           value: this.states.gender[0].gender__count,
            icon: "mdi-gender-male",
            color: "indigo",
          },
          {
            title: "Females",
            subtitle: "Female ",
          value: this.states.gender[1].gender__count,
            icon: "mdi-gender-female",
            color: "deep-orange",
          }, {
            title: "Employed",
            subtitle: "Employed ",
            value: this.states.employment[0].Status_of_Employment__count,
            icon: "mdi-account-group-outline",
            color: "black",
          },
           {
            title: "UnEmployed",
            subtitle: "Un Employed ",
         value: this.states.employment[1].Status_of_Employment__count,
            icon: "mdi-account-group-outline",
            color: "deep-orange",
          },
           {
            title: "Attended Event",
            subtitle: "",
            value: 11,
            icon: "mdi-account-group-outline",
            color: "deep-orange",
          },
            {
            title: "Not Attended Event",
            subtitle: "",
            value: 11,
            icon: "mdi-account-group-outline",
            color: "deep-orange",
          },
          
        ];
      },
    },
    service_trends: {
      get() {
var item = this.states.regionv;
        var datas = new Array();
        if (item !== undefined) {
          item.forEach(element => {
  
            datas.push(element.Region__count);
           
           
          });
        }
        var data = {
          series: [
            {
              name: "Region",
              data: datas,
            },
          ],
          categories: this.states.region,
          title: "Volunteer Distribution in Tanzania",
        };
        return data;
      },
    },
  
},
};
</script>