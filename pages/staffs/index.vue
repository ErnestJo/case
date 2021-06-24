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
                <v-icon color="blue" left>mdi-circle</v-icon>&nbsp;
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
           dense
                :headers="headers"
                :items="departmentsstaffs"
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
export default {

    data: () => ({
    search: "",
    updating: false,
    headers: [
      { text: "User/name", value: "fullName", sortable: false },
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
    title: null
  }),

//    methods: {
//     async fetchDepartmentStaffs(id, title) {
//       this.title = title;
//       this.updating = true;
//       await this.$api
//         .$get(`staffs/dep/${id}`)
//         .then(response => {
//           if (response != null) {
//             this.departmentsstaffs = response;
//             this.updating = false;
//           }
//         })
//         .catch(error => {
//           this.updating = false;
//           console.log(error);
//         });
//     },
//     handleClick(item) {
//       this.$router.push("staffs/" + item.id);
//     }
//   },
//   created() {
//     this.fetchDepartmentStaffs(1);
//   },
//   beforeCreate() {
//     this.$store.dispatch("retrieve_departments");
//   },
//   computed: {
//     ...mapGetters({
//       staffs: "staffs",
//       departments: "departments"
//     })
//   }

}
</script>

<style>

</style>
