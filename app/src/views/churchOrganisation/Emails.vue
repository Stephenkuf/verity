<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Send Emails'"
      :sub_title="'Send electronic mails to users in and out of the system'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form @submit.prevent="createMail">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email" class="c-label">Email</label>
              <input
                type="email"
                class="form-control c-input"
                id="email"
                v-model="email_data.recipient_email"
                placeholder="Email"
              />
              <template v-if="$v.email_data.recipient_email.$error">
                <small
                  v-if="!$v.email_data.recipient_email.required"
                  class="text-danger"
                  >Reciepent email is required</small
                >
                <small
                  v-if="!$v.email_data.recipient_email.email"
                  class="text-danger"
                  >Failed email validation</small
                >
              </template>
            </div>
            <div class="form-group col-md-6">
              <label for="subject" class="c-label">Subject</label>
              <input
                type="text"
                class="form-control c-input"
                id="subject"
                v-model="email_data.email_title"
                placeholder="Your Subject"
              />
              <small v-if="$v.email_data.email_title.$error" class="text-danger"
                >Subject is required</small
              >
            </div>
          </div>
          <div class="form-group">
            <label for="message" class="c-label">Message</label>
            <textarea
              class="form-control"
              v-model="email_data.email_body"
              id="message"
              rows="5"
              placeholder="Type a message"
            ></textarea>
            <small v-if="$v.email_data.email_body.$error" class="text-danger"
              >Message is required</small
            >
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary" type="submit">Send Mail</button>
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
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ChurchEmails",
  components: {
    appChurchOrganizationHeader,
  },
  mixins: [notifications],
  data() {
    return {
      email_data: {
        recipient_email: "",
        email_title: "",
        email_body: "",
      },
      is_processing: false
    };
  },
  validations: {
    email_data: {
      recipient_email: {
        required,
        email,
      },
      email_title: {
        required,
      },
      email_body: {
        required,
      },
    },
  },
  methods: {
    async createMail(){
      try {
        this.is_processing = true;
        console.log("Sending Email >> ", this.email_data, " >> ", this.$v);

        this.$v.email_data.$touch();
        if (this.$v.email_data.$invalid) {
          return;
        }
        Nprogress.start();
        // this.sign_up_data.denomination = this.sign_up_data.denomination.id;
        const data = await this.$store.dispatch(
          "church_organisation/createEmail",
          this.email_data
        );
        // console.log('Im here');

        this.showSuccessNotification(data.message);
        console.log("get send email response >> ", data);
        this.is_processing = false;
        // location.replace("/login");
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
