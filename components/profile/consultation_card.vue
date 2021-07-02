<template>
  <v-card class="mx-auto default "> 

     <!-- <v-progress-circular
      v-if="services.length == null"
      indeterminate
      color="grey lighten-5"
      size="16"
    ></v-progress-circular> -->
    <div md12>
      <v-data-table
        dense
        :headers="headers"
        :items="datalist"
        :search="search"
        width="100%"
        @click:row="handleClick"
        @update:page="updatePagination"
        >
        <template v-slot:top>
          <v-toolbar flat color="primary" dark>
            <h2>
              <strong>{{ title }}</strong>
            </h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Enter search text ..."
              dense
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>
        </template>

         <template v-slot:[`item.assignTo`]="{ item }">
          <v-tooltip right v-if="item.assignTo" color="primary">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" small color="red lighten-2"
                >mdi-check</v-icon
              >
            </template>
            <span>Active</span>
          </v-tooltip>
          <div v-else></div>
        </template>
        <!-- <template v-slot:[`item.patientName`]="{ item }">
          {{ item.patientName }} ( {{ item.patientId }})
        </template> -->
        <template v-slot:[`item.staffName`]="{ item }">
          <p v-if="item.assignedTo == null">Unassigned</p>
          <!-- <p v-else>( {{ item.staffId }})</p> -->
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>


export default {

  

  props: {
  
    title: {
      type: String,
      default: "Services"
    }
  },
   data: () => ({
    search: null,
    headers: [
      { text: "Patient Name", value: "caseNumber", sortable: false },
      { text: "Investigator", value: "assignTo" },
      { text: "Status", value: "status" },
    
    ],
    body: {
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ["assignTo"]
      }
    }
   }),
  // methods: {
  //   handleClick: function(value) {
  //     this.$router.push("/consultations/" + value.id);
  //   },
  //   updatePagination: function(val) {
  //     console.log(val);
  //   }
  // }
}
</script>

<style>

</style>
