import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { apiClient } from "@/services/api-client";

// 3rd party packages
import Vuelidate from "vuelidate";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import Loader from "@/components/UI/Loader";

// globalcomponents
import PlaceHolder from "@/components/UI/PlaceHolder.vue";

Vue.component("PlaceHolder", PlaceHolder);

// Registering Plugins
Vue.use(Vuelidate);
Vue.use(VueIziToast);
Vue.use(require("vue-moment"));

//regixtered component
Vue.component("v-select", vSelect);
Vue.component("Loader", Loader);

router.beforeEach((to, from, next) => {
  Nprogress.start();
  if (localStorage.getItem("V-token")) {
    let token = localStorage.getItem("V-token");
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  if (localStorage.getItem("V-token")) {
    if (!localStorage.getItem("V-user")) {
      localStorage.removeItem("V-token");
      localStorage.removeItem("V-user");
    }
  }
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
