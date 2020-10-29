<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Rejected Request'"
      :sub_title="'View logs pertaining to all rejected request in the system'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <appRequestTables :data="data_array" :btn_color="'btn-danger'" />
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appRequestTables from "@/components/Tables/RequestTables";
export default {
  name: "NewRequest",
  components: {
    appChurchOrganizationHeader,
    appRequestTables,
  },
  data() {
    return {
      data_array: [
        {
          id: 2,
          subject: "Request for daily church renovation",
          created_at: "2018-11-29T02:00:00.000Z",
          user_id: 1,
        },
        {
          id: 2,
          subject: "Request for daily church renovation",
          created_at: "2018-11-29T02:00:00.000Z",
          user_id: 1,
        },
        {
          id: 2,
          subject: "Request for daily church renovation",
          created_at: "2018-11-29T02:00:00.000Z",
          user_id: 1,
        },
        {
          id: 2,
          subject: "Request for daily church renovation",
          created_at: "2018-11-29T02:00:00.000Z",
          user_id: 1,
        },
        {
          id: 2,
          subject: "Request for daily church renovation",
          created_at: "2018-11-29T02:00:00.000Z",
          user_id: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
