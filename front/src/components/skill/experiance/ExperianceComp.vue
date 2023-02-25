<template>
	<v-row
		no-gutters
		style="padding: 10px 0"
		align="center"
		justify="start"
		@click="$emit('click')">
		<v-col cols="2" align-self="center">
			<h2 :style="`color:${experiance.nameColor}`">{{ experiance.name }}</h2>
		</v-col>
		<v-col align-self="center">
			<v-chip-group readonly v-model="selected" column>
				<v-chip
					:color="experiance.color"
					dark
					v-for="tag in experiance.services"
					:key="tag">
					{{ tag }}
				</v-chip>
			</v-chip-group>
		</v-col>
		<v-col align-self="center">
			{{ experiance.comments }}
		</v-col>
	</v-row>
</template>

<script>
	export default {
		name: "ExperianceComp",
		props: {
			experiance: {
				type: Object,
				required: true,
				default: () => {
					return {
						name: "AWS",
						services: ["EC2", "S3", "RDS", "Lambda"],
						nameColor: "#000000",
						color: "#FF9900",
						comments: "의견입니다. ",
					};
				},
			},
		},
		components: {},
		data: () => ({
			selected: [],
		}),
		computed: {},
		methods: {},
		watch: {},
	};
</script>

<style scoped>
	.col {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.cwhite {
		color: white;
	}
</style>
