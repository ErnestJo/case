<template>
  <v-app 
  class="app"
   style="
    background: rgba(0,0,0,0);"
  >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
       overlay-color="primary"
      fixed
      dark
      app
      color= "primary"
       expand-on-hover
      width="220"
      height="100%"
    >
      <v-list nav dense subheader tile class="mt-0 pa-0 py-1">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color= "primary"
      
    >
     <v-toolbar-title>
        <v-avatar color="primary lighten-1" size="36">
          <span
            class="white--text font-weight-bold overline"
            @click.stop="drawer = !drawer"
          >
            <v-icon small color="white">mdi-dots-grid</v-icon>
          </span>
        </v-avatar>
        &nbsp;&nbsp;
        <span class="hidden-sm-and-down font-weight-bold default--text"
          >{{title}}</span
        >
      </v-toolbar-title>
      <v-spacer />
      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        class="mr-2"
        offset-x="10"
        offset-y="10"
      >
         <v-btn fab small class="button" to="/me">
          <v-avatar size="35">
          </v-avatar>
        </v-btn> 
      </v-badge>


      <v-tooltip bottom color="primary" open-on-hover open-delay="500">
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            v-if="$vuetify.breakpoint.mdAndUp"
            v-on="on"
            @click.stop="syncro()"
            small
            elevation="1"
            class="button mr-2 "
            dark
          >
            <v-icon v-on="on" v-if="sync" medium>mdi-progress-clock</v-icon>
            <v-icon v-else medium>mdi-progress-check</v-icon>
          </v-btn>
        </template>

      </v-tooltip>

      <v-tooltip bottom color="primary" open-on-hover open-delay="500" >
        <template v-slot:activator="{ on }" >
          <v-btn fab v-on="on" small elevation="1" class="mr-2 button" dark>
           <v-icon 
           medium 
           @click="selectedItemAction(1)"
           >mdi-power</v-icon>
          </v-btn>
        </template>
       
      </v-tooltip>
  
       <v-btn
        fab
        x-small
        class="pa-1 button"
        elevation="1"
        v-show="false"
        dark
        @click="(dark = !dark), toggle(dark)"
      >
        <v-icon
          medium
          :color="dark ? 'yellow' : 'white'"
          v-html="
            dark
              ? 'mdi-lightbulb-on mdi-rotate-180'
              : 'mdi-lightbulb-outline mdi-rotate-180'
          "
        ></v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
       
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      dark
      color= "primary"
    >
      <span>&copy; {{ new Date().getFullYear() }} ErnestUiLabs</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { METHODS } from 'http';
Vue.use(Vuex);
export default {
  data () {
    return {
       clipped: false,
      mini: true,
      drawer: true,
      fixed: false,
      picture: true,
      dark: false,
      sync: false,
      interval: {},
 
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },

          {
          icon: 'mdi-chart-bubble',
          title: 'Createcase',
          to: '/cases/add'
        }
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title:'Police Case Management System'
    }
  },

  methods: {
    selectedItemAction: function(item) {
      switch (item) {
        case 0:
          this.$router.push("/profile");
          break;
        case 1:
          localStorage.removeItem("qAccessToken");
          localStorage.removeItem("uuId");
          this.$router.push("/signin");
          break;
      }
    },
    toggledrawer: function() {
      this.drawer = !this.drawer;
    },
  logoutsession: function() {
      this.$store.dispatch("_clear_local_storage_and_sign_out"); 
    },
    changemode: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    },
    nativateToHere(id) {
      this.$router.push("/" + id);
    },
    toggle(mode) {
      if (`${mode}` === "true") {
        this.$vuetify.theme.dark = true;
        this.$store.dispatch("change_to_dark");
        document.body.style.background = "#1d3333";
        this.dark = true;
      } else {
        this.$store.dispatch("change_to_light");
        this.$vuetify.theme.dark = false;
        this.dark = false;
        document.body.style.backgroundImage =
          "url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)";
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {}
}
</script>
