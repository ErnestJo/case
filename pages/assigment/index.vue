<template>
    <div>
        <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/assigment" class="active">Assignment </router-link>
        </div>

        <v-card>
            <v-tabs
                 slider-color="blue"
                background-color="primary"
                slider-size="3"
                right
                v-model="tab"
                show-arrows-on-hover="true"
                :show-arrows="$vuetify.breakpoint.mobile"
                dark> 

                 <v-tab @click.stop="getunassigned()">
                 <v-badge
                     color="green"
                        :content="unassigned.length"
            :value="unassigned.length"

                     > 
                     Usassigned Cases     
          </v-badge>
        </v-tab>
        <v-tab ripple @click.stop="getassigned()">
            <v-badge
            color="green"
            class="lowercase"
            :content="assigned.length"
            :value="assigned.length"
            > Assigned Cases</v-badge
          ></v-tab>   

                <v-tab-item>
                    <servicescard-component
                :services="unassigned"
                :navig="navigator"
                title="Unassigned Cases"
          ></servicescard-component>
              </v-tab-item> 

              <v-tab-item>
             <servicescard-component
            :services="assigned"
            :navig="navigator"
            title="Assigned Cases"
          ></servicescard-component>
              </v-tab-item>   
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
import ServiceCard from "@/components/profile/consultation_card";
export default {
    components: {
    "servicescard-component": ServiceCard
  },

  data: () => ({
    dialog: false,
    search: "",
    tab: null,
    all_pagetitle: "All Cases",
    assigned: [],
    unassigned: [],
  }),

 created(){
    this.$store.dispatch("retrieve_investigator_staffs");
  },
methods: {
        async getassigned(){
        return await this.$api.$get(`api/v1/cases?isAssigned=true`)
         .then(response => {
          if (response !== null) {
            this.assigned = response.data;
            console.log(response)
          }
        }).catch(error => {
          console.log(error);

        });

    },

      async getunassigned(){
        return await this.$api.$get(`api/v1/cases?isAssigned=false`)
         .then(response => {
          if (response !== null) {
            this.unassigned = response.data;
            console.log(response)
          }
        }).catch(error => {
          console.log(error);
        });
    },
},

    

computed:{

navigator(){
  console.log("leo");
  console.log(this.$store.getters.investigator);
return this.$store.getters.investigator;
}

}


}
</script>

<style>

</style>
