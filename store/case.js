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
          //console.log(error);
  
        });
    },
    
  }
  const getters = {
    transactionsperday: function (state) {
      return state.transactionsperday;
    },
    listcases: function (state) {
      return state.case;
    },
    kdshjfhds: function ()
    {
      return state.repo;
  },
    billsummation: function (state) {
      return state.billsummation;
    },
    transactionsummation: function (state) {
      return state.transactionsummation;
    }
  }
  
  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
  }
  