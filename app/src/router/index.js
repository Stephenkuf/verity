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
import DirectoryEventLocator from "@/views/account/DirectoryEventLocator";

// church organisation pages
import ChurchEmails from "@/views/churchOrganisation/Emails";
import NewRequest from "@/views/churchOrganisation/NewRequest";
import CreateRequest from "@/views/churchOrganisation/CreateRequest";
import AcceptedRequest from "@/views/churchOrganisation/AcceptedRequest";
import RejectedRequest from "@/views/churchOrganisation/RejectedRequest";
import CreateResource from "@/views/churchOrganisation/CreateResource";
import CreateBulletin from "@/views/churchOrganisation/CreateBulletin";
import ViewResource from "@/views/churchOrganisation/ViewResource";
import AllBulletin from "@/views/churchOrganisation/AllBulletin";
import RegisterManager from "@/views/churchOrganisation/RegisterManager";

// directory event locator pages
import DirectoryDenomination from "@/views/directory/Denomination";
import DirectoryDenominationBranch from "@/views/directory/DenominationBranches";
import CreateEvent from "@/views/directory/CreateEvent";
import DenominationEvent from "@/views/directory/DenominationEvent";

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
          {
            path: "create-request",
            component: CreateRequest,
            name: "CreateRequest",
            meta: {
              title: "Variety - Create Request",
              group: "Dashboard",
            },
          },
          {
            path: "create-resource",
            component: CreateResource,
            name: "CreateResource",
            meta: {
              title: "Variety - Create Resource",
              group: "Dashboard",
            },
          },
          {
            path: "create-bulletin",
            component: CreateBulletin,
            name: "CreateBulletin",
            meta: {
              title: "Variety - Create Bulletin",
              group: "Dashboard",
            },
          },
          {
            path: "view-resource",
            component: ViewResource,
            name: "ViewResource",
            meta: {
              title: "Variety - View Resource",
              group: "Dashboard",
            },
          },
          {
            path: "all-bulletin",
            component: AllBulletin,
            name: "AllBulletin",
            meta: {
              title: "Variety - All Bulletin",
              group: "Dashboard",
            },
          },
          {
            path: "register-manager",
            component: RegisterManager,
            name: "RegisterManager",
            meta: {
              title: "Variety - Register Manager",
              group: "Dashboard",
            },
          },
        ],
      },
      {
        path: "dashboard/directory-event-locator",
        component: DirectoryEventLocator,
        meta: {
          title: "Variety - Directory",
          group: "Dashboard",
        },
        children: [
          {
            path: "",
            component: DirectoryDenomination,
            name: "DirectoryDenomination",
            meta: {
              title: "Variety - Denominations",
              group: "Dashboard",
            },
          },
          {
            path: "branch/:branch_id",
            component: DirectoryDenominationBranch,
            name: "DirectoryDenominationBranch",
            meta: {
              title: "Variety - Denomination Branches",
              group: "Dashboard",
            },
          },
          {
            path: "create-event",
            component: CreateEvent,
            name: "CreateEvent",
            meta: {
              title: "Variety - Create Events",
              group: "Dashboard",
            },
          },
          {
            path: "denomination-event",
            component: DenominationEvent,
            name: "DenominationEvent",
            meta: {
              title: "Variety - Denomination Events",
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
