<template>
  <v-app-bar app color="primary" dark>
    <v-tabs
      v-model="tab"
      fixed-tabs
      background-color="var(--primary-color)"
      dark
    >
      <v-tab @click="go('HomeView')"> Main </v-tab>
      <v-tab @click="go('TimeLine')"> TimeLine </v-tab>
      <v-tab @click="go('Project')"> Project </v-tab>
      <v-tab @click="go('Skill')"> Skill </v-tab>
      <v-tab @click="go('Contact')"> Contact </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({}),
  methods: {
    go(index) {
      this.$router.replace({ name: index });
    },
  },
};
</script>
