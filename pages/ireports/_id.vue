<template>
  <div>
      <div>

      </div>
 
    <v-card flat class="mx-auto default">
    <v-card-text>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" md="1" sm="1">
          <v-btn color="primary" class="mb-1" fab small @click="edit = !edit">
            <v-icon>mdi-account-edit</v-icon>
          </v-btn></v-col
        >
        <v-col cols="12" md="12" sm="12">
          <v-simple-table dense>
            <template v-slot:default>
              <tbody>
          
                <tr>
                  <td  id="name" class="font-weight-black">Category Of Offence:
                  </td>
                  <td>{{ir.categoryOfOffence}}</td>
                </tr>
                
                <tr>
                  <td  id="name" class="font-weight-black">Offence:
                  </td>
                  <td>{{ir.offence}}</td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Section:
                  </td>
                  <td>{{ir.section}}</td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black"> Description:
                  </td>
                  <td> {{ir.description}} </td>
                </tr>


                <tr>
                  <td  id="name" class="font-weight-black">Any thing stolen.
                  </td>
                  <td> {{ir.propertyStolen}} </td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Stolen Property:
                  </td>
                  <td>{{ir.ifStolenproperty}} </td>
                </tr>


                 <tr>
                  <td  id="name" class="font-weight-black"> Remarks:
                  </td>
                  <td>{{ir.remarks}}</td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Case Number:
                  </td>
                  <td>{{ir.case.caseNumber}}</td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Has Media:
                  </td>
                  <td>{{ir.photo}}</td>
                </tr>

                 <tr>
                  <td  id="name" class="font-weight-black">Went to court?:
                  </td>
                  <td>{{ir.court}}</td>
                </tr>

              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  </div>
</template>
<script>
export default {
 
    props: {
    cases:{
      type: Object,
      default: null
    },
  },

  data: function() {
    return {
      edit: false,
      Casecp: this.Case,
      gender: ["Male", "Female", "Unspecified"]
    };
  },

  created() {
    this.$store.dispatch("retrieve_irbyid",this.$route.params.id);
  },

  computed:{
    ir(){
      return this.$store.getters.irs;
    }
  },
methods: {
    // submit() {
    //   delete this.patientcp.contactsInformation;
    //   this.$store.dispatch("update_patient", this.patientcp).then(() => {
    //     this.edit = false;
    //     this.fetchclientdata(this.$route.params.id);
    //   });
    // }
  }
};
</script>
