import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    sidebar_active: { main: "mails", sub: "" },
    show_reason: false,
  },
  actions: {
    async createEmail(store, emailDetails) {
      try {
        let result = await apiClient.post("/sendEmail", emailDetails);
        console.log("email payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async createRequest(store, request_data) {
      try {
        let result = await apiClient.post("/createChurchRequest", request_data);
        console.log("request payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    // async viewUserPosts() {
    //   try {
    //     let result = await apiClient.get("/GetUserPosts");
    //     console.log("view my post >> ", result);
    //     return result.data;
    //   } catch (error) {
    //     console.log("error >> ", error.response);
    //     throw error.response;
    //   }
    // },
    // async getFriends() {
    //   try {
    //     let result = await apiClient.get("/getFriends");
    //     console.log("view my friends >> ", result);
    //     return result.data;
    //   } catch (error) {
    //     console.log("error >> ", error.response);
    //     throw error.response;
    //   }
    // },
  },
};
