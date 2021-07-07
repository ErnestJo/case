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
                  <td  id="name" class="font-weight-black">Full Name:
                  </td>
                  <td>{{accuser.name}}</td>
                </tr>
                
                <tr>
                  <td  id="name" class="font-weight-black">Gender:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Age:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Phone No.
                  </td>
                  <td>  </td>
                </tr>


                <tr>
                  <td  id="name" class="font-weight-black">Address.
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Nationality:
                  </td>
                  <td></td>
                </tr>


                 <tr>
                  <td  id="name" class="font-weight-black"> Description:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">arrested:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">Police taken Action:
                  </td>
                  <td></td>
                </tr>

                 <tr>
                  <td  id="name" class="font-weight-black">next Of kin Name:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">nextOfkinRelatioinship:
                  </td>
                  <td></td>
                </tr>

                <tr>
                  <td  id="name" class="font-weight-black">nextOfkinNumber:
                  </td>
                  <td></td>
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
    this.$store.dispatch("retrieve_accuserbyid",this.$route.params.id);
  },

  computed:{
    accuser(){
      return this.$store.getters.user;
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
