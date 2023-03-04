<template>
	<v-timeline dense>
		<v-timeline-item
			v-for="(event, i) in events"
			:key="i"
			:color="event.color"
			small>
			<template v-slot:opposite>
				<span
					:class="`headline font-weight-bold ${event.color}--text`"
					v-text="event.year"></span>
			</template>
			<div class="py-4">
				<h2 :class="`headline font-weight-light mb-4 ${event.color}--text`">
					{{ event.title }}
				</h2>
				<div>
					{{ event.description }}
				</div>
			</div>
		</v-timeline-item>
	</v-timeline>
</template>

<script>
	export default {
		data: () => ({
			events: [
				{
					color: "cyan",
					year: "2014.03",
					title: "안동대학교 입학",
					description: "전자공학교육과 14학번",
				},
				{
					color: "green",
					year: "2015.08 ~ 2017.08",
					title: "군입대",
					description: "공군병장 만기전역",
				},
				{
					color: "pink",
					year: "2020.05 ~ 2020.12",
					title: "프로젝트 기반 인공지능 과정수료",
					description: "인공지능 개발자 양성과정, 한국품질재단",
				},
				{
					color: "amber",
					year: "2021.01 ~ 2022.02",
					title: "(주)에피카 재직",
					description: "서비스 개발, OCR 서비스및 API 개발",
				},
				{
					color: "orange",
					year: "2022.05 ~ 2023.01",
					title: "Metapet 재직",
					description:
						"개발 업무 전반, 프론트 및 백엔드 개발, 서비스 설계, 개발, 운영, 유지보수",
				},
			],
		}),
	};
</script>
