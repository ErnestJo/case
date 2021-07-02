<template>
  <div>
    <div class="breadcrumb" >
      <router-link to="/"></router-link>
      <router-link to="/cases">
      </router-link>
      <router-link :to="`/cases/${this.$route.params.id}`" class="active">
      </router-link>
    </div>

    <v-card class="mx-auto default">
      <div >
        <card-info
          :casesdata="casedata"
          v-on:update-profile="viewdatacase"
        ></card-info>
      </div>

      <div >
        <div height="500" flat>
          <v-layout align-center justify-center column fill-height>
            <v-flex row align-center>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import info_card_info from "~/components/profile/c_info_card";
export default {
  components: {
    "card-info": info_card_info
  },
  data() {
    return {
      users:[],
      casedata: {}
      
    };
  },
// created:{
//   this.$store.dispatch("retrieve_case",);
// },
  methods: {
    async viewcase() {
      return await this.$api
        .$get(`api/v1/cases/${this.$route.params.id}/`)
        .then(response => {
          this.casedata = response.data;
          console.log(response) ;
        })
        .catch(error => {
          console.log(error);
        });
    },
    viewdatacase: function() {
      this.viewcase();
    }
  },
  created() {
    this.viewcase();
  },
  computed: {
    cases() {
      return this.casedata == null ? "" : this.casedata.data.caseNumber;
    }
  }
};
</script>

<style scoped></style>
