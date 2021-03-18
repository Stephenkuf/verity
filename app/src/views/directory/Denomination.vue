<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All Denominations'"
      :sub_title="'View all denominations in the system'"
    />
    <section class="row mx-0 pb-1 pt-0 px-0">
      <div
        class="col-6 col-md-4 mb-4 pt-0 px-0"
        v-for="(each_data, k) in data_array"
        :key="k"
      >
        <div
          class="p-3 c-co-card mr-3 c-card-direc-deno"
          @click="
            $router.push(
              `/account/dashboard/directory-event-locator/branch/${each_data.id}`
            )
          "
          style="cursor: pointer;"
        >
          <div class="row">
            <div class="col-3 c-center-content">
              <span class="fa fa-home c-fa"></span>
            </div>
            <div class="col-9 px-3 c-deno-border">
              <p
                class="mb-2"
                style="font-weight: bold; text-transform: uppercase; font-size: 95%;"
              >
                {{ each_data.denomination_name }}
              </p>
              <p class="mb-0 c-directory-deno-sub">
                {{ each_data.__meta__.branches_count }} Branches
              </p>
              <p class="mb-0 c-directory-deno-sub">
                {{ each_data.__meta__.members_count }} Members
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
  name: "DirectoryDenomination",
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
    async get_denomination() {
      try {
        const get_denomination = await this.$store.dispatch(
          "directory_event_locator/allDenomination"
        );
        console.log("get_denomination >> ", get_denomination);
        this.$store.state.church_organisation.all_request =
          get_denomination.data;
        this.data_array = get_denomination.data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.get_denomination();
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
<style scoped>
.c-card-direc-deno:hover {
  background: #0f6291;
  color: white;
}
.c-card-direc-deno:hover .c-directory-deno-sub {
  color: white;
}
.c-card-direc-deno:hover .c-deno-border {
  border-left: 2px solid white;
}
.c-card-direc-deno:hover .c-fa {
  color: white;
}
</style>
