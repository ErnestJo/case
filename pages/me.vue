<template>
    <div>
    <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/me" class="active">Profile</router-link>
    </div>
     <v-container fluid>
     <v-card class="mb-4" flat >

     <v-toolbar dark color="primary" flat>
          <v-toolbar-title> Edit staff profile</v-toolbar-title>
          <v-spacer></v-spacer>
          <div v-if="progress">
            <a class="light-blue--text">Please wait...</a>
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
        </v-toolbar>
<v-card-text>
     <v-form
            @submit.prevent="updateprofile"
            id="check-update-profile-form"
            class="mt-3">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="4">
                    <v-text-field
                    label="Username"
                    :readonly="readonly"
                  ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Full name"
                  ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                  <v-text-field
            
                    label="Phone"
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Title"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Email "
                  ></v-text-field>
                </v-col>

                   <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    label="Role"
                    readonly
                  ></v-text-field>
                   </v-col> 
                </v-row>
            </v-container>
        </v-form>
</v-card-text>
             
      </v-card>     
     </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
