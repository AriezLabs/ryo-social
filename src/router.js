import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/complaints",
      name: "complaints",
      component: () =>
          import("./views/Complaints.vue")
    },
    {
      path: "/coc",
      name: "coc",
      component: () =>
          import("./views/Coc.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
