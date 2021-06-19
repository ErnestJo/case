const state = () => ({
    showLoader: Boolean,
    accuser: []
  });
  
  const mutations = {
    /**Fetch Accusers */
  
    ["ACCUSER"](state) {
      state.showLoader = true;
    },
    
    ["ACCUSER_SUCCESS"](state,response) {
        state.showLoader = true;
        state.accuser = response.data;
      },


  }
  
  const actions = {
  
    async retrieve_accuser({ commit }) {
      commit("ACCUSER");
      await this.$api.$get('/api/v1/accusers/')
          .then(response => {
              console.log(response.data);
          commit("ACCUSER_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },
    


  }
  const getters = {
    listaccusers: function (state) {
      return state.accuser;
    },
 
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  