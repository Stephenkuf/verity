import { apiClient } from "@/services/api-client";

export default {
  namespaced: true,
  state: {
    sidebar_active: { main: "denomination", sub: "" },
    show_reason: false,
    single_request: {},
    all_request: [],
    all_bulletin: [],
    profile: {},
  },
  actions: {
    async createEvent(store, eventDetails) {
      try {
        let result = await apiClient.post(`${eventDetails.url}`, eventDetails);
        console.log("event payload >> ", result);
        return result.data;
      } catch (error) {
        console.log("error >> ", error);
        throw error.response;
      }
    },
    async allDenomination() {
      try {
        let result = await apiClient.get("getAllLocations");
        console.log("view all denomination >> ", result);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
