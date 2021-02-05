import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    sidebar_active: { main: "mails", sub: "" },
    show_reason: false,
    single_request: {},
    all_request: [],
    all_bulletin: [],
    profile: {},
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
    async createRegister(store, request_data) {
      try {
        let result = await apiClient.post(
          "/createChurchRegister",
          request_data
        );
        console.log("request payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async createResponse(store, resource_data) {
      try {
        let result = await apiClient.post(
          "/createChurchResource",
          resource_data
        );
        console.log("request payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async createBulletin(store, resource_data) {
      try {
        let result = await apiClient.post(
          "/createChurchBulletin",
          resource_data
        );
        console.log("request payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async allRequest() {
      try {
        let result = await apiClient.get("/viewChurchRequests");
        console.log("view all request >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async getRegister() {
      try {
        let result = await apiClient.get("/viewChurchRegister");
        console.log("view all register >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },

    async allResponse() {
      try {
        let result = await apiClient.get("/viewDenominationResources");
        console.log("view all request >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async allBulletin() {
      try {
        let result = await apiClient.get("/GetChurchBulletin");
        console.log("view all bulletin >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async acceptedRequest() {
      try {
        let result = await apiClient.get("/viewAcceptedRequests");
        console.log("view accepted request >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
    async acceptChurchRequest(store, request_data) {
      try {
        let result = await apiClient.post("/acceptChurchRequest", request_data);
        console.log("accept payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async rejectChurchRequest(store, request_data) {
      try {
        let result = await apiClient.post("/rejectChurchRequest", request_data);
        console.log("accept payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async rejectedRequest() {
      try {
        let result = await apiClient.get("/viewRejectedRequests");
        console.log("reject payload >> ", result);
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
