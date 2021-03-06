const state = () => ({
  isAuthenticated: Boolean,
  userdata: {},
  error: '',
  activeuserdata: null,
});

const mutations = {

  LOGIN(state) {
    state.showLoader = true;
  },
  LOGIN_FAILED(state) {
    state.showLoader = false;
  },

  LOGIN_ERROR(state,error) {
    state.showLoader = false;
    state.error = error;
  },

  LOGIN_SUCCESS(state, response) {
    state.showLoader = false;
    state.userdata = response;
    
  },

  LOGOUT(state) {
    state.showLoader = true;
  },
  LOGOUT_SUCCESS(state) {
    state.showLoader = false;
    state.userdata = null;
  },
  LOGOUT_FAILED(state) {
    state.showLoader = false;
  },


  ACTIVEUSR(state) {
    state.showLoader = true;
  },
  ACTIVEUSER_SUCCESS(state) {
    state.showLoader = false;
    state.activeuserdata = null;
  },
};
const actions = {
  async login({ commit }, payload) {
    commit("LOGIN");
    console.log(payload);
    await this.$api.$post(`api/v1/auth/login`, payload)
      .then(response => {
        if (response.token != null) {

          commit("LOGIN_SUCCESS", response);
    
          const token = response.token;
          const uuId = response.id;
          const mrole = response.role;
          const mmail = response.email;
          const mname = response.name;
          localStorage.setItem('qAccessToken', token);
          localStorage.setItem('uuId', uuId);
          localStorage.setItem('mrole', mrole);
          localStorage.setItem('mmail', mmail);
          localStorage.setItem('mname', mname);
         //  console.log(localStorage.getItem('uuId') );

          this.$router.push('/');
        }

      }).catch(error => {
        commit("LOGIN_ERROR","Your Username or Password is incorrect");
        localStorage.removeItem('qAccessToken');
 
        console.log(error);

      });
  },

};
const getters = {
  isLoggedIn: function (state) {
    return state.userdata != null;
  },
  userInfos: function (state) {
    return state.userdata;
  },
  userId: (state) => {
    return state.userdata.id;
  },
  Signerror: function (state) {
    return state.error;
  },
  active: function (state){
   return state.activeuserdata 
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};