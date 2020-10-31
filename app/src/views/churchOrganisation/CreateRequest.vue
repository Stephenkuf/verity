<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Request'"
      :sub_title="'Send a request to deeper life bible church'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="request_topic" class="c-label">Requst Topic</label>
              <input
                type="text"
                class="form-control c-input"
                id="request_topic"
                placeholder="Enter Request Topic"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="body" class="c-label">Request Body</label>
            <textarea
              class="form-control"
              id="body"
              rows="5"
              placeholder="Enter Request Body"
            ></textarea>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary">Send Request</button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
export default {
  name: "CreateRequest",
  components: {
    appChurchOrganizationHeader,
  },
};
</script>

<style></style>
