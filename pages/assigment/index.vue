<template>
    <div>
        <div class="breadcrumb ">
      <router-link to="/">hdhd</router-link>
      <router-link to="/oppointemnts" class="active">hshshsh</router-link>
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

                 <v-tab>
                 <v-badge
                     color="green"

                     > 
                     Usassigned Cases     
          </v-badge>
        </v-tab>
        <v-tab ripple>
            <v-badge
            color="green"
          
            class="lowercase"
            > Assigned Cases</v-badge
          ></v-tab>   

                <v-tab-item>
                    <servicescard-component
      :cases="unassigned"
                title="Unassigned Cases"
          ></servicescard-component>
              </v-tab-item> 

              <v-tab-item>
                   <servicescard-component
            
            :cases="assigned"
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

  computed: {
    // formTitle() {
    //   return this.editedIndex === -1 ? "New Item" : "Edit Item";
    // }
    },

     created(){
    this.$store.dispatch("retrieve_case");
  },

data: () => ({
    dialog: false,
    search: "",
    tab: null,
    un_assigned_pagetitle: "Un-Assigned Cases",
    assigned_pagetitle: "Assigned Cases",
    all_pagetitle: "All Cases"
  }),

    //     ...mapGetters({
    //       datalist: "cases",
    //  })

}
</script>

<style>

</style>
