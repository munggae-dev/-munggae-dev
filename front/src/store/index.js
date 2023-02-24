import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tab: 0,
		headerShow: true,
	},
	getters: {
		getTab: (state) => {
			return state.tab;
		},
		getHeaderShow: (state) => {
			return state.headerShow;
		},
	},
	mutations: {
		setTab: (state, tab) => {
			state.tab = tab;
		},
		setHeaderShow(state, headerShow) {
			state.headerShow = headerShow;
		},
	},
	actions: {},
	modules: {},
});
