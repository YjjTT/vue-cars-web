import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index")
      },
      {
        path: "/safety",
        name: "Safety",
        component: () => import("../views/safety/index")
      },
      {
        path: "/password",
        name: "Password",
        component: () => import("../views/safety/password")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
