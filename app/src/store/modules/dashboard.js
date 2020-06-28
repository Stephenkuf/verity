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
        console.log("create post payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async viewPosts() {
      try {
        let result = await apiClient.get("/ViewTimelinePosts");
        console.log("view post >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
