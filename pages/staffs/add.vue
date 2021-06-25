<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs">Staffs</router-link>
      <router-link to="/staffs/add" class="active"
        >Add New Staff
        </router-link >
    </div>
    <v-card class="mx-auto default">
         <v-toolbar dark color="primary" flat dense>
        <v-toolbar-title>Add Staff</v-toolbar-title>
      </v-toolbar>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters>
                                  <v-col cols="12">
                                        <v-text-field
                                        v-model="editedItem.name"
                                        outlined
                                        label="Full name"
                                        :rules="[rules.required]"
                                        hint="Staff Name (Mandatory)">
                                        </v-text-field>
                                    </v-col> 
                                    <v-col cols="12">
                                        <v-select
                                        :disabled="!editedItem.name"
                                        v-model="editedItem.title"
                                          :hint="` ${editedItem.title}`"
                                          :items="titleopotions"
                                            label="Select title of the officer"
                                             outlined
                                             item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 

                                    <v-col cols="12">
                                        <v-select
                                        :disabled="!editedItem.title"
                                        v-model="editedItem.role"
                                          :hint="` ${editedItem.role}`"
                                          :items="roleopotions"
                                            label="Select Role"
                                             outlined
                                             item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 
                                  
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters> 
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="editedItem.email"
                                        outlined
                                        label="Staff Email"
                                        :rules="[rules.required]"
                                        hint="Staff Email (Mandatory)">
                                        </v-text-field>
                                    </v-col> 

                                    <v-col cols="12">
                                     <v-text-field
                                        v-model="editedItem.phone"
                                        outlined
                                        label="Staff Phone No."
                                        hint="Staff phone No. e.g +255716xxxxxx (Mandatory)"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                    </v-col> 
                                </v-row>
                            </v-col>
                                <v-col cols="12" sm="6" md="4">
                                 <v-row no-gutters>        
                            </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                 <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close" class="button cancel">Cancel</v-btn>
                <v-btn color="button" @click="save">Add Staff</v-btn>
            </v-card-actions>
            </v-container>
            </v-form>
        </v-card>
    </div>   
</template>

<script>
export default {
    data: () => ({

    
    roleopotions: [
    "OCD", 
    "registra",
    "investigator",
    "OCCID", 
    ],

    titleopotions: [
    "ASP",
    "Sergent", 
    "SP", 
    ],

   

   
    formHasErrors: false,
    valid: true,
    editedItem: {
        name:"",
        email: "",
        title:"",
        role: "",
        phone: "",
       
    },
    defaultItem: {
        name:"",
        email: "",
        title:"",
        role: "",
        phone: "",
     
    },
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 20 || "Max 20 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
    
  }),

   methods: {
    close() {},
    save() {
      console.log(this.editedItem);
      var state = this.$refs.form.validate();
      this.$refs.form.validate();
      if (state) {
        console.log(this.editedItem)
        this.$store.dispatch("post_case", this.editedItem);
      }
    }
  }

}
</script>

<style>

</style>
