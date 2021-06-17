<template>
  <v-container fluid>
    <v-progress-circular
      v-if="services == null"
      indeterminate
      color="grey"
      size="24"
    ></v-progress-circular>
    <div v-else>
      <v-data-table
        dense
        class="default"
        :headers="headers"
        :items="services"
        :search="search"
        mobile-breakpoint="100"
        @click:row="handleClick"
        @update:page="updatePagination"
      >
      </v-data-table>
    </div>
  </v-container>
</template>
<script>

export default {
  components: {
    "service-card": ServiceCard
  },
  props: {
    services: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: "Accuser Name", value: "name" },
      { text: "Accuser Age", value: "age" },
      { text: "Accuser Phone", value: "accuserName", sortable: false },
      { text: "Accuser Occupation", value: "accuserOccupation" },
      { text: "Accuser Nationality ", value: "accuserNationlity" },
    ],
    body: {
      options: {
        page: 1,
        itemsPerPage: 5,
        sortBy: ["accuserName"]
      }
    }
  }),
//   methods: {
//     handleClick: function(value) {
//       this.$router.push("/consultations/" + value.id);
//     },
//     updatePagination: function(val) {
//       console.log(val);
//     }
//   }
};
</script>
