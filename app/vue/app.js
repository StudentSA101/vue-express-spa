import Vue from 'vue'
import router from './router'
import store from './data/store'
import {version} from '../../package.json';

store.subscribe((mutation, state) => {
  let store = {
    version,
    state,
  }
	localStorage.setItem('store', JSON.stringify(store));
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('session/initialiseStore');
	}
}).$mount('#app')
