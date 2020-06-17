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
    async registerUser(store, RegistrationDetails) {
      try {
        let result = await apiClient.post("/register", RegistrationDetails);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("registration payload >> ", result);
        return result.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  getters: {},
};
