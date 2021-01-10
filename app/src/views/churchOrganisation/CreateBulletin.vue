<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Bulletin'"
      :sub_title="'create a bulletin for your members'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="bulletin_topic" class="c-label">Bulletin Topic</label>
              <input
                type="text"
                class="form-control c-input"
                id="bulletin_topic"
                placeholder="Enter Bulletin Topic"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="bulletin_body" class="c-label">Bulletin Body</label>
            <textarea
              class="form-control"
              id="bulletin_body"
              rows="5"
              placeholder="Enter Bulletin Body"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="bulletin_file" class="c-label">Upload File</label>
              <input
                type="file"
                class="form-control"
                style="height: 2.8rem !important;"
                id="bulletin_file"
              />
            </div>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary">Create Bulletin</button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
export default {
  name: "CreateResource",
  components: {
    appChurchOrganizationHeader,
  },
};
</script>

<style></style>
