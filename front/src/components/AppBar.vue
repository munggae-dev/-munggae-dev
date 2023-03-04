<template>
	<v-app-bar app color="primary" dark>
		<v-tabs
			v-model="tab"
			fixed-tabs
			:background-color="colors[getTab] + ' darken-4'"
			dark>
			<v-tab @click="go('HomeView', 0)"> Main </v-tab>
			<v-tab @click="go('TimeLine', 1)"> TimeLine </v-tab>
			<v-tab @click="go('Project', 2)"> Project </v-tab>
			<v-tab @click="go('Skill', 3)"> Skill </v-tab>
			<v-tab @click="go('Contact', 4)"> Contact </v-tab>
		</v-tabs>
	</v-app-bar>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";

	export default {
		name: "AppBar",
		data: () => ({
			colors: ["navy", "green", "purple", "black", "blue"],
			backgroundColor: ["navy", "darkgreen", "purple", "black", "darkblue"],
			tab: 0,
		}),
		mounted() {
			this.setTab(this.getTab);
		},
		computed: {
			...mapGetters(["getTab"]),
		},
		methods: {
			...mapMutations(["setTab", "setBackgroundColor"]),
			go(tag, index) {
				// this.setBackgroundColor(this.backgroundColor[index]);
				this.setTab(index);
				this.$router.replace({ name: tag });
			},
		},
	};
</script>
