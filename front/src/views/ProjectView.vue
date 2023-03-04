<template>
	<v-container fill-height fluid>
		<v-carousel
			v-model="slide"
			:show-arrows-on-hover="windowWidth > 600"
			:show-arrows="windowWidth > 600"
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
						<v-row no-gutters fill-height>
							<!-- src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" -->
							<v-col
								style="
									overflow: hidden;
									height: 500px;
									display: flex;
									align-items: center;
									justify-content: center;
								">
								<img class="rounded" :src="item?.preview" height="100%" />
							</v-col>
							<v-col>
								<v-card min-height="500px">
									<v-card-title> {{ item?.title }}</v-card-title>
									<v-card-subtitle>{{ item?.subtitle }} </v-card-subtitle>
									<v-card-text>
										{{ item?.text }}
										<ul>
											<li>사용기술: {{ item?.techs }}</li>
											<li>개발인력: {{ item?.manpower }}</li>
											<li>역할: {{ item?.role }}</li>
											<li>개발기여도: {{ item?.contribution }}%</li>
										</ul>
									</v-card-text>
									<v-card-actions>
										<!-- github link btn -->
										<v-btn
											v-if="item?.github"
											color="primary"
											text
											@click="
												() => {
													window.open(item?.github);
												}
											">
											<v-icon left>mdi-github</v-icon>
											Github
										</v-btn>
										<!-- demo link btn -->
										<v-btn
											v-if="item?.demo"
											color="primary"
											text
											@click="demo(item?.demo)">
											<v-icon left>mdi-web</v-icon>
											Demo
										</v-btn>
										<!-- etc link btn -->
										<v-btn
											v-if="item?.etc?.name && item?.etc.url"
											color="primary"
											text
											@click="
												() => {
													window.open(item?.etc?.url);
												}
											">
											<v-icon left>mdi-link</v-icon>
											{{ item?.etc?.name }}
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-col>
						</v-row>
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
			items: [
				{
					title: "Foryourpet",
					subtitle: "2022.10 ~ 2023.01",
					text: "반려동물 기르는 사람들을 위한 장례 서비스 중개 플랫폼, 웹앱 서비스로 기획 되었으며 위치기반 서비스를 제공하고 운영자, 입점사에 자동으로 알림 메세지를 보내도록 구현",
					manpower: "1명",
					role: "전체 설계 및 개발,프론트엔드, 백엔드, 클라우드 서버 구축",
					techs:
						"Vue.js, Vuetify,FastApi, MySQL, AWS EC2, AWS RDS, AWS S3, Nginx, Git",
					contribution: 100,
					github: "",
					demo: "",
					preview: require("@/assets/project/foryourpet.png"),
					etc: {
						name: "live",
						url: "https://www.foryourpet.co.kr/",
					},
				},
				{
					title: "Metapage",
					subtitle: "2022.09 ~ 2022.11",
					text: "AR 모델링 기술을 활용한 웹 PR 페이지 제작 서비스",
					manpower: "2명",
					role: "AR 기능 구현 및 프론트 엔드, 리소스 서빙 개발",
					techs: "Vue.js, Vuetify, View3D, AWS S3, Nginx, Git",
					contribution: 90,
					github: "https://github.com/munggae-dev/view3d",
					demo: "",
					preview: require("@/assets/project/metapage.png"),
					etc: {
						name: "",
						url: "",
					},
				},
				{
					title: "Metapet",
					subtitle: "2022.05 ~ 2022.08",
					text: "반려동물 NFT 마켓 플레이스, NFT를 발행하고 거래할 수 있는 플랫폼으로 클레이튼 기반 NFT 민팅 및 거래 서비스를 제공",
					manpower: "2명",
					role: "프론트 엔드, 백엔드 개발",
					techs: "Vue.js, Vuetify, FastApi, MySQL, KAS",
					contribution: 70,
					github: "",
					demo: "",
					preview: require("@/assets/project/no_image.png"),
					etc: {
						name: "",
						url: "",
					},
				},
				{
					title: "Epikar OCR",
					subtitle: "2021.01 ~ 2022.02",
					text: "문서 이미지에서 텍스트를 추출하는 OCR 서비스, 다양한 문서를 템플릿 별로 분류하고 해당 문서로부터 영문 한글 숫자 데이터를 추출하는 서비스",
					manpower: "1명",
					role: "OCR 서비스 연구 및 개발, 자체 엔진 개발, 전처리 프로세스 개발 및 테스트, 외부 api 연동, 서버 구축, 테스트 페이지 배포",
					techs:
						"Vue.js, Flask, OpenCV, YOLO, Tesseract, NCP Vision api, Tensorflow, Tensorflow lite, MySQL, AWS S3, Nginx, SVN",
					contribution: 100,
					github: "",
					demo: "",
					preview: require("@/assets/project/no_image.png"),
					etc: {
						name: "",
						url: "",
					},
				},
				{
					title: "논두러닝",
				},
				{
					title: "D.O.T",
				},
			],
			tmp: [],
			text: "test",
			windowWidth: 0,
		}),
		methods: {
			handleResize() {
				this.windowWidth = window.innerWidth;
			},
			demo(url) {
				window.open(url);
			},
		},

		mounted() {
			this.windowWidth = window.innerWidth;
			window.addEventListener("resize", this.handleResize);
		},
		unmounted() {
			window.removeEventListener("resize", this.handleResize);
		},
	};
</script>
