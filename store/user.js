const state = () => ({
    showLoader: Boolean,
    user: {},  
   users: []
  });
  
  const mutations = {
    /**Fetch Accusers */
  
    ["USER"](state) {
      state.showLoader = true;
    },
    
    ["USER_SUCCESS"](state,response) {
        state.showLoader = true;
        state.users = response.data;
    },
    
    ["CREATE_NEW_USER"](state) {
      state.showLoader = true;
    },

    ["CREATE_NEW_USER_FAILED"](state) {
      state.showLoader = false;
    },

    ["CREATE_NEW_USER_ERROR"](state) {
      state.showLoader = false;
    },

    ["CREATE_NEW_USER_SUCCESS"](state, payload) {
      state.showLoader = false;
      state.users.push(payload)
    },

     //Get self service users
    ["UPDATE_USER"](state) {
      state.showLoader = true;
    },
    ["UPDATE_USER_FAILED"](state) {
      state.showLoader = false;
    },
    ["UPDATE_USER_ERROR"](state) {
      state.showLoader = false;
    },
    ["UPDATE_USER_SUCCESS"](state, payload) {
      state.showLoader = false;
    },
  
      //Get self service users
    ["DELETE_USERS"](state) {
      state.showLoader = true;
    },
    ["DELETE_USERS_SUCCESS"](state, payload) {
      state.showLoader = false;
    },
    ["DELETE_USERS_FAILED"](state) {
      state.showLoader = false;

    },
  }


  
  const actions = {
  
    async retrieve_staff({ commit }) {
      commit("USER");
      await this.$api.$get('api/v1/users/')
          .then(response => {
              console.log(response.data);
          commit("USER_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },

    async retrieve_user_info({ commit }) {
      commit("USER_INFO");
      await this.$api.$get('api/v1/auth/me')
          .then(response => {
              console.log(response.data);
          commit("USER_INFO_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },

    async create_new_user({ commit }, payload) {
      commit("CREATE_NEW_USER");
      await this.$api.$post(`api/v1/users/`, payload)
        .then(response => {
          if (response.statusCode === 200) {
            commit("CREATE_NEW_USER_SUCCESS", response);
          }
  
        }).catch(error => {
          commit("CREATE_NEW_USER_FAILED");
          console.log(error);
        });
    },
  
    async delete_user({ commit }, payload) {
      commit("DELETE_USER");
      await this.$api.$delete(`api/v1/users/${payload.id}`)
        .then(response => {
          if (response.statusCode === 200) {
            commit("DELETE_USER_SUCCESS", response);
          }
        }).catch(error => {
          commit("DELETE_USER_FAILED");
          console.log(error);
        });
    },

    async updateuserdetails({ commit }, payload) {
      commit("UPDATE_USER");
      await this.$api.$put(`api/v1/users/${payload.id}`, payload.data)
        .then(response => {
          console.log(response);
          if (response.statusCode === 200) {
            commit("UPDATE_USER_SUCCESS", response);
          }
        }).catch(error => {
          commit("UPDATE_USER_FAILED");
          console.log(error);
        });
    },

  }
  const getters = {
    Users: function (state) {
      return state.users;
    },
  }
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  