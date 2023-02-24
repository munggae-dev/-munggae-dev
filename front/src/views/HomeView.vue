<template>
	<v-img
		:width="mainWidth"
		:height="mainHeight"
		src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
		<div
			class="d-flex flex-column fill-height justify-center align-center text-white">
			<h1 class="mainheading">안태승</h1>
			<h4 class="subheading">Programing with Ai!</h4>
			<h4 class="subheading">Programing with Ai!</h4>
		</div>
	</v-img>
</template>

<script>
	import { mapMutations } from "vuex";
	export default {
		name: "HomeView",

		components: {},

		data: () => ({
			mainHeight: 0,
			mainWidth: 0,
		}),

		mounted() {
			// get window height
			this.mainHeight = window.innerHeight - 56;
			this.mainWidth = window.innerWidth;
			console.log(this.mainWidth);
		},

		unmounted() {},

		methods: {
			...mapMutations(["setHeaderShow"]),
		},
	};
</script>

<style scoped>
	.mainheading {
		font-size: 5rem;
		font-weight: 700;
		color: #fff;
	}

	.subheading {
		font-size: 2rem;
		font-weight: 400;
		color: #fff;
	}
</style>
