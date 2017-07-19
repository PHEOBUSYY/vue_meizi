import {CATEGORY_MUTATION} from './mutation-type'
import Vue from 'vue';

export default {
        state: {
            category: 'All'
        },
        mutations: {
            [CATEGORY_MUTATION]: function (state,category) {
                Vue.set(state,'category',category);
            }
        },
        getters: {
            update2: (state) => {
                state.countA *= 100
            }
        },
        actions: {
            [CATEGORY_MUTATION]: (context,category) => {
                context.commit(CATEGORY_MUTATION,category)
            }
        }
}