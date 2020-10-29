<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Send Emails'"
      :sub_title="'Send electronic mails to users in and out of the system'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email" class="c-label">Email</label>
              <input
                type="email"
                class="form-control c-input"
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="subject" class="c-label">Subject</label>
              <input
                type="text"
                class="form-control c-input"
                id="subject"
                placeholder="Your Subject"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="message" class="c-label">Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Type a message"
            ></textarea>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary">Send Mail</button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
export default {
  name: "ChurchEmails",
  components: {
    appChurchOrganizationHeader,
  },
};
</script>

<style></style>
