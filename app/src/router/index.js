import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

import Index from "../views/pages/Index.vue";

// account routes
import Account from "../components/includes/AccountWrapper.vue";
import Landing from "../views/account/Landing.vue";

//church organisation platform
import BeliversNetworkDashboard from "@/views/account/Dashboard";
import ChurchOrganisationDashboard from "@/views/account/ChurchOrganisationDashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/account",
    name: "Account",
    component: Account,
    children: [
      {
        path: "",
        component: Landing,
        name: "Landing",
        meta: {
          title: "Variety - Account",
        },
      },
      {
        path: "dashboard/belivers-network",
        component: BeliversNetworkDashboard,
        name: "BeliversNetworkDashboard",
        meta: {
          title: "Variety - Dashboard",
          group: "Dashboard",
        },
      },
      {
        path: "dashboard/church-organisation",
        component: ChurchOrganisationDashboard,
        name: "ChurchOrganisationDashboard",
        meta: {
          title: "Variety - Dashboard",
          group: "Dashboard",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
