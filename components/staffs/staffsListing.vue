<template> 
    <v-card>
        <v-data-table
            dense
            class="default"
            :headers="headers"
            :items="datalist"
            :search="search"
            :options="body.options"
            sort-by="role"
            :sort-desc="sortDesc"
            mobile-breakpoint="100"
            @update:page="updatePagination"
        >
        <template v-slot:top>

            <v-toolbar flat class="primary" dark>
          <v-text-field
            v-model="search"
            append-icon="cloud-search"
            label="Enter search text ..."
            dense
            single-line
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>
          <div >
             <v-btn medium  class="button" to="/staffs/add"
              ><v-icon>mdi-plus</v-icon
              > Add New User</v-btn>
          </div>
        </v-toolbar>
        </template>
   
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
</template>

<script>
export default {
     props: ["datalist", "pagetitle"],
     data: () => ({
        dialog: false,
        search: "",
        sortDesc: false,  
         headers: [
      { text: "Title", value: "title" },
      { text: "Staff Name", value: "name" },
      { text: "Staff Work No", value: "" }, 
      { text: "Role", value: "role" },
      { text: "Email", value: "email" },
    
    ],
    desserts: [], 
     body: {
      options: {
        page: 1,
        sortBy: ["name"]
      }
    }
    
}),

    computed: {
    isAppointmentRoute: {
      get() {
        // get route of cases
      }
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  
  created() {},

  methods: {
   
    editItem(item) {
      this.editedIndex = this.datalist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.editedItemId = item.id;
    },

    handleClick: function(value) {
    //   this.$router.push("/patients/" + value.id);
    },
    initialize() {},
    updatePagination: function(val) {
      console.log(val);
    }
  },

  beforeMount() {
    // this.$store.dispatch("retrievepatients");
  }
}
</script>

<style scoped>
.v-text-field__slot {
  width: 20px;
}
</style>
