import Vue from 'vue';
import Vuex from 'vuex';
import meizi from './store_meizi'
import monkey from './store_monkey'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        monkey: monkey,
        meizi: meizi
    }
})