import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    accounts: [],
    token: "",
    user: {},
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken(store, payload) {
      // console.log(payload)
      localStorage.setItem("V-token", payload);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
    },
    setUser(store, payload) {
      // console.log(payload)
      localStorage.setItem("V-user", JSON.stringify(payload));
    },
    async registerUser(store, RegistrationDetails) {
      try {
        let result = await apiClient.post("/register", RegistrationDetails);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("registration payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async createDenomination(store, Details) {
      try {
        let result = await apiClient.post("/registerDenomination", Details);
        console.log("create denomina payload >> ", result);
        return result.data;
      } catch (error) {
        throw error.response;
      }
    },
    async loginUser(store, Details) {
      try {
        let result = await apiClient.post("/login", Details);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("login payload >> ", result);
        if (result.data) {
          store.dispatch("setUser", result.data.result[0]);
          store.dispatch("setToken", result.data.result[1].token);
        }

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
  getters: {},
};
