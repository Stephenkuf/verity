<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All Events'"
      :sub_title="'View all events in this system'"
    />

    <section class="row mx-0 pb-1 pt-0 px-0">
      <div
        class="col-6 col-md-4 mb-4 pt-0 px-0"
        v-for="(d_array, k) in data_array"
        :key="k"
      >
        <div
          class="px-3 py-0 c-co-card mr-3 c-card-direc-deno"
          style="border-top: 5px solid #106191; border-top-left-radius: .4rem; border-top-right-radius: .4rem;"
        >
          <div class="row ">
            <div class="col-3 p-0 d-flex justify-content-end">
              <div class="py-2 px-3 c-event-icon">
                <span class="fa fa-calendar pr-0" aria-hidden="true"></span>
              </div>
            </div>
            <div class="col-9 px-2 py-1" style="color: #777; font-size: 90%;">
              <small class="d-block text-right font-weight-bold"
                ><span>Start Date: </span>{{ d_array.event_start_date }}</small
              >
              <small class="d-block text-right font-weight-bold"
                ><span>End Date: </span>{{ d_array.event_end_date }}</small
              >
            </div>
          </div>
          <div class="row d-block px-4 mt-4 mb-4">
            <p class="c-event-title mb-0 d-block">{{ d_array.event_title }}</p>
            <small class="d-block"
              ><span class="font-weight-bold c-primary">THEME: </span>
              <span class="font-weight-bold c-primary text-capitalize">{{
                d_array.event_theme
              }}</span></small
            >
            <small>
              <span class="font-weight-bold c-primary text-capitalize"
                >(Abule Jesu - Deeperlife Bible church)</span
              ></small
            >
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
  name: "AllEvent",
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
    async get_all_events() {
      try {
        const all_events = await this.$store.dispatch(
          "directory_event_locator/allEvents"
        );
        console.log("all_events >> ", all_events);
        this.$store.state.directory_event_locator.all_events = all_events.data;
        this.data_array = all_events.data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.get_all_events();
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
.c-primary {
  color: #106191;
}
</style>
