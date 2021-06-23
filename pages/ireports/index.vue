<template>
    <div>
        <div class="breadcrumb">
             <router-link to="/">Dashboard</router-link>
            <router-link to="/iReports" class="active">Cases</router-link>
        </div>

        <v-card class="mx-auto defaulf">
            <ir-list
            :datalist="ireports"
            :pagetitle="all_pagetitle"
             >    
            </ir-list>
        </v-card>
    </div>
</template>

<script>

import iReportListing from "@/components/investigationReport/investigationReportListing";

export default {

    components:{
        "ir-list": iReportListing
    },

    data: () => ({
        dialog: false,
        search: "",
        all_pagetitle: "All ireport"
    }),
 created(){
    this.$store.dispatch("retrieve_ireports");
  },
    computed: {
        formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item"; 
        },
    ireports (){
    return this.$store.getters.listireports;
    }
    
 },

  beforeMount() {
    // store inatakiwa hapa data
  }

}
</script>

<style>

</style>
