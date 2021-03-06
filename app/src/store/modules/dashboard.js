import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    switch_navigation: "belivers",
    profile: {},
    third_panel: "initial",
    all_users: [],
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
    async createGroup(store, groupDetails) {
      try {
        let result = await apiClient.post("/createGroup", groupDetails);
        console.log("create group payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async followUser(store, user_id) {
      try {
        let result = await apiClient.post("/followUser", user_id);
        console.log("follow user >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async joinGroup(store, group_id) {
      try {
        let result = await apiClient.post(`/joinGroup/${group_id}`);
        console.log("join group >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async viewDenominationPosts() {
      try {
        let result = await apiClient.get("/ViewDenominationTimeline");
        console.log("view denomination post >> ", result);

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
    async viewGroupPosts(group_id) {
      try {
        let result = await apiClient.get(`/createGroupPost/${group_id}`);
        console.log("view denomination post >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async allUsers() {
      try {
        let result = await apiClient.get("/getAllUsers");
        console.log("view all users >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getFollowing() {
      try {
        let result = await apiClient.get("/getFollowing");
        console.log("view following >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getFollowers() {
      try {
        let result = await apiClient.get("/getFollowers");
        console.log("view followers >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getDenominationWhoToFollow() {
      try {
        let result = await apiClient.get("/whoToFollowDenomination");
        console.log("view deno people to follow >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getPeopleToFollow() {
      try {
        let result = await apiClient.get("/whoToFollow");
        console.log("view people to follow >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getNonJoinedGroup() {
      try {
        let result = await apiClient.get("/nonJoinedGroups");
        console.log("view group to join >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getDenominationGroups() {
      try {
        let result = await apiClient.get("/ViewDenominationGroups");
        console.log("view deno group to join >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async myGroups() {
      try {
        let result = await apiClient.get("/joinedGroups");
        console.log("view my group >> ", result);

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
