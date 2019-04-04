import Vue from 'vue'
import Vuex from 'vuex'
import session from './tools/session';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session,
  },
})
