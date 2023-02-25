<template>
	<v-container fill-height fluid>
		<v-carousel
			v-model="slide"
			show-arrows-on-hover
			height="100%"
			hide-delimiters
			hide-delimiters-background>
			<v-carousel-item v-for="(item, i) in items" :key="i">
				<v-row
					no-gutters
					class="fill-height"
					align="center"
					justify="center"
					style="height: 100%">
					<v-col cols="1">
						<!-- arrow space -->
					</v-col>
					<v-col>
						<v-card>
							<v-row no-gutters>
								<v-col>
									<v-img
										class="rounded"
										src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
										height="100%"
										width="100%"></v-img>
								</v-col>
								<v-col>
									<v-card-title> title</v-card-title>
									<v-card-subtitle>2022 </v-card-subtitle>
									<v-card-text>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</v-card-text>
									<v-card-actions>
										<v-btn>1</v-btn>
										<v-btn>2</v-btn>
										<v-btn>3</v-btn>
									</v-card-actions>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
					<v-col cols="1">
						<!-- arrow space -->
					</v-col>
				</v-row>
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>

<script>
	export default {
		name: "ProjectView",

		components: {},

		data: () => ({
			slide: 0,
			items: ["First", "Second", "Third", "Fourth", "Fifth"],
			text: "test",
		}),
	};
</script>
