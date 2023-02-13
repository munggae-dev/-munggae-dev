import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/timeline",
    name: "TimeLine",
    component: () => import("../views/TimeLineView.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/skill",
    name: "Skill",
    component: () => import("../views/SkillView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
