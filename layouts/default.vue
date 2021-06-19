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
      fixed
      app
      color= "#44C4F1"
    >
      <v-list>
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
      color= "#44C4F1"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
     
   
      <v-toolbar-title v-text="title" />
      <v-spacer />
     
      <v-badge class="mr-3" icon="mdi-lock" color="blue" bottom overlap>
        <template v-slot:badge>
        </template>
        <v-btn fab small class="primary" elevation="0" to="/me">
          <v-icon medium color="white">mdi-account</v-icon></v-btn
        >
      </v-badge>
      <v-badge class="mr-3" icon="mdi-lock" color="blue" bottom overlap>
        <template v-slot:badge>
        </template>
        <v-btn fab small class="primary" elevation="0" to="/me">
          <v-icon medium color="white">mdi-logout-variant</v-icon></v-btn
        >
      </v-badge>
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
      color= "#44C4F1"
    >
      <span>&copy; {{ new Date().getFullYear() }} ErnestUiLabs</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
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
  }
}
</script>
