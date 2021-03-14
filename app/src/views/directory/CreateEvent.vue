<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Events'"
      :sub_title="'Create an event in your denomination'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form @submit.prevent="createEvent">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="eventtitle" class="c-label">Event Title</label>
              <input
                type="text"
                class="form-control c-input"
                id="eventtitle"
                v-model="event_data.event_title"
                placeholder="Event Title"
              />
              <template v-if="$v.event_data.event_title.$error">
                <small
                  v-if="!$v.event_data.event_title.required"
                  class="text-danger"
                  >Event title is required</small
                >
              </template>
            </div>
            <div class="form-group col-md-6">
              <label for="eventtheme" class="c-label">Event Theme</label>
              <input
                type="text"
                class="form-control c-input"
                id="eventtheme"
                v-model="event_data.event_theme"
                placeholder="Event Theme"
              />
              <template v-if="$v.event_data.event_theme.$error">
                <small
                  v-if="!$v.event_data.event_theme.required"
                  class="text-danger"
                  >Event theme is required</small
                >
              </template>
            </div>
          </div>
          <div class="form-group">
            <label for="EventBody" class="c-label">Event Body</label>
            <textarea
              class="form-control"
              v-model="event_data.event_body"
              id="EventBody"
              rows="4"
              placeholder="Event Body"
            ></textarea>
            <small v-if="$v.event_data.event_body.$error" class="text-danger"
              >Event body is required</small
            >
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="eventStartDate" class="c-label"
                >Event Start Date</label
              >
              <input
                type="date"
                class="form-control c-input"
                id="eventStartDate"
                v-model="event_data.event_start_date"
                placeholder="Event Start Date"
              />
              <template v-if="$v.event_data.event_start_date.$error">
                <small
                  v-if="!$v.event_data.event_start_date.required"
                  class="text-danger"
                  >Event start date is required</small
                >
              </template>
            </div>
            <div class="form-group col-md-6">
              <label for="eventEndDate" class="c-label">Event End Date</label>
              <input
                type="date"
                class="form-control c-input"
                id="eventEndDate"
                v-model="event_data.event_end_date"
                placeholder="Event End Date"
              />
              <template v-if="$v.event_data.event_end_date.$error">
                <small
                  v-if="!$v.event_data.event_end_date.required"
                  class="text-danger"
                  >Event end date is required</small
                >
              </template>
            </div>
          </div>
          <div style="margin-top: 1.5rem">
            <button class="btn-lg btn-primary" type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateEvent",
  components: {
    appChurchOrganizationHeader,
  },
  mixins: [notifications],
  data() {
    return {
      event_data: {
        event_title: "",
        event_theme: "",
        event_body: "",
        event_start_date: "",
        event_end_date: "",
      },
      is_processing: false,
    };
  },
  validations: {
    event_data: {
      event_title: {
        required,
      },
      event_theme: {
        required,
      },
      event_body: {
        required,
      },
      event_start_date: {
        required,
      },
      event_end_date: {
        required,
      },
    },
  },
  methods: {
    async createEvent() {
      try {
        this.is_processing = true;
        console.log("Creating Event >> ", this.event_data, " >> ", this.$v);

        this.$v.event_data.$touch();
        if (this.$v.event_data.$invalid) {
          return;
        }
        Nprogress.start();
        this.event_data.url = "/denomination/createEvent";
        // this.sign_up_data.denomination = this.sign_up_data.denomination.id;
        const data = await this.$store.dispatch(
          "directory_event_locator/createEvent",
          this.event_data
        );
        // console.log('Im here');

        this.showSuccessNotification(data.message);
        console.log("get create event response >> ", data);
        this.is_processing = false;
        // location.replace("/login");
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.is_processing = false;
        Nprogress.done();
      }
    },
  },
};
</script>

<style></style>
