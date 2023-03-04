<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title>
						<H2>Time Line</H2>
					</v-card-title>
					<v-card-subtitle> </v-card-subtitle>
					<v-card-text>
						<TimeLineComp></TimeLineComp>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import TimeLineComp from "@/components/timeline/TimeLineComp.vue";
	export default {
		name: "TimeLine",

		components: {
			TimeLineComp,
		},
	};
</script>
