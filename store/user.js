const state = () => ({
    showLoader: Boolean,
    users: []
  });
  
  const mutations = {
    /**Fetch Accusers */
  
    ["USER"](state) {
      state.showLoader = true;
    },
    
    ["USER_SUCCESS"](state,response) {
        state.showLoader = true;
        state.accuser = response.data;
      },


  }
  
  const actions = {
  
    async retrieve_staff({ commit }) {
      commit("USER");
      await this.$api.$get('/api/v1/users/')
          .then(response => {
              console.log(response.data);
          commit("USER_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },
    


  }
  const getters = {
    listusers: function (state) {
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
  