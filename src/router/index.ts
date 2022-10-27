import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: '/menu',
          name: 'menu',
          component: () => import("../views/menu/MenuPage.vue"),
        },
        {
          path: '/powerList',
          name: 'powerList',
          component: () => import("../views/power/PowerList.vue"),
        },
        {
          path: '/roleList',
          name: 'roleList',
          component: () => import("../views/power/RoleList.vue"),
        },
        {
          path: '/userList',
          name: 'userList',
          component: () => import("../views/power/UserList.vue"),
        },
        {
          path: '/createPower',
          name: 'createPower',
          component: () => import("../views/power/CreatePower.vue"),
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/login/LoginView.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../views/login/Register.vue"),
    },
  ],
});

export default router;
