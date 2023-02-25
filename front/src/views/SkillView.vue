<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<v-col>
				<MainSkill></MainSkill>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import MainSkill from "@/components/skill/MainSkill.vue";

	export default {
		name: "SkillView",

		components: { MainSkill },
	};
</script>
