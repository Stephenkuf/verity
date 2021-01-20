<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Request'"
      :sub_title="'Send a request to deeper life bible church'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form @submit.prevent="createRequest()">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="request_topic" class="c-label">Request Topic</label>
              <input
                type="text"
                class="form-control c-input"
                id="request_topic"
                v-model="request_data.request_title"
                placeholder="Enter Request Topic"
              />
              <template v-if="$v.request_data.request_title.$error">
              <small
                  v-if="!$v.request_data.request_title.required"
                  class="text-danger"
                  >Request topic is required</small
                >
              </template>
              
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="request_topic" class="c-label">Request Type</label>

                <select class="custom-select" v-model="request_data.recipient" id="request_topic">
                  <option value="branch">Branch</option>
                  <option value="denomination">Denomination</option>
                </select>

              <template v-if="$v.request_data.recipient.$error">
              <small
                  v-if="!$v.request_data.recipient.required"
                  class="text-danger"
                  >Request type is required</small
                >
              </template>
              
            </div>
          </div>
          <div class="form-group">
            <label for="body" class="c-label">Request Body</label>
            <textarea
              class="form-control"
              id="body"
              rows="5"
              v-model="request_data.request_body"
              placeholder="Enter Request Body"
            ></textarea>
            <template v-if="$v.request_data.request_body.$error">
            <small
                  v-if="!$v.request_data.request_body.required"
                  class="text-danger"
                  >Request body is required</small
                >
            </template>
            
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary submit">Send Request</button>
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
  name: "CreateRequest",
  components: {
    appChurchOrganizationHeader,
  },
  mixins: [notifications],
  data(){
    return {
      request_data: {
        request_title: "",
        request_body: "",
        recipient: ""
      },
      is_processing: false
    }
  },
  validations: {
    request_data: {
      request_title: {
        required,
      },
      request_body: {
        required,
      },
      recipient: {
        required,
      },
    },
  },
  methods: {
    async createRequest(){
      try {
        this.is_processing = true;
        console.log("Sending Request >> ", this.request_data, " >> ", this.$v);

        this.$v.request_data.$touch();
        if (this.$v.request_data.$invalid) {
          return;
        }
        Nprogress.start();
        
        const data = await this.$store.dispatch(
          "church_organisation/createRequest",
          this.request_data
        );

        this.showSuccessNotification(data.message);
        console.log("get send email response >> ");
        Nprogress.done();
        this.is_processing = false;
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.is_processing = false;
        Nprogress.done();
      }
    }
  }
};
</script>

<style></style>
