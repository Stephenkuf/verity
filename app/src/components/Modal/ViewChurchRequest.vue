<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="ViewChurchRequestModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ViewChurchRequest"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg w-80"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header border-none py-0">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Choose a denomination</h5> -->
          <button
            ref="closeViewChurchRequestModal"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body px-4 pb-5">
          <div class="heading">
            <h3 class="f-30 c-brand font-weight-bold">
              {{
                single_request.request_title
              }}
              <span class="c-underline"></span>
            </h3>
            <p class="c-brown mt-3" style="font-size: 1rem;">
              {{
                single_request.request_body || "No Content"
              }}
            </p>
          </div>
          <div v-if="!show_reason">
            <button
              class="btn btn-success font-weight-bold"
              @click="select_reason('acceptance')"
            >
              ACCEPT
            </button>
            <button
              class="btn btn-danger font-weight-bold"
              @click="select_reason('rejection')"
            >
              REJECT
            </button>
          </div>
          <hr v-if="show_reason" />
          <div v-if="show_reason">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="reason" class="c-label text-capitalize"
                    >Reason For {{ chosen_reason }}</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    id="reason"
                    v-model="request_reason"
                    rows="5"
                    placeholder="Enter Reason"
                  ></textarea>
                </div>
                <div class="d-flex">
                  <button
                    class="btn btn-success font-weight-bold"
                    @click.prevent="accept_or_reject_request()"
                  >
                    CONTINUE
                  </button>
                  <button
                    class="btn btn-danger font-weight-bold"
                    @click.prevent="
                      $store.state.church_organisation.show_reason = false
                    "
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
export default {
  name: "ViewChurchRequest",
  data() {
    return {
      chosen_reason: "acceptance",
      sending: false,
      request_reason: "",
    };
  },
  mixins: [notifications],
  computed: {
    single_request() {
      console.log(this.$store.state.church_organisation.single_request);
      return this.$store.state.church_organisation.single_request;
    },
    show_reason() {
      return this.$store.state.church_organisation.show_reason;
    },
  },
  methods: {
    async accept_or_reject_request() {
      try {
        this.sending = true;

        Nprogress.start();

        const data = await this.$store.dispatch(
          `church_organisation/${
            this.chosen_reason == "acceptance"
              ? "acceptChurchRequest"
              : "rejectChurchRequest"
          }`,
          { reason: this.request_reason, request_id: this.single_request.id }
        );
        // console.log('Im here');

        this.showSuccessNotification(data.message);
        console.log("get send accept request response >> ", data);
        this.sending = false;
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.sending = false;
        Nprogress.done();
      }
    },
    select_reason(param) {
      this.$store.state.church_organisation.show_reason = true;
      this.chosen_reason = param;
    },
  },
};
</script>

<style>
.c-underline {
  display: block;
  width: 5rem;
  height: 0.4rem;
  background: #08587d;
  border-radius: 5px;
  margin-top: 0.6rem;
}
</style>
