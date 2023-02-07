import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: () => import("../views/Home") },
    { path: "/login", component: () => import("../views/Login") },
    { path: "/register", component: () => import("../views/Register") },
  ],
});

export default router;
