const state = () => ({
  showLoader: Boolean,
    cas:{},
    case: [],
    assigned: [],
    unassigned: [],
  
  });
  
  const mutations = {
    /**Fetch Case */
  
    ["CASE"](state) {
      state.showLoader = true;
    },
    
    ["CASE_SUCCESS"](state,response) {
        state.showLoader = true;
        state.case = response.data;
      },    
    ["sucess"](state) {
      state.repo = "sucessed";
  },

    ["error"](state) {
      state.repo = "failed";
    },


    /** Fetch cases assiged  */

    ["ASSIGNED"](state) {
      state.showLoader = true;
    },

    ["ASSIGNED_SUCCESS"](state, response) {
      state.showLoader = true;
      state.assigned = response.data;
    },

    ["UNASSIGNED"](state) {
      state.showLoader = true;
      
    },
    ["UNASSIGNED_SUCCESS"](state, response) {
      state.showLoader = true;
      state.unassigned = response.data;
    },
    
  }
  
  const actions = {
  
    async retrieve_case({ commit }) {
      commit("CASE");
      await this.$api.$get('api/v1/cases/')
          .then(response => {
              console.log(response.data);
          commit("CASE_SUCCESS", response);
        }).catch(error => {
         
          console.log(error);
  
        });
    },
    
  
    async post_case({ commit },payload) {
      commit("CASE");

      console.log("sadas");
      await this.$api.$post('api/v1/cases/',payload)
          .then(response => {
            console.log(response);
            commit('sucess')
        }).catch(error => {  
          commit('error')
          console.log(error);
        });
    },

    async retrieve_assigned({ commit }) {
      commit("ASSIGNED");
      await this.$api.$get('api/v1/cases?isAssigned=false')
          .then(response => {
              console.log(response.data);
          commit("ASSIGNED_SUCCESS", response);
        }).catch(error => {
          console.log(error)
        });
    },
    

    async retrieve_unassigned({ commit }) {
      commit("CASE");
      await this.$api.$get('api/v1/cases?isAssigned=false')
          .then(response => {
              console.log(response.data);
          commit("CASE_SUCCESS", response);
        }).catch(error => {
          console.log(error);
        });
    },
  }

  const getters = {
    listcases: function (state) {
      return state.case;
    },

    cas: (state) => (id) => {
      return state.case.find(cas => cas.id == id)
    },

    assignedlist: function (state) {
      return state.case;
    },

    unassignedlist: function (state) {
      return state.case;
    },
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  