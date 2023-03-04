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
			<ExperianceComp :experiance="aws"></ExperianceComp>
			<ExperianceComp :experiance="gcp"></ExperianceComp>
			<ExperianceComp :experiance="ncp"></ExperianceComp>
			<h2># AI</h2>
			<ExperianceComp :experiance="tensorflow"></ExperianceComp>
			<ExperianceComp :experiance="yolo"></ExperianceComp>
			<ExperianceComp :experiance="opencv"></ExperianceComp>
			<ExperianceComp :experiance="tesseract"></ExperianceComp>
			<h2># ETC</h2>
			<ExperianceComp :experiance="kakao"></ExperianceComp>
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
			aws: {
				name: "AWS",
				services: ["EC2", "S3", "RDS", "Lambda", "DynamoDB"],
				color: "#FF9900",
				nameColor: "#1C1919",
				comments: "컴퓨팅 및 서버리스 환경 구현.",
			},
			gcp: {
				name: "GCP",
				services: [
					"Compute Engine",
					"Google Map",
					"Firebase",
					"Google Cloud Vision",
				],
				color: "#4285F4",
				nameColor: "gray",
				comments: "컴퓨팅 및 파이어 베이스인증 연동, 구글 맵, 비전등 api 사용.",
			},
			ncp: {
				name: "NCP(Naver)",
				services: ["Compute Engine", "Naver Cloud Vision"],
				color: "#2DB400",
				nameColor: "#2DB400",
				comments: "컴퓨팅 및 OCR api 활용.",
			},
			tensorflow: {
				name: "Tensorflow",
				services: ["tensorflow.js", "tensorflow lite", "CNN", "Keras"],
				color: "#FF6F00",
				nameColor: "gray",
				comments: "딥러닝 모델 구현. 최적화 및 엣지 머신, 모바일 환경 서빙",
			},
			yolo: {
				name: "YOLO",
				services: ["YOLOv3", "YOLOv4"],
				color: "#000000",
				nameColor: "gray",
				comments: "모델 학습 및 서비스 구성",
			},
			opencv: {
				name: "OpenCV",
				services: ["horizontal, vertical, diagonal line detection", "etc"],
				color: "#5C3EE8",
				nameColor: "gray",
				comments: "이미지 전후처리 및 딥러닝 학습용 데이터셋 구성",
			},
			tesseract: {
				name: "Tesseract",
				services: ["OCR"],
				color: "#000000",
				nameColor: "gray",
				comments: "OCR 한글 데이터 학습 및 서비스 구성",
			},
			kakao: {
				name: "Kakao",
				services: ["Kakao Map", "Kakao api", "Kakao message"],
				color: "#FFE812",
				nameColor: "#000000",
				comments: "지도, 로그인, 메세지 api 사용",
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
