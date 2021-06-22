<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'Create Resource'"
      :sub_title="'create a resource for your members'"
    />
    <section class="row mx-0 py-1 px-3 c-co-card">
      <div class="col-12 my-5">
        <form @submit.prevent="createResouces()">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_topic" class="c-label">Resource Topic</label>
              <input
                type="text"
                class="form-control c-input"
                id="resource_topic"
                placeholder="Enter Resource Topic"
                v-model="resource_data.resource_title"
              />
              <template v-if="$v.resource_data.resource_title.$error">
              <small
                  v-if="!$v.resource_data.resource_title.required"
                  class="text-danger"
                  >Resource topic is required</small
                >
              </template>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_type" class="c-label">Resource Type</label>
              <select
                class="form-control"
                style="height: 3rem;"
                id="resource_type"
                v-model="resource_data.resource_type"
              >
                <option value="video" selected>Video</option>
                <option value="audio">Audio</option>
                <option value="photo">Photo</option>
                <option value="link">Link</option>
              </select>
              <template v-if="$v.resource_data.resource_type.$error">
              <small
                  v-if="!$v.resource_data.resource_type.required"
                  class="text-danger"
                  >Resource type is required</small
                >
              </template>
            </div>
          </div>
          <div class="form-group">
            <label for="content" class="c-label">Resource Content</label>
            <textarea
            v-model="resource_data.resource_body"
              class="form-control"
              id="body"
              rows="5"
              placeholder="Enter Resource Content"
            ></textarea>
            <template v-if="$v.resource_data.resource_body.$error">
            <small
                  v-if="!$v.resource_data.resource_body.required"
                  class="text-danger"
                  >Resource body is required</small
                >
            </template>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="resource_file" class="c-label">Upload File</label>
              <input
                type="file"
                ref="file"
                v-on:change="handleFileUpload()"
                class="form-control"
                style="height: 2.8rem !important;"
                id="resource_file"
              />
            </div>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary" type="submit">Create Resource</button>
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
  name: "CreateResource",
  components: {
    appChurchOrganizationHeader,
  },
  mixins: [notifications],
  data(){
    return{
      resource_data: {
        resource_title: "",
        resource_type: "",
        resource_body: "",
        resource_file: "",
      }
    }
  },
  validations: {
    resource_data: {
      resource_title: {
        required,
      },
      resource_type: {
        required,
      },
      resource_body: {
        required,
      },
    },
  },
    methods: {
      handleFileUpload(){
        this.resource_data.resource_file = this.$refs.file.files[0];
      },
      async createResouces(){
        try{

        this.$v.resource_data.$touch();
        if (this.$v.resource_data.$invalid) {
          return;
        }
        Nprogress.start();

          console.log("dhhdh >> ", this.resource_data)
          let formData = new FormData();
          // formData.append('file', this.file);
          formData.append('resource_title', this.resource_data.resource_title)
          formData.append('resource_type', this.resource_data.resource_type)
          formData.append('resource_body', this.resource_data.resource_body)
          formData.append('resource_file', this.resource_data.resource_file)
          console.log(formData)

          const data = await this.$store.dispatch(
          "church_organisation/createResponse",
          formData
        );
        console.log("get send resource response >> ", data);
        this.showSuccessNotification(data.message);

        this.resource_data.resource_title = ''
        this.resource_data.resource_type = ""
        this.resource_data.resource_body = ""
        this.resource_data.resource_file = ""
        
        Nprogress.done();
        this.is_processing = false;
        }catch(error){
          console.log(error)
          this.showErrorNotification(error);
        // this.is_processing = false;
        Nprogress.done();
        }
      }
    },  
};
</script>

<style></style>
