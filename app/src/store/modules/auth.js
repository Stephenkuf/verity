import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    accounts: [],
    token: "",
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    setToken(store, payload) {
      // console.log(payload)
      localStorage.setItem("V-token", payload);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
    },
    async registerUser(store, RegistrationDetails) {
      try {
        let result = await apiClient.post("/register", RegistrationDetails);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("registration payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
      }
    },
    async loginUser(store, RegistrationDetails) {
      try {
        let result = await apiClient.post("/login", RegistrationDetails);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("login payload >> ", result);
        if (result.data) {
          store.dispatch("setToken", result.data.result[1].token);
        }

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
      }
    },
  },
  getters: {},
};
