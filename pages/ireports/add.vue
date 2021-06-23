<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/ireports">IR</router-link>
      <router-link to="/ireports/add" class="active"
        >Add Investigation Report
        </router-link >
    </div>
    <v-card class="mx-auto default">
         <v-toolbar dark color="primary" flat dense>
        <v-toolbar-title>Add accuser</v-toolbar-title>
      </v-toolbar>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters>
                                   <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.categoryOfOffence"
                                          :hint="` ${editedItem.categoryOfOffence}`"
                                          :items="categoryOfOffenceoptions"
                                            label="Select Category of Offence"
                                            outlined
                                            item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 
                                    <v-col cols="12">
                                        <v-select
                                        :disabled="!editedItem.categoryOfOffence"
                                        v-model="editedItem.offence"
                                          :hint="` ${editedItem.offence}`"
                                          :items="offenceopotions"
                                            label="Select offence of the case above"
                                             outlined
                                             item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 

                                    <v-col cols="12">
                                        <v-select
                                        :disabled="!editedItem.offence"
                                        v-model="editedItem.section"
                                          :hint="` ${editedItem.section}`"
                                          :items="sectionoptions"
                                            label="Select Section"
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
                                       <v-checkbox
                                        v-model="editedItem.propertyStolen"
                                        label="Any thing was Stolen?"
                                        ></v-checkbox>
                                    </v-col> 
                                       <v-col cols="12">
                                        <v-text-field
                                        :disabled="!editedItem.propertyStolen"
                                        v-model="editedItem.ifStolenproperty"
                                        outlined
                                        label="List items stolen"
                                        :rules="[rules.required]"
                                        hint=" Property stolen  example: hela milioni moja (Mandatory)">
                                        </v-text-field>
                                    </v-col>    
                                </v-row>
                            </v-col>
                                <v-col cols="12" sm="6" md="4">
                                         <v-row no-gutters>
                                <v-col cols="12">
                                <v-textarea
                                    label="Descripition Of Investigation"
                                    outlined
                                    auto-grow
                                    v-model="editedItem.description"
                                    hint="Ir  Description"
                                ></v-textarea>
                                </v-col>
                                  <v-col cols="12">
                                <v-textarea
                                    label="Remark Of Case"
                                    outlined
                                    auto-grow
                                    v-model="editedItem.description"
                                    hint="Case final Remarks"
                                ></v-textarea>
                                </v-col>
                            </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                 <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close" class="button cancel">Cancel</v-btn>
                <v-btn color="button" @click="save">Add Case</v-btn>
            </v-card-actions>
            </v-container>
            </v-form>
        </v-card>
    </div>   
</template>

<script>
export default {
    data: () => ({

    
    categoryOfOffenceoptions: [
    "Criminal", 
    "civil", 
    ],

    offenceopotions: [
    "Robery",
    "Muder", 
    "familiy", 
    ],

    sectionoptions: [
    "12", 
    "21",
    "1a", 
    ],

   
    formHasErrors: false,
    valid: true,
    editedItem: {
        categoryOfOffence:"",
        offence: "",
        section:"",
        description: "",
        propertyStolen: false,
        court: false,
        remarks:"",
        ifStolenproperty: "",
     

    },
    defaultItem: {
    description: "",
      categoryOfOffence:"",
      offence: "",
      section:"",
      description: "",
      propertyStolen: false,
      court: false,
      remarks:"",
      ifStolenproperty: "",
     
     

      
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
