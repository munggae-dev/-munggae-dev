<template>
	<v-app>
		<AppBar></AppBar>
		<v-main id="main">
			<v-container style="padding: 0" fill-height fluid>
				<v-fade-transition hide-on-leave>
					<router-view />
				</v-fade-transition>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import { mapGetters } from "vuex";
	import AppBar from "./components/AppBar.vue";

	export default {
		name: "App",
		components: {
			AppBar,
		},
		data: () => ({
			background: null,
			backgroundTracer: null,
		}),
		computed: {
			...mapGetters(["getBackgroundColor"]),
		},
		mounted() {
			// this.background = document.getElementById("main");
			// // set background color smoothly and trace store value change color
			// this.backgroundTracer = this.$watch(
			// 	"getBackgroundColor",
			// 	(newVal, oldVal) => {
			// 		if (newVal !== oldVal) {
			// 			console.log("change color");
			// 			this.background.style.backgroundColor = newVal;
			// 		}
			// 	}
			// );
		},
		methods: {},
		watch: {},
	};
</script>

<style>
	@import "../src/assets/style.css";
	/* main background image  */
	#main {
		background-image: url("@/assets/technology-gae5692b01_1920.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
