<template>
    <div>
    <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/me" class="active">Profile</router-link>
    </div>
     <v-container fluid>
     <v-card class="mb-4" flat  v-if="edit">

     <v-toolbar dark color="primary" flat >
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
         <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark class="button cancel" @click="edit = !edit">
            cancel
          </v-btn>
          <v-btn class="button" type="submit" form="check-update-profile-form">
            save Updates
          </v-btn>
        </v-card-actions>      
      </v-card>   

      <v-card v-if="!edit" flat class="mx-auto default">
          <v-toolbar color="primary" flat dark>
              <v-toolbar-title> User Profile</v-toolbar-title>
              <v-spacer></v-spacer>
                <v-dialog v-model="uploaddialog" persistent max-width="600">
            <v-card>
              <v-card-title class="headline">
                Upload profile image
              </v-card-title>
              <v-card-text>
                <v-file-input
                  label="Profile picture"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                  show-size
                  @change="selectFile"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click.stop="uploaddialog = false"
                  x-small
                >
                  Cancel
                </v-btn>
                <v-btn x-small shaped @click="uploadProfileImage()">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                     <v-btn-toggle borderless rounded v-model="toggle_exclusive">
                <v-btn
                  medium
                  class="button cancel"
                  elevation="2"
                  @click="edit = !edit"
                  
                >
                  <v-icon>mdi-pencil</v-icon>edit</v-btn
                >
                <v-btn
                  medium
                  class="button upload"
                  color="green"
                  elevation="2"
                  @click="uploaddialog = !uploaddialog"
                 
                >
                  <v-icon>mdi-cloud-upload</v-icon>&nbsp;Update image</v-btn
                >

                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="button"
                  medium
                  elevation="2"
                >
                  <v-icon small>mdi-lock</v-icon>
                  &nbsp;&nbsp;Change Password</v-btn
                >
              </v-btn-toggle>
                </template>
                 <v-card flat>
              <v-toolbar dark flat class="primary">
                <v-toolbar-title><h3>Update password</h3></v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4">
                  <v-form
                  @submit.prevent="updatepasssword"
                  id="check-login-form"
                  class="mt-3"
                  ref="form"
                  v-model="valid"
                > 
                <v-text-field
                prepend-inner-icon="mdi-lock"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :type="show1 ? 'text' : 'password'"
                 @click:append="show1 = !show1"
                     error-count="8"
                    label="Old password"
                    placeholder="********"
                    name="input-10-1"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5">
                </v-text-field>

                <v-text-field
                    prepend-inner-icon="mdi-lock-outline"
                    :append-icon="show2 ? 'visibility' : 'visibility_off'"
                    :type="show2 ? 'text' : 'password'"
                    @click:append="show2 = !show2"
                    error-count="8"
                    label="New password"
                    placeholder="********"
                    name="input-10-1"
                    hint="At least 8 characters"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5"
                  ></v-text-field>
                   <v-text-field
                    prepend-inner-icon="mdi-lock-outline"
                    :append-icon="show3 ? 'visibility' : 'visibility_off'"
                    :type="show3 ? 'text' : 'password'"
                    @click:append="show3 = !show3"
                    error-count="8"
                    label="Confirm password"
                    placeholder="********"
                    name="input-10-1"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5"
                  ></v-text-field>
                </v-form>
              </v-card-text>

             <v-divider></v-divider>

             <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="button cancel" small @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn
                  class="button"
                  small
                  type="submit"
                  :disabled="!valid"
                  form="check-login-form"
                >
                  Update
                </v-btn>
              </v-card-actions>
                 </v-card>
            </v-dialog>
          </v-toolbar>

            <v-card-text   v-if="user != null">
          <v-container>
            <v-list three-line flat width="100%" class="default">
              <v-list-item>
                <v-list-item-avatar size="120">
                  <!--  -->
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong
                      ><h3>Username: {{ user.data.name }} </h3></strong
                    ></v-list-item-title
                  >
                  <v-list-item-subtitle
                    ><strong
                      >Email: {{ user.data.email}}</strong
                    ></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card-text>
        <v-card-text v-else>
          <v-progress-circular
            :width="2"
            color="primary"
            size="20"
            indeterminate
          ></v-progress-circular>
        </v-card-text>
    </v-card>  
     </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
    readonly: true,
    dialog: false,
    valid: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    edit: false,
    progress: false,
    uploaddialog: false,
    confirmPassword: "",
    currentFile: undefined,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    form_data: {
      oldPassword: "",
      newPassword: ""
    }
  }),

   beforeCreate() {
    this.$store.dispatch("retrieve_profile");
  },

  methods: {
     closeprofileupdate: function() {
      this.$store.dispatch("retrieve_profile");
      this.edit = false;
      this.progress = false;
    },

       updatepasssword() {
      this.$store.dispatch("_update_user_password", this.form_data);
    },

        close() {
      this.$refs.form.reset();
      this.dialog = false;
      this.$store.dispatch("_clear_local_storage_and_sign_out");
    },

      getColor(role) {
      if (role === "user") {
        return "yellow";
      } else if (role === "admin") {
        return "blue darken-3 white--text";
      } else if (role === "moderator") {
        return "green";
      } else {
        return "cyan";
      }
    }
  },

  computed: {
    user() {
      return this.$store.getters.profile
    }
  }

}
</script>

<style>

</style>
