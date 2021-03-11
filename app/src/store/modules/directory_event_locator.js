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
        let result2 = await apiClient.get("user/getDenominationLocations");
        console.log("view all denomination >> ", result);
        console.log("view all denomination >> ", result2);

        return result.data;
      } catch (error) {
        console.log("error >> ", error.response);
        throw error.response;
      }
    },
  },
};
