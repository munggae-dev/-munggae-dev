<template>
	<v-container fluid fill-height>
		<v-row style="height: 100%" align="center" justify="center">
			<v-spacer></v-spacer>
			<v-col cols="8">
				<v-card
					min-height="500px"
					style="
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					">
					<v-spacer></v-spacer>
					<v-card-title>Contact</v-card-title>
					<v-spacer></v-spacer>
					<v-card-text>
						<v-row>
							<v-col cols="12" align="center" justify="center">
								<v-icon left>mdi-account</v-icon>
								안태승, David An
							</v-col>
							<v-col cols="12" align="center" justify="center">
								<v-icon left>mdi-email</v-icon>
								{{ email }}
							</v-col>
							<v-col cols="12" align="center" justify="center">
								<v-icon left>mdi-phone</v-icon>
								+82)10 4805 9729
							</v-col>
						</v-row>
					</v-card-text>
					<v-spacer></v-spacer>

					<v-card-actions>
						<v-btn color="#3F3035" text @click="goKakaoTalk">
							<img
								style="margin: 0 10px"
								width="24px"
								height="24px"
								src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1583670517/noticon/xzi0af1nziufq16byx9m.svg" />
							Kakao Talk
						</v-btn>
						<v-btn color="#3F3035" text @click="goToGithub">
							<img
								style="margin: 0 10px"
								width="24px"
								height="24px"
								src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png" />
							Github
						</v-btn>
						<v-btn color="#3F3035" text @click="goToBlog">
							<img
								style="margin: 0 10px"
								width="24px"
								height="24px"
								src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1605925693/noticon/ydfszdnubsd0eczqffwf.png" />
							Blog
						</v-btn>
					</v-card-actions>
					<v-spacer></v-spacer>
				</v-card>
			</v-col>
			<v-spacer></v-spacer>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: "ContactView",
		data() {
			return {
				email: "nextgene95@gmail.com",
			};
		},
		methods: {
			goKakaoTalk() {
				window.open("https://open.kakao.com/o/snG19V7e");
			},
			goToGithub() {
				window.open("https://github.com/munggae-dev");
			},
			goToBlog() {
				window.open("https://hidden-loca.tistory.com/");
			},
		},
	};
</script>
