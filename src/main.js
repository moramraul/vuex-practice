import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
    // equivalent to data in components
    state() {
        return {
            counter: 0
        };
    },
    // equivalent to methods
    mutations: {
        increment(state) {
        state.counter++;},
        increase(state, payload) {
         state.counter = state.counter + payload.value
        }
    },
    // to run async code which mutations cant
    actions: {
        increment(context) {
            setTimeout(function() {context.commit('increment');}, 2000)},
        increase(context, payload) {
            context.commit('increase', payload)
        }
    },
    // equivalent to computed
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter > 100)
            {
                return 100
            }
            return finalCounter;
        }
    }
});
app.use(store)
app.mount('#app');
