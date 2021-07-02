<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs" class="active">Staffs</router-link>
    </div>
    <v-card>
         <v-toolbar flat dark class="primary">
             <v-row no-gutters>
          <v-col cols="12" sm="12" md="3">
            <v-card-title>
              <h5 v-if="title != null">
                <v-icon color="blue" left>mdi-account-tie</v-icon>&nbsp;
              </h5>
              <h5 v-else>Staffs</h5></v-card-title
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="12" md="3">
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Enter search text ..."
              rounded
              dense
              outlined
              single-line
              hide-details
              class="mt-3"
            ></v-text-field>
          </v-col>
        </v-row>
         </v-toolbar>
         <v-data-table
              
                :headers="headers"
                :item="users"
                :search="search"
                width="100%"
                @click:row="handleClick"
              >

              <template v-slot:[`item.role`]="{ item }">
                  <v-chip
                    small
                    dense
                    class="primary"
                    v-for="role in item.user.roles"
                    :key="role.id"
                  >
                    {{ role.name.toLowerCase() }}
                  </v-chip>
                </template>

         </v-data-table>
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
    items: [
      { title: "Edit", icon: "lead-pencil", color: "blue" },
      { title: "Delete", icon: "delete", color: "red" }
    ],
    users:[],
    title: "users"
  }),

   methods: {
    handleClick(item) {
      this.$router.push("staffs/" + item.id);
    }
  },
 created(){
   return  this.$store.dispatch("retrieve_staff");
  },

  beforeCreate() {
    this.$store.dispatch("retrieve_staff");
  },

  computed: {
    ...mapGetters({
      users: "users",
    })
  }
}
</script>

<style>

</style>
