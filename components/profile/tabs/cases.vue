<template>
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
                <tr v-if="Case.rb">
                  <td id="id" class="font-weight-black">Case R/B No.:</td>
                  <td>{{ Case.rb }}</td>
                </tr>
                <tr v-if="Case.name">
                  <td id="name" class="font-weight-black">Full Name:</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.name"
                    ></v-text-field>
                    <p v-else>{{ Case.name }}</p>
                  </td>
                </tr>
                <tr v-if="Case.gender">
                  <td id="gender" class="font-weight-black">Gender:</td>
                  <td v-if="edit">
                    <v-select
                      :items="gender"
                      v-model="Casecp.gender"
                      :menu-props="{ top: true, offsetY: true }"
                      label="Select gender"
                    ></v-select>
                  </td>
                  <td v-else>{{ Case.gender }}</td>
                </tr>
                <tr v-if="Case.age">
                  <td id="age" class="font-weight-black">Age:</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.age"
                    ></v-text-field>
                    <p v-else>{{ Case.age }}</p>
                  </td>
                </tr>

                <tr v-if="Case.phone">
                  <td id="phone" class="font-weight-black">Phone No.</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.phone"
                    ></v-text-field>
                    <p v-else>{{ Case.phone }}</p>
                  </td>
                </tr>
                <tr v-if="Case.address">
                  <td id="address" class="font-weight-black">Address.</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.address"
                    ></v-text-field>
                    <p v-else>{{ Case.address }}</p>
                  </td>
                </tr>
                <tr v-if="Case.occupation">
                  <td id="occupation" class="font-weight-black">Email Address.</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.occupation"
                    ></v-text-field>
                    <p v-else>{{ Case.occupation }}</p>
                  </td>
                </tr>
                <tr v-if="Case.nationality">
                  <td id="nationality" class="font-weight-black">
                    Nationality
                  </td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.nationality"
                    ></v-text-field>
                    <p v-else>{{ Case.nationality }}</p>
                  </td>
                </tr>
                <tr v-if="Case.description">
                  <td id="description" class="font-weight-black">
                    Created Date:
                  </td>
                  <td>{{ Casecp.description }}</td>
                </tr>
                <tr v-if="Case.immeadteAction">
                  <td id="immeadteAction" class="font-weight-black">Immeadate Action:</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.immeadteAction"
                    ></v-text-field>
                    <p v-else>{{ Case.immeadteAction }}</p>
                  </td>
                </tr>
                <tr v-if="Case.policeOfficeTakingIntialAction">
                  <td id="policeOfficeTakingIntialAction" class="font-weight-black">
                    Police taken Action:
                  </td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.policeOfficeTakingIntialAction"
                    ></v-text-field>
                    <p v-else>{{ Case.policeOfficeTakingIntialAction }}</p>
                  </td>
                </tr>
                <tr v-if="Case.finalDisposal">
                  <td id="finalDisposal" class="font-weight-black">Final Disposal:</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.finalDisposal"
                    ></v-text-field>
                    <p v-else>{{ Case.finalDisposal }}</p>
                  </td>
                </tr>
                <tr v-if="Case.createdAt">
                  <td id="createdAt" class="font-weight-black">Created At:</td>
                  <td>
                    <v-text-field
                      v-if="edit"
                      dense
                      v-model="Casecp.createdAt"
                    ></v-text-field>
                    <p v-else>{{ Case.createdAt }}</p>
                  </td>
                </tr>
                <tr v-if="Case.user">
                  <td id="user" class="font-weight-black">
                    Officer created:
                  </td>
                  <td>{{ Case.user }}</td>
                </tr>
                <tr>
                  <td id="arrested" class="font-weight-black">
                    Is Accuser Arrested ?
                  </td>
                  <td>
                    <v-checkbox
                      v-model="Casecp.arrested"
                      readonly
                      dense
                    ></v-checkbox>
                  </td>
                </tr>
                <tr v-if="edit">
                  <td></td>
                  <td>
                    <v-btn class="primary" small @click.stop="submit"
                      >Edit</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    Case: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {
      edit: false,
      Casecp: this.Case,
      gender: ["Male", "Female", "Unspecified"]
    };
  },
//   methods: {
//     submit() {
//       delete this.patientcp.contactsInformation;
//       this.$store.dispatch("update_patient", this.patientcp).then(() => {
//         this.edit = false;
//         this.fetchclientdata(this.$route.params.id);
//       });
//     }
//   }
};
</script>
