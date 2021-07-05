<template>
    <div>
        <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/ireports">IR</router-link>
      <router-link to="/ireports/add" class="active"
        >Add Investigation Report
        </router-link >
    </div>
    <v-card class="mx-auto default">
         <v-toolbar dark color="primary" flat dense>
        <v-toolbar-title>add for Files</v-toolbar-title>
      </v-toolbar>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters>
                  
                                    <v-col cols="12">
                                       <v-file-input
                                          label="Evidence pictures"
                                          accept="image/png, image/jpeg, image/bmp"
                                          prepend-icon="mdi-camera"
                                          show-size
                                          outlined
                                          @change="selectFile"
                                          >
                                      <template v-slot:selection="{ text }">
                                          <v-chip small label color="primary">
                                            {{ text }}
                                          </v-chip>
                                      </template>
                                     </v-file-input>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-row no-gutters> 
                                   <v-col cols="12">
                                       <v-file-input
                                          label="Evidence  video scence"
                                          accept="video/mp4,video/x-m4v,video/"
                                          prepend-icon="mdi-video"
                                          show-size
                                          outlined
                                          @change="selectFile"
                                          >
                                      <template v-slot:selection="{ text }">
                                          <v-chip small label color="primary">
                                            {{ text }}
                                          </v-chip>
                                      </template>
                                     </v-file-input>
                                    </v-col>     
                                </v-row>
                            </v-col>
                                <v-col cols="12" sm="6" md="4">
                                         <v-row no-gutters>
                              <v-col cols="12">
                                       <v-file-input
                                          label="Evidence  video scence"
                                          accept="audio/*"
                                          prepend-icon="mdi-microphone"
                                          show-size
                                          outlined
                                          @change="selectFile"
                                          >
                                      <template v-slot:selection="{ text }">
                                          <v-chip small label color="primary">
                                            {{ text }}
                                          </v-chip>
                                      </template>
                                     </v-file-input>
                                    </v-col> 
                            </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click.stop="uploaddialog = false"
                  small
                >
                  Cancel
                </v-btn>
                <v-btn small shaped @click="uploadProfileImage()">
                  Save
                </v-btn>
              </v-card-actions>
            </v-container>
            </v-form>
        </v-card>
    </div>   
</template>

<script>
export default {
    
   methods: {
    close() {},
    save() {
      console.log(this.editedItem);
      var state = this.$refs.form.validate();
      this.$refs.form.validate();
      if (state) {
        console.log(this.editedItem)
        this.$store.dispatch("post_case", this.editedItem);
      }
    },

    //  async uploadProfileImage() {
    //   const formData = new FormData();
    //   formData.append("file", this.currentFile);
    //   const userId = this.$store.getters.userInfos.id;

    //   return await this.$api
    //     .$patch(`/auth/${userId}/images/`, formData)
    //     .then(response => {
    //       if (response !== null) {
    //         this.uploaddialog = false;
    //         setTimeout(
    //           () => this.$store.dispatch("retrieve_profile"),
    //           this.delay_seconds
    //         );
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
  }

}
</script>

<style>

</style>
