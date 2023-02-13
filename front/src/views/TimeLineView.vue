<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <span>Timeline</span>
          </v-card-title>
          <v-card-subtitle>
            <span>2014 ~ 2023</span>
          </v-card-subtitle>
          <TimeLineComp></TimeLineComp>
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
