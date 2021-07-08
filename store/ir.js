const state = () => ({
    showLoader: Boolean,
  ireports: [],
    // ireportsdata: null
  });
  
  const mutations = {
    /**Fetch Reports */
  
    ["INVESTIGATIONREPORT"](state) {
      state.showLoader = true;
    },
    
    ["INVESTIGATIONREPORT_SUCCESS"](state,response) {
        state.showLoader = true;
      state.ireports = response.data;
      },

      ["IRID"](state) {
        state.showLoader = true;
    },
      
    ["IRID_SUCCESS"](state,response) {
      state.showLoader = true;
      state.ireportsdata = response.data;
    },

    /** Post IR on a cases */
    ["PoSTIR"](state) {
      state.showLoader = true;
    },

    ["PoSTIR_SUCCESS"](state,payload) {
      state.showLoader = true;
      state.ireports = payload;
    },

    ["PoST_ERROR"](state) {
      state.showLoader = false;
    },

  }
  
  const actions = {
  
    async retrieve_ireports({ commit }) {
      commit("INVESTIGATIONREPORT");
      await this.$api.$get('api/v1/investigationReports/')
          .then(response => {
              console.log(response.data);
          commit("INVESTIGATIONREPORT_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },

    // async retrieve_irbyid({ commit }, payload) {
    //   commit("IRID");
    //   await this.$api.$get(`api/v1/investigationReports/`+ payload+ `/`)
    //       .then(response => {
    //         //  console.log(response.data);
    //           commit("IRID_SUCCESS", response);
    //     }).catch(error => {
    //       console.log(error);
    //     });
    // },

    async postir({ commit }, payload) {
      commit("PoSTIR");
      await this.$api.$post(`api/v1/cases/${payload.id}/investigationReports`, payload.data)
        .then(response => {
          console.log(response);
          commit("PoSTIR_SUCCESS", response);
  
        }).catch(error => {
          commit("PoST_ERROR");
          console.log(error);
        });
    },

  }
  const getters = {
    listireports: function (state) {
      return state.ireports;
    },

    irs: function (state) {
      console.log("ernest");
      return state.ireportsdata;
    },
 
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  