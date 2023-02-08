import { ElMessage } from "element-plus";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: () => import("../views/Home"), meta: {isAuth: true} },
    { path: "/login", component: () => import("../views/Login") },
    { path: "/register", component: () => import("../views/Register") },
  ],
});

router.beforeEach((to, from, next)=> {
  if (to.meta.isAuth) {
    if (localStorage.getItem("token")) {
      next()
    } else {
      ElMessage.error('please login')
    }
  } else {
    next()
  }
})

export default router;
