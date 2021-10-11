import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/nt2",
    name: "Nt2",
    component: () =>
      import(/* webpackChunkName: "nt2" */ "../views/Nt2.vue"),
  },
  {
    path: "/tp2",
    name: "Tp2",
    component: () =>
      import(/* webpackChunkName: "tp2" */ "../views/Tp2.vue"),
  },
  {
    path: "/pr2",
    name: "Pr2",
    component: () =>
      import(/* webpackChunkName: "pr2" */ "../views/Pr2.vue"),
  },
  {
    path: '/alumnos/:id',
    name: 'alumnos',
    component: () =>
      import(/* webpackChunkName: "alumnos" */ "../views/Alumnos.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
