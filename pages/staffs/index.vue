<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs" class="active">Staffs</router-link>
    </div>
    <v-card>
  <v-data-table
    :headers="headers"
    :items="staff"
    :items-per-page="5"
    class="elevation-1"
    @click:row="handleClick"
  ></v-data-table>
      
    </v-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {

    data: () => ({
    search: "",
    updating: false,
    headers: [
      { text: "User/name", value: "name", sortable: false },
      { text: "Email", value: "email" },
      { text: "Phone", value: "contacts" },
      { text: "Role", value: "role" },
      { text: "Active ?", value: "isActive", sortable: true },
      { text: "Available ?", value: "isAvailable", sortable: true }
    ],

    title: "users"
  }),

   methods: {
    handleClick(item) {
      this.$router.push("staffs/" + item._id);
    }
  },
 created(){
    this.$store.dispatch("retrieve_staff");
  },


  computed: {
     staff() {
       console.log("");
       console.log(this.$store.getters.Users);
      return this.$store.getters.Users;
    
  }
}
}
</script>

<style>

</style>
