<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Rejected Request'"
      :sub_title="'View logs pertaining to all rejected request in the system'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card" v-if="data_array && data_array.length">
      <div class="col-12 my-5">
        <appRequestTables :data="data_array" :btn_color="'btn-danger'" />
      </div>
    </section>
     <PlaceHolder :message="'requests'" :imageTitle="'nofeed.svg'" v-else>
      <p slot="placeholder-content">
        Start by creating a request
      </p>
    </PlaceHolder>
    <appViewChurchRequest />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appRequestTables from "@/components/Tables/RequestTables";
import appViewChurchRequest from "@/components/Modal/ViewChurchRequest";
import Nprogress from "nprogress";

export default {
  name: "RejectRequest",
  components: {
    appChurchOrganizationHeader,
    appRequestTables,
    appViewChurchRequest,
  },
  data() {
    return {
      data_array: [],
    };
  },
  methods: {
    async get_request() {
      try {
        const get_request = await this.$store.dispatch("church_organisation/rejectedRequest");
        console.log("get_request >> ", get_request);
        this.data_array = get_request.data.map((each_data) => {
          return {
            ...each_data,
            requests: {
              request_body: each_data.request_body,
              request_title: each_data.request_title,
            },
          };
        });
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted(){
    await this.get_request();
  }
};
</script>

<style></style>
