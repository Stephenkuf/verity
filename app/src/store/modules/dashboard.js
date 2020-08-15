import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    switch_navigation: "belivers",
    profile: {},
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
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
    async sendComment(store, commentDetails) {
      try {
        let result = await apiClient.post("/commentPost", commentDetails);
        console.log("create comment payload >> ", result);
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
    async viewProfile(store) {
      try {
        let result = await apiClient.get("/getUserProfile");
        console.log("view profile >> ", result);
        if (result.data) {
          store.commit("SET_PROFILE", result.data.result[0]);
        }
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async likePosts(store, likeDetails) {
      try {
        let result = await apiClient.post("/likePost", likeDetails);
        console.log("like post >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
