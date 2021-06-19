const state = () => ({
    showLoader: Boolean,
    ireports: []
  });
  
  const mutations = {
    /**Fetch Accusers */
  
    ["INVESTIGATIONREPORT"](state) {
      state.showLoader = true;
    },
    
    ["INVESTIGATIONREPORT_SUCCESS"](state,response) {
        state.showLoader = true;
        state.accuser = response.data;
      },


  }
  
  const actions = {
  
    async retrieve_ireports({ commit }) {
      commit("INVESTIGATIONREPORT");
      await this.$api.$get('/api/v1/investigationReports/')
          .then(response => {
              console.log(response.data);
          commit("INVESTIGATIONREPORT_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },
    

  }
  const getters = {
    listireports: function (state) {
      return state.ireports;
    },
 
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  