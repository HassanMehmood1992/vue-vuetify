import Vue from 'vue'
import Vuex from 'vuex'
import register from "./localstorage";
Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    register
  },
  strict: false 
});
