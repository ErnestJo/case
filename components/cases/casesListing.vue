<template>
    
    <v-card>
        <v-data-table
         dense
      class="default"
      :headers="headers"
      :items="datalist"
      :search="search"
      :options="body.options"
      sort-by="isActive"
      :sort-desc="sortDesc"
      mobile-breakpoint="100"
      @click:row="handleClick"
      :items-per-page="itemsperpage"
      @update:page="updatePagination"
        >
        <template v-slot:top>

            <v-toolbar flat class="primary" dark>
          <v-text-field
            v-model="search"
            append-icon="cloud-search"
            label="Enter search text ..."
            dense
            single-line
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>
          <div >
             <v-btn medium  class="button" to="/cases/add"
              ><v-icon>mdi-plus</v-icon
              > Add New Case</v-btn>
          </div>
        </v-toolbar>
        </template>
       <template v-slot:[`item.gender`]="{ item }">
        <v-tooltip top v-if="item.gender == 'Female'" color="green">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small color="green darken-2"
              >mdi-gender-female
            </v-icon>
          </template>
          <span>{{ $t("label.tooltip.genderfemale") }}</span>
        </v-tooltip>
        <v-tooltip top v-if="item.gender == 'Male'" color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small color="primary darken-2"
              >mdi-gender-male
            </v-icon>
          </template>
          <span>{{ $t("label.tooltip.gendermale") }}</span>
        </v-tooltip>
        <v-tooltip top v-if="item.gender == 'Unspecified'" color="cyan">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" small color="cyan darken-2"
              >mdi-gender-male-female
            </v-icon>
          </template>
          <span>{{ $t("label.tooltip.genderother") }}</span>
        </v-tooltip>
      </template>
          <template v-slot: [`item.status`] = "{ item }">
               <v-tooltip>
                 <template>
                   <v-badge color="getBadgee(data.item.status)">
                      {{date.item.status}}
                   </v-badge>
                 </template>
               </v-tooltip>
          </template>

           <template v-slot:no-data>
        <h3>No Data available ...</h3>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
     props: ["datalist", "pagetitle"],
     data: () => ({
        dialog: false,
        search: "",
        sortDesc: false,  
         headers: [
      { text: "Case Number", value: "caseno" },
      { text: "Status", value: "status", sortable: true },
      { text: "Assigned to", value: "assignedTo" },
      { text: "Created On", value: "createdDate" },
      { text: "Created By", value: "createdBy" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItemId: "",
    editedItem: {

     name: "",
      phone: "",
      address: "",
      age: 0,
      gender: 0,
      arrested: false,
      description: "",
      occupation: "",
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
    
    },
    defaultItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: 0,
      arrested: false,
      description: "",
      occupation: "",
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
    },
    genderoptions: ["Male", "Female", "Others"],
     occupationoptions: [
      { name: "Mfugaji", value: 1 },
      { name: "student", value: 2 },
      { name: "Business Man", value: 0 }
    ],

    immeadiateactioinoptions: [
      { name: "Give Pf3", value: 1 },
      { name: "Arresting Warrant", value: 2 },
      { name: "No action taken", value: 0 }
    ],

     body: {
      options: {
        page: 1,
        sortBy: ["name"]
      }
    }
    
}),

    computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    isAppointmentRoute: {
      get() {
        // get route of cases
      }
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  
  created() {},

 methods: {
    getBadgee (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    editItem(item) {
      this.editedIndex = this.datalist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.editedItemId = item.id;
    },

    handleClick: function(value) {
    //   this.$router.push("/patients/" + value.id);
    },
    initialize() {},
    updatePagination: function(val) {
      console.log(val);
    }
  },

  beforeMount() {
    // this.$store.dispatch("retrievepatients");
  }
}
</script>

<style scoped>
.v-text-field__slot {
  width: 20px;
}
</style>
