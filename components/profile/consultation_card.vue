<template>
  <v-card class="mx-auto default "> 

     <v-progress-circular
      v-if="services == null"
      indeterminate
      color="grey lighten-5"
      size="16"
    ></v-progress-circular>
    <div md12>
      <v-data-table
        dense
        :headers="headers"
        :items="services"
        :search="search"
        width="100%"
        @click:row="handleClick"
        @update:page="updatePagination"
        >
        <template v-slot:top>
          <v-toolbar flat color="primary" dark>
            <h2>
              <strong> {{title}}</strong>
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
      </v-data-table>
    </div>
  </v-card>
</template>

<script>


export default {
  props: {
    services: {
      type: Array,
    },

    title: {
      type: String,
      default: "Services"
    }
  },
   data: () => ({
    search: null,
    headers: [
      { text: "Case Number", value: "caseNumber", sortable: false },
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
  methods: {
    handleClick: function(value) {
      this.$router.push("/cases/" + value.id);
    },
    updatePagination: function(val) {
      console.log(val);
    }
  }
}
</script>

<style>

</style>
