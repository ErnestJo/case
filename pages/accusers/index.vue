<template>
    <div>
        <div class="breadcrumb">
             <router-link to="/">Dashboard</router-link>
            <router-link to="/accusers" class="active">Accusers</router-link>
        </div>
 
        <v-card class="mx-auto default">
             <accuser-list
             :datalist="accusers"
             :pagetitle="all_pagetitle"
             >
            </accuser-list>
       </v-card>
    </div>
</template>

<script>

import accusersListing from "@/components/accusers/accusersListing";

export default {
 
 components:{
        "accuser-list": accusersListing
    },

    data: () => ({
        dialog: false,
        search: "",
        all_pagetitle: "All Accusers"
    }),

     created(){
    this.$store.dispatch("retrieve_accuser");
  },

      computed: {
        formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item"; 
        },

    accusers (){
    return this.$store.getters.listaccusers;
    }

      },

      beforeMount() {
    // store inatakiwa hapa data
  }
    

}
</script>

<style>

</style>
