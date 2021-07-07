<template>
    <div>
        <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs"> Staff
      </router-link>
      <router-link :to="`/staffs/${this.$route.params.id}`" class="active">{{
        this.userdetails.name == null
          ? this.userdetails.name
          : this.userdetails.name
      }}</router-link>
    </div>
    <v-container class="ma-0 pa-0" fluid>
        <v-row>
            <v-col cols="12" md="3">
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
                size="16"
            ></v-progress-circular>
                
                <v-card flat tile outlined >
                <v-card-title class="d-flex flex-row justify-center mb-2">
                <v-avatar size="82">
                    <v-img
                    alt="user"
                    :src="staffThumbnail"
                    :lazy-src="thumbnil"
                    ></v-img>
              </v-avatar>
            </v-card-title>
            <div class="d-flex flex-row justify-center mb-2">
              <v-icon class="red--text lighten-4 mx-1">mdi-account-lock</v-icon>
              <v-icon class="blue--text lighten-4 mx-1">mdi-camera</v-icon>
              <v-icon class="orange--text mx-1">mdi-pencil</v-icon>
            </div>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td class="font-weight-bold">{{ item.name }}</td>
                      <td>{{ item.value }}</td>
                    </tr>
                    <tr></tr>

                      <!-- <tr>
                  <td  id="name" class="font-weight-black">Full Name:
                  </td>
                  <td>{{userdetails.name}}</td>
                </tr> -->
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          </v-col>
          <v-col cols="12" md="9">
          <v-tabs
            slider-color="secondary"
            background-color="primary"
            :show-arrows="this.$vuetify.breakpoint.mobile"
            color="secondary"
            left
            v-model="tab"
            class="elevation-2"
            dark
          >
            <v-tab class="font-weight-normal">
              <span><v-icon small left>mdi-account</v-icon>Payroll</span>
            </v-tab>
            <v-tab class="font-weight-normal">
              <span>
                <v-icon small left>mdi-medical-bag</v-icon>
                Leaves</span
              >
            </v-tab>
            <v-tab class="font-weight-normal">
              <span><v-icon small left>mdi-history</v-icon> Attandence</span>
            </v-tab>
            <v-tab class="font-weight-normal">
              <span><v-icon small left>mdi-plus</v-icon> Document</span>
            </v-tab>
            <v-tab class="font-weight-normal">
              <span> <v-icon small left>mdi-plus</v-icon> Timeline</span>
            </v-tab>
            <v-tab
              class="font-weight-normal"
              @click="getHistoricalAssignedServices"
            >
              <span>
                <v-icon small left>mdi-plus</v-icon>Cases Directs</span
              >
            </v-tab>
          </v-tabs>
          <v-tabs-items vertical v-model="tab">
            <v-tab-item>
              <service-card :services="services"></service-card>
            </v-tab-item>
            <v-tab-item>
              <h2 class="ma-8">Leaves</h2>
            </v-tab-item>
            <v-tab-item>
              <h2 class="ma-8">Attendance</h2>
            </v-tab-item>
            <v-tab-item>
              <h1 class="ma-8">Document</h1>
            </v-tab-item>
            <v-tab-item>
              <h1 class="ma-8">Timeline</h1>
            </v-tab-item>
            <v-tab-item>
              <v-progress-circular
                v-if="allservices == null"
              ></v-progress-circular>
              <service-card v-else :services="allservices"></service-card>
            </v-tab-item>
          </v-tabs-items>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {


    created() {
    this.$store.dispatch("retrieve_userbyid",this.$route.params.id);
  },
    computed: {

      userdetails(){
      return this.$store.getters.userinfo;
    },
        desserts: {
        get() {
            return [
            {
                name: "Name",
                value: this.userdetails.name
              
               
            },
            {
                name: "Role",
                   value: this.userdetails.role
            },
            {
                name: "Title",
                    value: this.userdetails.title
               
            },
            {
                name: "Work Shift",
                value: "6:00AM - 12:01PM"
            },
         
            {
                name: "Phone",
                
            },
            {
                name: "Email",
                    value: this.userdetails.email
               
            },
            {
                name: "Joining Date",
                value: new Date().toISOString().slice(0, 10)
            }
        ];
        }
      }
    },
}
</script>

<style>

</style>
