<template>
  <div>
    <div class="breadcrumb ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/settings" class="active"
        >Setting & Configurations</router-link
      >
    </div>
    <v-container class="fill-height" fluid>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="3" class="pa-2">
          <v-list nav dense subheader tile>
            <template v-for="(setting, ind) in settings">
              <v-list-group
                :value="true"
                :prepend-icon="setting.icon"
                :key="ind"
              >
                <template v-slot:activator>
                  <v-list-item-title>{{ $t(setting.title) }}</v-list-item-title>
                </template>

                <template>
                  <v-list-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          $t(menu.title)
                        }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <template v-for="(sub, i) in menu.submenus">
                      <v-list-item :key="sub.to" :to="sub.to">
                        <v-list-item-content>
                          <v-list-item-title>
                            <v-icon small v-html="sub.icon"></v-icon>
                            {{ $t(sub.title) }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider class="ml-12" :key="i"></v-divider>
                    </template>
                  </v-list-group>
                </template>
              </v-list-group>
            </template>
          </v-list>
        </v-col>
        <v-col cols="12" sm="12" md="9" class="ma-0 pa-2">
          <nuxt-child class="ma-0 pa-0" :key="this.$router.currentRoute.name" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      picture: true,
      dark: false,
      sync: false,
      pagetitle: "Administrator Dashboard",

      // admins: [
      //   [
      //     "hhhh",
      //     "mdi-account-multiples-outline",
      //     "/settings/users"
      //   ],
      //   ["settings", "mdi-cog-outline", "/settings/admin"]
      // ],
      // cruds: [
      //   ["Create", "mdi-plus-outline"],
      //   ["Read", "mdi-file-outline"],
      //   ["Update", "mdi-update"],
      //   ["Delete", "mdi-delete"]
      // ],
      // settings: [
      //   {
      //     title: "roleandpermissions",
      //     icon: "mdi-shield-lock-outline",
      //     menus: [
      //       {
      //         title: "administrations",
      //         submenus: [
      //           {
      //             title: "usersmanagement",
      //             to: "/settings",
      //             icon: "mdi-account-settings"
      //           },
      //           {
      //             title: "selfusersmanagement",
      //             to: "/settings/selfservices",
      //             icon: "mdi-account-group"
      //           },
      //           {
      //             title: "rolesandprivileges",
      //             icon: "mdi-cog-outline",
      //             to: "/settings/roles"
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     title: "system",
      //     icon: "mdi-cog",
      //     menus: [
      //       {
      //         title: "configurations",
      //         submenus: [
      //           {
      //             title: "smsconfigurations",
      //             to: "/settings/sms",
      //             icon: "mdi-message-cog-outline"
      //           },
      //           {
      //             title: "emailconfigurations",
      //             to: "/settings/config/email",
      //             icon: "mdi-mailbox-outline"
      //           },
      //           {
      //             title: "systemcolors",
      //             to: "/settings/colors",
      //             icon: "mdi-format-color-fill"
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  beforeMount: function() {
    //const vm = this;
  },
  methods: {
    toggledrawer: function() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
<style>
#app {
  font-family: "Lato", sans-serif;
}
.routeLink {
  text-decoration: none;
}
</style>
