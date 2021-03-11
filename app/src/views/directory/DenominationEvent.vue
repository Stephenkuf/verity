<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Deeper Life Bible Church Events'"
      :sub_title="
        'View all events in deeperlife bible church registered in this system'
      "
    />

    <section class="row mx-0 pb-1 pt-0 px-0">
      <div class="col-6 col-md-4 mb-4 pt-0 px-0" v-for="(i, k) in 8" :key="k">
        <div
          class="px-3 py-0 c-co-card mr-3 c-card-direc-deno"
          style="border-top: 5px solid #106191; border-top-left-radius: .4rem; border-top-right-radius: .4rem;"
        >
          <div class="row">
            <div class="col-3 p-0 d-flex justify-content-end">
              <div class="py-2 px-3 c-event-icon">
                <span class="fa fa-calendar pr-0" aria-hidden="true"></span>
              </div>
            </div>
            <div class="col-9"></div>
          </div>
          <div class="row px-4 mt-3">
            <p class="c-event-title ">Convenant Sunday</p>
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
  name: "DenominationEvent",
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
    // await this.get_denomination();
  },
};
</script>

<style>
.c-event-icon {
  background: #0f6291;
  color: white;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.c-event-title {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
