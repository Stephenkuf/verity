import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    switch_navigation: "belivers",
  },
  actions: {
    async createPost(store, postDetails) {
      try {
        let result = await apiClient.post("/createPost", postDetails);
        // dispatch("setToken", result.data.results[0].token.token)
        console.log("create post payload >> ", result);
        // return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
