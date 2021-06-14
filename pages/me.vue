<template>
    <div>
    <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/me" class="active">Profile</router-link>
    </div>
     <v-container fluid>
     <v-card class="mb-4" flat v-if="edit">

     <v-toolbar dark color="primary" flat>
          <v-toolbar-title> Edit staff profile</v-toolbar-title>

          <v-spacer></v-spacer>
          <div v-if="progress">
            <a class="light-blue--text">Please wait...</a>
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
        </v-toolbar>
             
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
