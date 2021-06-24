<template>
  <v-container fill-height fluid grid-list-xl>
    <v-row>
      <v-col xs="12" md="3" sm="12" >
        <v-card flat>
         <v-img
             :src="filebaseUri + entityThumbNail"
            lazy-src="https://www.attendanceworks.org/wp-content/uploads/2020/09/img-placeholder.png"
            aspect-ratio="1"
            class="grey lighten-2 align-end"
            height="200px"
            max-height="200px"
         >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title>
              
            </v-card-title>
         </v-img>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.basil {
  background-color: #fffbe6 !important;
}

.basil--text {
  color: #356859 !important;
}
.v-window,
.v-item-group .v-window__container,
.v-window-item {
  width: 100%;
}
</style>
