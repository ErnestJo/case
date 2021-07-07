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
        @click:row="dialog"
        @update:page="updatePagination"
        >
          <template v-slot:top>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>
            </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px">
            
            <v-card>
              <v-card-title class="primary">
                <span></span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="12" md="4">
                        <v-checkbox
                          v-model="editedItem.isAssigned"
                          label="check to assign "
                          ></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-select
                          v-model="editedItem.assignTo"
                          chips
                          disable-lookup
                          deletable-chips
                          clearable
                          small-chips
                          return-object
                           :items="investigator"
                           item-text="name"
                          item-value="id"
                          :rules="[
                            v => !!v || 'You must select one to continue!'
                          ]"
                          label="Select role officers to be incharge"
                          required
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" small @click="close">
                 cancel
                </v-btn>
                <v-btn color="warning" small @click="Save">
                  save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <td @click.stop>
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
        </td>
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
    navig: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: "Services"
    }
  },
   data: () => ({
    search: null,
     dialog: false,
     selectedstaffId: null,
     assignTo:null,

    headers: [
      { text: "Case Number", value: "caseNumber", sortable: false },
      { text: "Investigator", value: "assignTo" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false } 
    ],
   editedItem: {
      id: "",
      isAssigned: false ,
      assignTo: ""
    },

    defaultItem: {
     id: "",
     isAssigned: false,
     assignTo: ""

    },

      dialog: false,
      valid: true,
      
    body: {
        options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ["assignTo"]
      }
    }
   }),
  methods: {

    //    handleClick: function(item) {
    //   this.$router.push("roles/" + item.id);
    // },

        close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
      
    },


    editItem(item) {
      this.editedIndex = this.investigator.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

       Save() {

         console.log(this.editedItem.assignTo._id);
         console.log(this.editedItem.isAssigned)
      // if (this.editedIndex > -1) {
      //   console.log(this.editedItem);
      var did = this.editedItem.id;
      var payload = { id: did, assignTo:this.editedItem.assignTo._id, isAssigned: this.editedItem.isAssigned };
        this.$store.dispatch("updateassignee", payload);
        this.close();
      // } else {
      // //  this.close();
      // }
    },
    
    updatePagination: function(val) {
      console.log(val);
    }
  },

   created(){
    this.$store.dispatch("retrieve_investigator_staffs");
  },

  computed: {
  investigator(){
    console.log("hello mama")
    console.log(this.$store.getters.investigator)
      return this.$store.getters.investigator;
      
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
