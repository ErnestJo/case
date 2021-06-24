<template>
    <div>
        <v-progess-circular
       
        indeterminate
        color="grey lighten-5"
        size="16">
        </v-progess-circular>
        <div md12 >
            <v-data-table
             dense
             :headers="headers"
             :items="insurancecards"
             :search="search"
             width="100%"
             @click:row="handleClick">
             <template v-slot:top>
                <v-toolbar flat dark color="primary">
                    <h2>
                    <strong>{{ title }}</strong>
                    </h2>
                    <v-spacer></v-spacer><v-text-field
              v-model="search"
              append-icon="search"
              label="Search..."
              outlined
              single-line
              hide-details
              class="mt-2"
            ></v-text-field>&nbsp;&nbsp;
                <v-btn class="button mb-1" meduim >Create New IR </v-btn>&nbsp;&nbsp;
                </v-toolbar>
             </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {

    data: function() {
    return {
      search: null,
      title: "Investigation Report",
      date: new Date().toISOString().substr(0, 10),
      headers: [
        { text: "Investigation Number", value: "" },
        { text: "Category Of Offence", value: "insurance.name" },
        { text: "Offence", value: "patientName", sortable: false },
        { text: "Section", value: "membershipNumber" },
      ],
      items: [
        { title: "Edit", icon: "lead-pencil", icona: "lead-penci", color: "blue" },
        { title: "Delete", icon: "minus-circle", icona:"plus-circle", color: "red" }
      ],
      dialog: false,
    };
  },

}
</script>

<style>

</style>
