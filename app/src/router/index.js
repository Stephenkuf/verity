import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";

import Index from "@/views/pages/Index.vue";

// account routes
import Account from "@/components/includes/AccountWrapper.vue";
import Landing from "@/views/account/Landing.vue";
import Profile from "@/views/account/Profile.vue";
import Messages from "@/views/account/Messages.vue";

//church organisation platform
import BeliversNetworkDashboard from "@/views/account/Dashboard";
import ChurchOrganisationDashboard from "@/views/account/ChurchOrganisationDashboard";

// church organisation pages
import ChurchEmails from "@/views/churchOrganisation/Emails";
import NewRequest from "@/views/churchOrganisation/NewRequest";
import AcceptedRequest from "@/views/churchOrganisation/AcceptedRequest";
import RejectedRequest from "@/views/churchOrganisation/RejectedRequest";

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
        children: [
          {
            path: "",
            component: ChurchEmails,
            name: "ChurchEmail",
            meta: {
              title: "Variety - Emails",
              group: "Dashboard",
            },
          },
          {
            path: "incoming-request",
            component: NewRequest,
            name: "NewRequest",
            meta: {
              title: "Variety - New Request",
              group: "Dashboard",
            },
          },
          {
            path: "accepted-request",
            component: AcceptedRequest,
            name: "AcceptedRequest",
            meta: {
              title: "Variety - Accepted Request",
              group: "Dashboard",
            },
          },
          {
            path: "rejected-request",
            component: RejectedRequest,
            name: "RejectedRequest",
            meta: {
              title: "Variety - Rejected Request",
              group: "Dashboard",
            },
          },
        ],
      },
      {
        path: "profile",
        component: Profile,
        name: "Profile",
        meta: {
          title: "Variety - profile",
          group: "Dashboard",
        },
      },
      {
        path: "messages",
        component: Messages,
        name: "Messages",
        meta: {
          title: "Variety - messages",
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
