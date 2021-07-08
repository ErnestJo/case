<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/accusers">Cases</router-link>
      <router-link to="/accusers/add" class="active"
        >Add Accuser
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
                                        <v-text-field
                                        v-model="editedItem.name"
                                        outlined
                                        label="Full name"
                                        :rules="[rules.required]"
                                        hint="Complaint Full name E.g Ernest Joseph (Mandatory)">
                                        </v-text-field>
                                    </v-col>  

                                    <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.gender"
                                          :hint="` ${editedItem.gender.name}`"
                                          :items="genderoptions"
                                            label="Gender"
                                            dense
                                            item-value="value"
                                            outlined 
                                            persistent-hint 
                                        >
                                        </v-select>
                                    </v-col>
                                    <v-col cols="12">
                                     <v-text-field
                                        v-model="editedItem.phone"
                                        outlined
                                        label="Phone No."
                                        hint="Patient phone No. e.g +255716xxxxxx (Mandatory)"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                    <v-text-field
                                        v-model="editedItem.address"
                                        outlined
                                        label="Home Address"
                                        hint="Address e.g 123 Hawaii, 31ST, H24KL (Mandatory)"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                    <v-text-field
                                        type="number"
                                        v-model="editedItem.age"
                                        outlined
                                        label="Age"
                                        hint="Patient age. E.g 34 (Mandatory)"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                    </v-col>
                                        <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.occupation"
                                          :hint="` ${editedItem.occupation}`"
                                          :items="occupationoptions"
                                            label="Occupation"
                                             item-value="value"
                                             outlined
                                             persistent-hint        
                                        >
                                        </v-select>
                                    </v-col>    
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.nationalilty"
                                          :hint="` ${editedItem.nationalilty}`"
                                          :items="nationaliltyoptions"
                                            label="Select nationanality"
                                             outlined
                                             item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 

                                     <v-col cols="12">
                                       <v-checkbox
                                        v-model="editedItem.arrested"
                                        label="Is Accuser Arrrested"
                                        ></v-checkbox>
                                    </v-col> 

                                    <v-col cols="12">
                                        <v-select
                                          v-model="editedItem.policeOfficerIncharge"
                                          :disabled="!editedItem.arrested"
                                          :hint="` ${editedItem.policeOfficerIncharge}`"
                                          :items="nationaliltyoptions"
                                            label="Select select officer arrested Accuser"
                                             outlined
                                             item-value="value"   
                                        > 
                                        </v-select>
                                    </v-col> 
                                       <v-col cols="12">
                                        <v-text-field
                                        :disabled="!editedItem.arrested"
                                        v-model="editedItem.nextOfkinName"
                                        outlined
                                        label="Next Of Kin full  name"
                                        :rules="[rules.required]"
                                        hint="Complaint Full name E.g Ali mayai  (Mandatory)">
                                        </v-text-field>
                                    </v-col> 

                                     <v-col cols="12">
                                     <v-text-field
                                        v-model="editedItem.nextOfkinNumber"
                                        :disabled="!editedItem.arrested"
                                        outlined
                                        label="Next of Kin Phone No."
                                        hint="Patient phone No. e.g +255716xxxxxx (Mandatory)"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                    </v-col> 

                                    <v-col cols="12">
                                        <v-select
                                          v-model="editedItem.nextOfkinRelatioinship"
                                          :disabled="!editedItem.arrested"
                                          :hint="` ${editedItem.nextOfkinRelatioinship}`"
                                          :items="nationaliltyoptions"
                                            label="Relationship with kin"
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
                                <v-textarea
                                    label="Descripition of a case"
                                    outlined
                                    auto-grow
                                    v-model="editedItem.description"
                                    hint="Case Description"
                                ></v-textarea>
                                </v-col>

                                        <v-col cols="12">
                                        <v-text-field
                                        :disabled="!editedItem.arrested"
                                        v-model="editedItem.properties"
                                        outlined
                                        label="Next Of Kin full  name"
                                        :rules="[rules.required]"
                                        hint="Complaint Full name E.g Ali mayai  (Mandatory)">
                                        </v-text-field>
                                    </v-col> 

                            </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                 <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="close" class="button cancel">Cancel</v-btn>
                <v-btn color="button" @click="save">Add Accuser</v-btn>
            </v-card-actions>
            </v-container>
            </v-form>
        </v-card>
    </div>   
</template>

<script>
export default {
    data: () => ({
    occupationoptions: [
      "Mfugaji", 
      "student", 
      "Business Man"
    ],
    
    nationaliltyoptions: [
    "Tanzanian", 
    "Kenyani", 
    ],
    genderoptions: ["Male","Female", "Unspecified"],
    title: "Create New Patient",
    formHasErrors: false,
    valid: true,
    editedItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: "",
      description: "",
      occupation: "",
      arrested: false,
      properties:"",
      policeOfficerIncharge: "",
      nationalilty: "",
      nextOfkinName: "",
      nextOfkinRelatioinship: "",
      nextOfkinNumber: "",
    },
    defaultItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: "",
      description: "",
      occupation: "",
      arrested: false,
      policeOfficerIncharge: "",
      nationalilty: "",
      nextOfkinName: "",
      nextOfkinRelatioinship: "",
      nextOfkinNumber: "",
      
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
      var did = this.$route.params.id;
      var payload = {id: did, data: this.editedItem}
      if (state) {
        console.log(this.editedItem)
        this.$store.dispatch("createaccuser", payload);
      }
    }
  }
}
</script>

<style>
</style>