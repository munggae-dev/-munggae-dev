<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
@import "../src/assets/style.css";
</style>
