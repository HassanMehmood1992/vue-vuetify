
const state = {
    user: localStorage.getItem("user") || {}
  };
  const getters = {
    hasUser(state : any) {
      return state.localstorage !== null;
    },
    getUser(state:any) {
      return state.user;
    }
  };
  const mutations = {
    setUser(state:any, actions:any) {
      state.localstorage = actions;
    },
    unSetUser() {
      state.user = {};
      localStorage.setItem("user","") 
    }
  };
  const actions = {
   
  };
  export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
  };
  