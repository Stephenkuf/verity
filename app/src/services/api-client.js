import axios from "axios";
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});
apiClient.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response;
  },
  (error) => {
    console.log("show error. response >> ", error.response.data.error.message);
    if (error.response) {
      notifications.showErrorNotification(error.response.data.error.message);
    }
  }
);

// axios.interceptors.response.use(
//   function(response) { return response;},
//   function(error) {
//       // handle error
//       if (error.response) {
//           alert(error.response.data.message);
//       }
//   });
