import { createRouter, createWebHistory } from "vue-router";
import DocView from "../views/DocView.vue";
import DocListView from "../views/DocListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DocView,
    },
    {
      path: "/docs",
      name: "docs",
      component: DocListView,
    },
  ],
});

export default router;
