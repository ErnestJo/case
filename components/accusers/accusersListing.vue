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
             <v-btn medium  class="button" to="/accusers/add"
              ><v-icon>mdi-plus</v-icon
              > Add New Suspect</v-btn>
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
      { text: "Accuser Name", value: "name" },
      { text: "Gender", value: "createdAt" },
      { text: "Phone", value: "phone" },
      { text: "Age", value: "age" },
      { text: "Case Accused To", value: "" },
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
    editItem(item) {
      this.editedIndex = this.datalist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.editedItemId = item.id;
    },

    handleClick: function(item) {
      this.$router.push("/accusers/" + item.id);
    },

    initialize() {},
    updatePagination: function(val) {
      console.log(val);
    }
  },

  beforeMount() {
    this.$store.dispatch("retrieve_accuser");
  }
}
</script>

<style scoped>
.v-text-field__slot {
  width: 20px;
}
</style>
