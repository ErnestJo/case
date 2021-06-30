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

      ["PoST_ACCUSER"](state) {
        state.showLoader = true;
      },
  
      ["PoST_ACCUSER_SUCCESS"](state,payload) {
        state.showLoader = true;
        state.ireports = payload;
      },
  
      ["PoST_ERROR"](state) {
        state.showLoader = false;
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
    
    async createaccuser({ commit }, payload) {
      commit("PoST_ACCUSER");
      await this.$api.$post(`api/v1/cases/${payload.id}/accusers`, payload.data)
        .then(response => {
          console.log(response);
          commit("PoST_ACCUSER_SUCCESS", response);
  
        }).catch(error => {
          commit("PoST_ERROR");
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
  