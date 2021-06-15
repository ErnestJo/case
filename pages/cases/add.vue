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
                                            label="Select"
                                             item-value="value"
                                             outlined
                                             persistent-hint
                                              return-object
                                             single-line
                                        >
                                         <template slot="selection" slot-scope="data">
                                        {{ data.item.name }}
                                        </template>
                                        <template slot="item" slot-scope="data">
                                        {{ data.item.name }}, ({{ data.item.value }})
                                        </template>

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
                                          :hint="` ${editedItem.occupation.name}`"
                                          :items="occupationoptions"
                                            label="Select"
                                             item-value="value"
                                             outlined
                                             persistent-hint
                                              return-object
                                             single-line
                                        >
                                         <template slot="selection" slot-scope="data">
                                        {{ data.item.name }}
                                        </template>
                                        <template slot="item" slot-scope="data">
                                        {{ data.item.name }}, ({{ data.item.value }})
                                        </template>
                                        </v-select>
                                    </v-col>    
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-select
                                        v-model="editedItem.immeadiateActioin"
                                          :hint="` ${editedItem.immeadiateActioin.name}`"
                                          :items="immeadiateactioinoptions"
                                            label="Select"
                                             item-value="value"
                                             outlined
                                             persistent-hint
                                              return-object
                                             single-line
                                        >
                                         <template slot="selection" slot-scope="data">
                                        {{ data.item.name }}
                                        </template>
                                        <template slot="item" slot-scope="data">
                                        {{ data.item.name }}, ({{ data.item.value }})
                                        </template>
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
    title: "Create New Patient",
    formHasErrors: false,
    valid: true,
    editedItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: 0,
      arrested: false,
      description: "",
      occupation: "",
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
    

    },
    defaultItem: {
      name: "",
      phone: "",
      address: "",
      age: 0,
      gender: 0,
      arrested: false,
      description: "",
      occupation: "",
      immeadiateActioin: "",
      finalDisposal: "",
      policeOfficerTakingIntialAction: "",
    
      
    },
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 20 || "Max 20 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
    genderoptions: [
      { name: "Male", value: 1 },
      { name: "Female", value: 2 },
      { name: "Unspecified", value: 0 }
    ],

    occupationoptions: [
      { name: "Mfugaji", value: 1 },
      { name: "student", value: 2 },
      { name: "Business Man", value: 0 }
    ],

    immeadiateactioinoptions: [
      { name: "Give Pf3", value: 1 },
      { name: "Arresting Warrant", value: 2 },
      { name: "No action taken", value: 0 }
    ]
  }),

   methods: {
    close() {},
    save() {
      this.editedItem.gender = this.editedItem.gender.name;
      this.editedItem.immeadiateActioin = this.editedItem.immeadiateActioin;
      this.editedItem.occupation = this.editedItem.occupation;
      console.log(this.editedItem);
      var state = this.$refs.form.validate();
      this.$refs.form.validate();
      if (state) {
        this.$store.dispatch("", this.editedItem);
      }
    }
  }

}
</script>

<style>

</style>
