const state = () => ({
    showLoader: Boolean,
    isAuthenticated: Boolean,
    userdata: {},
    roles: [],
    exipiredate: '',
    accessToken: "",
  });
  
  const mutations = {
  
    ["SIGNIN"](state) {
      state.showLoader = true;
    },
    ["SIGNIN_FAILED"](state) {
      state.showLoader = false;
    },
    ["SIGNIN_ERROR"](state) {
      state.showLoader = false;
    },
    ["SIGNIN_SUCCESS"](state, payload) {
      state.isAuthenticated = true;
      state.showLoader = false;
  
      this.$toast.success('Welcome PCMS, ' + payload.name);
      var d = new Date();
      var n = d.getTime();
      var mil = n + 86400000;
      var date = new Date(mil);
  
      state.exipiredate = date;
      state.userdata = payload;
      var response = payload;
      state.accessToken = response.accessToken;
      if (window.localStorage) {
        window.localStorage.setItem('date', mil);
      }
      this.$router.push('/');
    },
    ["SIGNOUT"](state) {
      state.showLoader = true;
      state.userdata = null;
      state.isAuthenticated = false;
      this.$router.push('/signin');
    },
    ["SIGNOUT_SUCCESS"](state) {
      state.showLoader = false;
      state.userdata = null;
      window.localStorage.clear();
      sessionStorage.clear();
      this.$router.push('/signin');
    },
    ["SIGNOUT_FAILED"](state) {
      state.showLoader = false;
    },
  
    ["ME"](state) {
       state.showLoader = false;
    }
  };

  const actions = {
    async _authenticate_then_login({ commit }, payload) {
      commit("SIGNIN");
      await this.$api.$post(`auth/signin`, payload)
        .then(response => {
          if (response) {
            commit("SIGNIN_SUCCESS", response);
          }
        }).catch(error => {
          commit("SIGNIN_ERROR");
          localStorage.clear();
        });
    },
  
    _clear_local_storage_and_sign_out({ commit }) {
      window.localStorage.clear();
      localStorage.removeItem('ospic.*');
      sessionStorage.clear();
      this.$router.push('/signin');
    },
    async logout({ commit }) {
      commit("SIGNOUT")
    },
    // async update_role_privileges({ commit }, id, payload) {
    //   console.log(id);
    //   console.log(payload)
    //   return await this.$api
    //     .$put(`auth/roles/${id}/`, payload)
    //     .then(response => {
    //       this.$router.push(`roles/${id}`);
    //       //this.request_data();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
 
  };

  const getters = {
    isLoggedIn: function (state) {
      const exipire = window.localStorage.getItem('date');
      const status = ((typeof exipire == 'undefined' ? new Date().getTime() - 2 : exipire) - new Date().getTime()) > 0;
      return status;
    },
    exipireddate: function (state) {
      return state.exipiredate;
    },
    userInfos: function (state) {
      return state.userdata;
    },
  
    role: (state) => (id) => {
      return state.roles.find(role => role.id === id)
    },
    accessToken: function (state) {
      return state.accessToken;
    },
  };
  export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions,
  };
  