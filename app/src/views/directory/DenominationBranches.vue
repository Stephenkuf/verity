<template>
  <section class="posts">
    <div class="d-flex justify-content-between">
      <appChurchOrganizationHeader
        :title="'Deeper Life Bible Church Branches'"
        :sub_title="
          'View all branches in deeperlife bible church registered this system'
        "
      />
      <div>
        <button
          class="btn btn-primary"
          style="background-color: #0f6291 !important;"
          @click="$router.push('/account/dashboard/directory-event-locator')"
        >
          <span class="fa fa-arrow-left"></span> Go Back
        </button>
      </div>
    </div>

    <section class="row mx-0 pb-1 pt-0 px-0">
      <div
        class="col-6 col-md-4 mb-4 pt-0 px-0"
        v-for="(each_data, k) in data_array"
        :key="k"
      >
        <div class="p-3 c-co-card mr-3 c-card-direc-deno">
          <div class="row">
            <div class="col-3 c-center-content">
              <span class="fa fa-map-marker c-fa"></span>
            </div>
            <div class="col-9 px-3 c-deno-border">
              <p
                class="mb-2"
                style="font-weight: bold; text-transform: uppercase; font-size: 95%;"
              >
                {{ each_data.branch_name }}
              </p>

              <p class="mb-0 c-directory-deno-sub">
                {{ each_data.__meta__.members_count }} Members
              </p>
              <p class="mb-0 c-directory-deno-sub">
                <small class="font-weight-bold"
                  >{{ each_data.branch_address }}, {{ each_data.branch_city }},
                  {{ each_data.branch_country }}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export default {
  name: "DirectoryDenominationBranches",
  components: {
    appChurchOrganizationHeader,
  },
  data() {
    return {
      data_array: [],
    };
  },
  mixins: [notifications],
  methods: {
    async get_denomination_branch() {
      try {
        console.log("$router >> ", this.$route.params.branch_id);
        const get_denomination_branch = await this.$store.dispatch(
          "directory_event_locator/getDenominationBranch",
          { branch_id: this.$route.params.branch_id }
        );
        console.log("get_denomination_branch >> ", get_denomination_branch);
        this.data_array = get_denomination_branch.data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.get_denomination_branch();
  },
};
</script>

<style>
.c-center-content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.c-directory-deno-sub {
  font-weight: 600;
  color: #0f6291;
  font-size: 90%;
  font-style: italic;
}
.c-deno-border {
  border-left: 2px solid #aaa;
}
.c-fa {
  color: #0f6291;
  font-size: 1.5rem;
}
</style>
