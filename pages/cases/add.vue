<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/cases">Cases</router-link>
      <router-link to="/cases/add" class="active"
        >Create new Case
        </router-link >
</div>
    <v-card class="mx-auto default">
         <v-toolbar dark color="primary" flat dense>
        <v-toolbar-title>Create New Case</v-toolbar-title>
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
                                        v-model="editedItem.immeadiateAction"
                                          :hint="` ${editedItem.immeadiateAction}`"
                                          :items="immeadiateactioinoptions"
                                            label="Select action taken"
                                             outlined
                                             item-value="value"  
                                        >
                                        </v-select>
                                    </v-col> 

                                     <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.finalDisposal"
                                          :hint="` ${editedItem.policeOfficerTakingIntialAction}`"
                                          :items="finalDisposaloptions"
                                            label="Select final disposal"
                                             outlined
                                             item-value="value"  
                                        >
                                        </v-select>
                                    </v-col> 

                                     <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.policeOfficerTakingIntialAction"
                                          :hint="` ${editedItem.policeOfficerTakingIntialAction}`"
                                          :items="policeOfficerTakingIntialActionoptions"
                                            label="Select action taken"
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

      occupationoptions: [
      "Mfugaji", 
       "student", 
      "Business Man"
    ],
    
    immeadiateactioinoptions: [
    "Give Pf3", 
     "Arresting Warrant", 
    "No action taken"
    ],

    policeOfficerTakingIntialActionoptions: [
     "Ally Swaleh", 
     "Kelvin John", 
     "Rakim Ormar", 
     "Chaha James", 
     "Deo Mau", 
     "Richard Miles", 
     "Fine James", 
     "Leo Kwetu", 
    ],

    finalDisposaloptions: [
    "Went To hospital", 
    "Arresting Accuser",
    "Accuser reporting day note", 
    "No action taken"
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
      arrested: false,
      description: "",
      occupation: "",
      isAssigned: false,
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
      nationalilty: "Mtanzania",

    },
    defaultItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: "",
      arrested: false,
      description: "",
      occupation: "",
       isAssigned: false,
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
      nationalilty: "",
      
    },
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 20 || "Max 20 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
    

    occupationoptions: [
      "Mfugaji", 
       "student", 
      "Business Man"
    ],

    immeadiateactioinoptions: [
     "Give Pf3", 
     "Arresting Warrant", 
     "No action taken"
    ]
  }),

   methods: {
    reset() {},
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
