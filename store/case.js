const state = () => ({
    showLoader: Boolean,
    billsperday: [],
    transactionsperday: [],
    case: [],
    repo:'',
    transactionsummation: {}
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
    }

  }
  
  const actions = {
  
    async retrieve_case({ commit }) {
      commit("CASE");
      await this.$api.$get('/api/v1/cases/')
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
      await this.$api.$post('/api/v1/cases/',payload)
          .then(response => {
            console.log(response);
            commit('sucess')
          
        }).catch(error => {
         
          commit('error')
          console.log(error);
  
        });
    },
    
  }
  const getters = {
    listcases: function (state) {
      return state.case;
    },
    assigned: function (state) {
      return state.consultations.filter(cases => (cases.assignTo != null));
    },
    unassigned: function (state) {
      return state.consultations.filter(cases => (cases.assignTo == null));
    },
  
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  