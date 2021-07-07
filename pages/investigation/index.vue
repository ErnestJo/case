<template>
    <div>
        <div class="breadcrumb">
             <router-link to="/">Dashboard</router-link>
            <router-link to="/cases" class="active">Cases</router-link>
        </div>

        <v-card class="mx-auto defaulf">
            <case-list
            :datalist="casesi"
            :pagetitle="all_pagetitle"
             >    
            </case-list>
        </v-card>
    </div>
</template>

<script>

import casesListing from "@/components/cases/casesListing";

export default {

    components:{
        "case-list": casesListing
    },

    data: () => ({
        dialog: false,
        search: "",
        all_pagetitle: "All Cases"
    }),
    
 created(){
    this.$store.dispatch("retrieve_mycases");
   
  },
    computed: {
        formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item"; 
        },
        
    casesi (){
    return this.$store.getters.listmycases;
    }
    
 },

  beforeMount() {
    // store inatakiwa hapa data
  }

}
</script>

<style>

</style>
