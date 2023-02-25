<template>
	<v-card>
		<v-card-title>
			<div>Skills</div>
			<v-spacer></v-spacer>
			<v-btn @click="$emit('btn')"> Experiance</v-btn>
		</v-card-title>
		<v-card-subtitle> Language and Database</v-card-subtitle>
		<v-card-text>
			<h2># Language</h2>
			<SkillComp @click="test"></SkillComp>
			<FrameworkComp @click="test"></FrameworkComp>
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
		data: () => ({}),
		computed: {},
		methods: {
			test() {
				console.log("test");
			},
		},
		watch: {},
	};
</script>
