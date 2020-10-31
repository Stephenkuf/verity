// import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    sidebar_active: { main: "mails", sub: "" },
    show_reason: false,
  },
  actions: {
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
