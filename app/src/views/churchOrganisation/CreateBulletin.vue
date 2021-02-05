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
                v-model="bulletin.bulletin_subject"
              />
              <template v-if="$v.bulletin.bulletin_subject.$error">
              <small
                  v-if="!$v.bulletin.bulletin_subject.required"
                  class="text-danger"
                  >Resource type is required</small
                >
              </template>
            </div>
          </div>
          <div class="form-group">
            <label for="bulletin_body" class="c-label">Bulletin Body</label>
            <textarea
              class="form-control"
              id="bulletin_body"
              rows="5"
              placeholder="Enter Bulletin Body"
              v-model="bulletin.bulletin_body"
            ></textarea>
            <template v-if="$v.bulletin.bulletin_body.$error">
              <small
                  v-if="!$v.bulletin.bulletin_body.required"
                  class="text-danger"
                  >Resource type is required</small
                >
              </template>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="bulletin_type" class="c-label">Bulletin Type</label>
              <select
                class="form-control"
                style="height: 3rem;"
                id="bulletin_type"
                v-model="bulletin.bulletin_type"
              >
                <option value="denomination" selected>Denomination</option>
                <option value="branch">Branch</option>
              </select>
              <template v-if="$v.bulletin.bulletin_type.$error">
              <small
                  v-if="!$v.bulletin.bulletin_type.required"
                  class="text-danger"
                  >Resource type is required</small
                >
              </template>
            </div>
          </div>
          <div class="form-row" v-if="bulletin.bulletin_type == 'branch'">
            <div class="form-group col-md-12">
              <label for="branch_id" class="c-label">Select A Branch</label>
              <v-select
                    class="v-select form-control "
                    v-model="bulletin.branch_id"
                    placeholder="Branch List"
                    name="branch"
                    label="branch_name"
                    :options="branch_list"
                  ></v-select>
            </div>
          </div>
          <div style="margin-top: 2.5rem">
            <button class="btn-lg btn-primary" @click.prevent="createBulletin">Create Bulletin</button>
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
  name: "CreateBulletin",
  components: {
    appChurchOrganizationHeader,
  },
  mixins: [notifications],
  data(){
    return{
      bulletin: {
        bulletin_subject: "",
        bulletin_type: "denomination",
        bulletin_body: "",
        branch_id: "",
      },
      denomination_list: [],
      branch_list: []
    }
  },
  validations: {
    bulletin: {
      bulletin_subject: {
        required,
      },
      bulletin_type: {
        required,
      },
      bulletin_body: {
        required,
      },
    },
  },
  methods: {
    async createBulletin(){
        try{

        this.$v.bulletin.$touch();
        if (this.$v.bulletin.$invalid) {
          return;
        }
        Nprogress.start();

          console.log("dhhdh >> ", this.bulletin)
          let formData = new FormData();
          // formData.append('file', this.file);
          formData.append('bulletin_subject', this.bulletin.bulletin_subject)
          formData.append('bulletin_type', this.bulletin.bulletin_type)
          formData.append('bulletin_body', this.bulletin.bulletin_body)
          formData.append('branch_id', this.bulletin.branch_id.id)
          console.log(formData)

          const data = await this.$store.dispatch(
          "church_organisation/createBulletin",
          formData
        );
        console.log("get send bulletin response >> ", data);
        this.showSuccessNotification(data.message);

         this.bulletin.bulletin_subject = ""
         this.bulletin.bulletin_type = "denomination"
         this.bulletin.bulletin_body = ""
         this.bulletin.branch_id = ""
        
        Nprogress.done();
        this.is_processing = false;
        }catch(error){
          console.log(error)
          this.showErrorNotification(error.data.message);
        // this.is_processing = false;
        Nprogress.done();
        }
      }
  },
  async mounted(){
    const get_meta_data = await this.$store.dispatch("getMetaData");
    this.denomination_list = get_meta_data.result.denomination;
    this.branch_list = get_meta_data.result.branch;
  }
};
</script>

<style></style>
