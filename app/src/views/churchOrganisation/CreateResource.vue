<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Resource'"
      :sub_title="'create a resource for your members'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_topic" class="c-label">Resource Topic</label>
              <input
                type="text"
                class="form-control c-input"
                id="resource_topic"
                placeholder="Enter Resource Topic"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_type" class="c-label">Resource Type</label>
              <select
                class="form-control"
                style="height: 3rem;"
                id="resource_type"
              >
                <option value="image" selected>Images</option>
                <option value="no-image">No Images</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="content" class="c-label">Resource Content</label>
            <textarea
              class="form-control"
              id="body"
              rows="5"
              placeholder="Enter Resource Content"
            ></textarea>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_file" class="c-label">Upload File</label>
              <input
                type="file"
                class="form-control"
                style="height: 2.8rem !important;"
                id="resource_file"
              />
            </div>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary">Create Resource</button>
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
