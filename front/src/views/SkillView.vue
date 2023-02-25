<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<v-col>
				<MainSkill v-if="cardFlag" @btn="cardFlag = false"></MainSkill>
				<ExperianceSkill v-else @btn="cardFlag = true"></ExperianceSkill>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import MainSkill from "@/components/skill/MainSkill.vue";
	import ExperianceSkill from "@/components/skill/ExperianceSkill.vue";

	export default {
		name: "SkillView",

		components: { MainSkill, ExperianceSkill },
		data: () => ({
			cardFlag: true,
		}),
	};
</script>
