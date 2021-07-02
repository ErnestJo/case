<template>
  <v-container fill-height fluid grid-list-xl>
    <v-row>
      <v-col xs="12" md="3" sm="12" >
        <v-card flat>
         <v-img
            
            lazy-src="https://www.attendanceworks.org/wp-content/uploads/2020/09/img-placeholder.png"
            aspect-ratio="1"
            class="grey lighten-2 align-end"
            height="200px"
            max-height="200px"
         >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title>  
            </v-card-title>
         </v-img>
          <v-card-text>
            <p class="overline">Contacts</p>
            <v-divider></v-divider>

            <v-flex xs12 md12 class="ma-0 pa-0" v-if="address !== null">
              <v-address-card :address="address"></v-address-card>
            </v-flex>
          </v-card-text>

          <v-card-actions>
            <v-col>
              <v-btn
                small
                block
                class="button"
                v-if="address"
                dark
                :to="`/`"
                >View contacts</v-btn
              >
              <v-btn
                small
                block
                class="button"
                v-else
                dark
                :to="`/ireports/${this.$route.params.id}`"
              >
                Create Investigation Report
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
       <v-col xs="12" md="9" sm="12">
         <v-tabs
          slider-color="blue"
          background-color="primary"
          slider-size="3"
          left
          dark
          v-model="tab"
        >
          <v-tab class="ffont-weight-normal">
            <span
              ><v-icon small left>mdi-account-question</v-icon>Case Details</span
            >
          </v-tab>
          <v-tab class="font-weight-normal" @click.stop="getaccusers()" >
            <v-icon small left>mdi-clock-check</v-icon>
            Accusers
          </v-tab>
          <v-tab
            class="font-weight-normal" 
          @click.stop="getireports()">
            <v-icon small left>mdi-shield-sun</v-icon>
            Investigation Report
          </v-tab>
        </v-tabs>
           <v-tabs-items vertical v-model="tab">
              <v-tab-item class="default">
            <tb-case></tb-case>
            </v-tab-item>
            <v-tab-item class="default">
            <div class="">
              <v-btn
                class="button small ma-2"
                small
                dark
                 :to="`/accusers/${this.$route.params.id}`"
                ><v-icon small left>mdi-plus</v-icon>Add Accuser</v-btn
              >
              <tb-accuser></tb-accuser>
            </div>
          </v-tab-item>
          <v-tab-item class="default"  >
            <tb-ireport
            ></tb-ireport>
          </v-tab-item>
           </v-tabs-items>
       </v-col>
    </v-row>

  </v-container>
</template>

<script>

import CaseTab from "@/components/profile/tabs/cases.vue"
import c_type_divider from "@/components/profile/c_type_divider";
import AccuserTab from "@/components/profile/tabs/accuser.vue";
import AddressCard from "@/components/profile/c_address_card.vue";
import IreportTab from "@/components/profile/tabs/iReport.vue";

export default {
  props: {
    userdata:{
      type: Object,
      default: null
    }
    },
  components: {
    'v-type-divider': c_type_divider,
    'tb-case': CaseTab,
    'tb-accuser': AccuserTab,
    'v-address-card': AddressCard,
    'tb-ireport': IreportTab
  },

    data() {
    return {
      dialog: false,
      uploaddialog: false,
      currentFile: undefined,
      rate: false,
      tab: null,
      valid: true,
      rating: 2,
      posts: null,
      comments: null,
      followings: null,
      followers: null,
      selectedstaffId: null,
      active: true,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      address: null,
      staff:null,
      accusers: null,
      ireports: null,
      cards:[],
    }
  },
  computed:{
 
  },

  methods: {

        async getaccusers(){
        return await this.$api.$get(`api/v1/cases/${this.$route.params.id}/accusers`)
         .then(response => {
          if (response !== null) {
            this.accusers = response;
          }
        }).catch(error => {
          console.log(error);

        });

    },

      async getireports(){
        return await this.$api.$get(`api/v1/cases/${this.$route.params.id}/investigationReports`)
         .then(response => {
          if (response !== null) {
            this.ireports = response;
          }
        }).catch(error => {
          console.log(error);

        });

    },
  }
}
</script>

<style>
.basil {
  background-color: #fffbe6 !important;
}

.basil--text {
  color: #356859 !important;
}
.v-window,
.v-item-group .v-window__container,
.v-window-item {
  width: 100%;
}
</style>


