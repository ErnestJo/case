const state = () => ({
    showLoader: Boolean,
    profile: {},
    profileimage: String
  });
  
  const mutations = {
  
    ["GET_PROFILE"](state) {
      state.showLoader = true;
    },
    ["GET_PROFILE_FAILED"](state) {
      state.showLoader = false;
    },
    ["GET_PROFILE_ERROR"](state) {
      state.showLoader = false;
    },
    ["GET_PROFILE_SUCCESS"](state, payload) {
      state.showLoader = false;
      state.profile = payload;
  
    },
  
    ["UPDATE_PASSWORD"](state) {
      state.showLoader = true;
    },
    ["UPDATE_PASSWORD_FAILED"](state) {
      state.showLoader = false;
    },
    ["UPDATE_PASSWORD_ERROR"](state) {
      state.showLoader = false;
    },
    ["UPDATE_PASSWORD_SUCCESS"](state, payload) {
      state.showLoader = false;
  
    },
  
  }
  const actions = {
    async retrieve_profile({ commit }) {
      commit("GET_PROFILE");
      await this.$api.$get("api/v1/auth/me")
        .then(response => {
            commit("GET_PROFILE_SUCCESS", response);
            console.log(response)
        }).catch(error => {
          commit("GET_PROFILE_ERROR");
          console.log(error);
        });
  
    },
    async _update_user_password({ commit }, payload) {
      commit("UPDATE_PASSWORD");
      await this.$api.$put("api/v1/auth/updatepassword", payload)
        .then(response => {
          commit("UPDATE_PASSWORD_SUCCESS", response);
          console.log(response)
          if (response.httpStatus === 200) {
            commit("SIGNOUT_SUCCESS")
          }
  
        }).catch(error => {
          commit("UPDATE_PASSWORD_ERROR");
          console.log(error);
  
        });
    }
  }
  const getters = {
    profile: function (state) {
      return state.profile;
    },
   
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }