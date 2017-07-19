import Vue from 'vue';
import Vuex from 'vuex';
import {NUMBER_MUTATION} from './mutation-type'
Vue.use(Vuex);

const moudleA = {
    state: {
        countA: 10
    },
    mutations: {
        [NUMBER_MUTATION] (state) {
            state.countA++;
        },
    }
};

const moudleB = {
    state: {
        countB: 20
    },
    mutations: {
        [NUMBER_MUTATION] (state) {
            state.countB++;
        },
    }
};


export default new Vuex.Store({
    modules: {
        a: moudleA,
        b: moudleB
    }
    // state: {
    //     count: 1
    // },
    // mutations: {
    //     [NUMBER_MUTATION] (state) {
    //         state.count++;
    //     },
    //     increment2 (state, payload){
    //         state.count += payload.name;
    //     }
    // },
    // getters: {
    //     updateCount: state => {
    //         return state.count * 100;
    //     },
    //     toMakeToast: (state, getters) => {
    //         return getters.updateCount + "hahahaha";
    //     }
    // },
    // actions: {
    //     [NUMBER_MUTATION] ({commit}) {
    //         setTimeout(() => {
    //             commit(NUMBER_MUTATION);
    //         },1500);
    //
    //     }
    // }
})