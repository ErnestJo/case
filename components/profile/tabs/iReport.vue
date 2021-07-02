<template>
  <v-container fluid>
    <v-progress-circular
      v-if="repo == null"
      indeterminate
      color="grey"
      size="24"
    ></v-progress-circular>
    <div v-else>
      <v-data-table
        dense
        class="default"
        :headers="headers"
        :items="repo"
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
    repo: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    search: null,
    headers: [
      { text: "Ir number", value: "irNumber" },
      { text: "Category ", value: "categoryOfOffence" },
      { text: "Offence", value: "offence", sortable: false },
      { text: " Section", value: "section" },
      { text: "Remark", value: "remark" },
      
    ],
    body: {
      options: {
        page: 1,
        itemsPerPage: 5,
      }
    }
  }),
  methods: {
    handleClick: function(value) {
      this.$router.push("api/v1/investigationReports/" + value.id);
    },
    updatePagination: function(val) {
      console.log(val);
    }
  }
};
</script>
