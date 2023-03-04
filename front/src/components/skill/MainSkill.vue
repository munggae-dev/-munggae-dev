<template>
	<v-card>
		<v-card-title>
			<div>Skills</div>
			<v-spacer></v-spacer>
			<v-btn @click="$emit('btn')"> Experiance</v-btn>
		</v-card-title>
		<v-card-subtitle> Language and Database</v-card-subtitle>
		<v-card-text>
			<h2># Language , Framework</h2>
			<SkillComp :skill="python"></SkillComp>
			<FrameworkComp :skill="flask"></FrameworkComp>
			<FrameworkComp :skill="fastapi"></FrameworkComp>
			<SkillComp :skill="js"></SkillComp>
			<FrameworkComp :skill="vue"></FrameworkComp>
			<h2># Database</h2>
			<SkillComp :skill="mysql"></SkillComp>
			<SkillComp :skill="dynamoDb"></SkillComp>
		</v-card-text>
	</v-card>
</template>

<script>
	import SkillComp from "./SkillComp.vue";
	import FrameworkComp from "./FrameworkComp.vue";

	export default {
		name: "MainSkill",
		components: {
			SkillComp,
			FrameworkComp,
		},
		data: () => ({
			python: {
				name: "Python",
				score: 85,
				experience: "상",
				color: "blue",
			},
			flask: {
				name: "Flask",
				score: 70,
				experience: "중상",
				color: "black",
			},
			fastapi: {
				name: "FastAPI",
				score: 80,
				experience: "상",
				color: "green",
			},
			js: {
				name: "Javascript",
				score: 65,
				experience: "중",
				color: "#F0DB4F",
			},
			vue: {
				name: "Vue",
				score: 60,
				experience: "중",
				color: "#42B883",
			},
			mysql: {
				name: "MySQL",
				score: 60,
				experience: "중",
				color: "#4479A1",
			},
			dynamoDb: {
				name: "DynamoDB",
				score: 50,
				experience: "중하",
				color: "#FF9900",
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
