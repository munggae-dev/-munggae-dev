import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tab: 0,
  },
  getters: {
    getTab: (state) => {
      return state.tab;
    },
  },
  mutations: {
    setTab(state, tab) {
      state.tab = tab;
    },
  },
  actions: {},
  modules: {},
});
