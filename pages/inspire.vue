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
          <v-card-text>
            <p class="overline">Contacts</p>
            <v-divider></v-divider>

            <v-flex xs12 md12 class="ma-0 pa-0" v-if="address !== null">
              <v-address-card :address="address"></v-address-card>
            </v-flex>
          </v-card-text>

          <v-card-actions>
            <v-col>
              <v-btn
                small
                block
                class="button"
                v-if="address"
                dark
                :to="`/`"
                >View contacts</v-btn
              >
              <v-btn
                small
                block
                class="button"
                v-else
                dark
                :to="``"
              >
                Add contacts
              </v-btn>
              <v-btn
                small
                block
                dark
                class="button mt-2"
                :to="``"
              >
                Create self service user
              </v-btn>
            </v-col>
          </v-card-actions>
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
