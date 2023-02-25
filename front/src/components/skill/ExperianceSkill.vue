<template>
	<v-card>
		<v-card-title>
			<div>Experiance</div>
			<v-spacer></v-spacer>
			<v-btn @click="$emit('btn')"> Skill</v-btn>
		</v-card-title>
		<v-card-subtitle> Use Experiance </v-card-subtitle>
		<v-card-text>
			<h2># Cloud</h2>
			<ExperianceComp></ExperianceComp>
			<ExperianceComp :experiance="testExp"></ExperianceComp>
		</v-card-text>
	</v-card>
</template>

<script>
	import ExperianceComp from "./experiance/ExperianceComp.vue";
	export default {
		name: "ExperianceSkill",
		components: {
			ExperianceComp,
		},
		data: () => ({
			testExp: {
				name: "Azure",
				services: ["VM", "Storage", "SQL", "Function"],
				nameColor: "#0039A9",
				color: "#3399FF",
				comments: "Bing은 최고의 검색엔진입니다.",
			},
		}),
		computed: {},
		methods: {
			test() {
				console.log("test");
			},
		},
		watch: {},
	};
</script>
