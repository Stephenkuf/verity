import Vue from "vue";
import Vuex from "vuex";

import { apiClient } from "@/services/api-client";

import landing_page from "./modules/landing_page";
import auth from "./modules/auth";
import dashboard from "./modules/dashboard";
import profile from "./modules/profile";
import message from "./modules/message";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async getMetaData() {
      try {
        let result = await apiClient.get("/getMetadata");
        console.log("cget meta data >> ", result);
        return result.data;
      } catch (error) {
        throw error.response;
      }
    },
  },
  modules: {
    landing_page,
    auth,
    dashboard,
    profile,
    message,
  },
});
