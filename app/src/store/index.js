import Vue from "vue";
import Vuex from "vuex";

import landing_page from "./modules/landing_page";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    landing_page,
  },
});
