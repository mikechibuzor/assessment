import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/index.vue"),
      alias: "/",
    },
    {
      path: "/login",
      component: () => import("../pages/login.vue"),
    },
    {
      path: "/admin",
      component: () => import("../pages/admin.vue"),
    },
  ],
});

export default router;
