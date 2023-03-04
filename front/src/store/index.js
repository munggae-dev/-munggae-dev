import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tab: 0,
		headerShow: true,
		backgroundColor: "#fff",
	},
	getters: {
		getTab: (state) => {
			return state.tab;
		},
		getHeaderShow: (state) => {
			return state.headerShow;
		},
		getBackgroundColor: (state) => {
			return state.backgroundColor;
		},
	},
	mutations: {
		setTab: (state, tab) => {
			state.tab = tab;
		},
		setHeaderShow(state, headerShow) {
			state.headerShow = headerShow;
		},
		setBackgroundColor(state, backgroundColor) {
			state.backgroundColor = backgroundColor;
		},
	},
	actions: {},
	modules: {},
});
