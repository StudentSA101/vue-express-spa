import {version} from '../../../../package.json';
export default {
    namespaced: true,
    state: {
        version,
    },
    getters: {

    },
    mutations: {
    
        initialiseStore(state) {

            if(localStorage.getItem('store')) {
            
                let store = JSON.parse(localStorage.getItem('store'));
                    if(store.version === version) {
                        this.replaceState(
                            Object.assign(state, store)
                        );
                    } else {
                        state.version = version;
                    }	
                }
            },
    },
    actions: {

    }
}