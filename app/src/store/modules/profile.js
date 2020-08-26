import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {},
  actions: {
    async viewUserPosts() {
      try {
        let result = await apiClient.get("/GetUserPosts");
        console.log("view my post >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
