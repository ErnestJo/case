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
        @click:row="handle_row_click"
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
      { text: "Name Of Accusser", value: "name" },
      { text: "Phone ", value: "phone" },
      { text: "Gender ", value: "gender" },
      { text: "Occupation", value: "occupation", sortable: false },
      { text: " Is arrested", value: "arrested" },
      { text: "Officer in charge", value: "policeOfficerIncharge" },
      
    ],
    body: {
      options: {
        page: 1,
        itemsPerPage: 5,
        sortBy: ["patientName"]
      }
    }
  }),
  methods: {
    // handleClick: function(value) {
    //   this.$router.push("api/v1/accusers/" + value.id);
    // },

     handle_row_click(i) {
       console.log(i._id);
      this.$router.push("/accusers/" + i._id);
  },
    updatePagination: function(val) {
      console.log(val);
    }
  }
};
</script>
