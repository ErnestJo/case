<template>
  <v-container fluid>
    <!-- <v-progress-circular
     
      indeterminate
      color="grey"
      size="24"
    ></v-progress-circular> -->
    <div >
      <v-data-table
        dense
        class="default"
        :headers="headers"
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

import ServiceCard from "@/components/profile/consultation_card";
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
      { text: "Report Number ", value: "name" },
      { text: "Category of Offence", value: "age" },
      { text: "Offence", value: "accuserName", sortable: false },
      { text: "Section", value: "accuserOccupation" },
    ],
    body: {
      options: {
        page: 1,
        itemsPerPage: 5,
        sortBy: ["Report Number"]
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
