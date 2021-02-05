<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All resources'"
      :sub_title="'View all resources in the system'"
    />
    <section class="row mx-0 pb-1 px-0" v-if="data_array && data_array.length">
      <div
        class="col-12 mb-4 c-co-card row mx-0 px-0 my-0 c-resource-card"
        data-toggle="modal"
        data-target="#ViewChurchRequestModal"
        v-for="(data, k) in data_array"
        :key="k"
        @click="open_modal(data)"
      >
        <div
          class="d-none d-md-block px-0 col-md-3"
          style="min-height: 12rem; overflow: hidden"
          
        >
          <img
            :src="data.resource_file"
            alt="resource img"
            class="c-resource-img"
          />
          <span class="c-resource-background-overlay"></span>
        </div>
        <div class="col-12 col-md-9 my-2" style="min-height: 12rem;">
          <div class="d-flex">
            <div>
              <p class="f-24 font-weight-bold mb-0 text-uppercase c-brand">
                {{data.resource_title}}
              </p>
              <span class="c-resource-date">{{data.created_at}}</span>
            </div>
          </div>
          <div>
            <p class="mt-3">
              {{data.resource_body}}
            </p>
          </div>
        </div>
      </div>
    </section>
     <PlaceHolder :message="'resources'" :imageTitle="'nofeed.svg'" v-else>
      <!-- <p slot="placeholder-content">
        Start by creating a resource
      </p> -->
    </PlaceHolder>
    <appViewChurchResource />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appViewChurchResource from "@/components/Modal/ViewChurchResource";
import Nprogress from "nprogress";
export default {
  name: "ViewResource",
  data(){
    return {
      data_array: []
    }
  },
  components: {
    appChurchOrganizationHeader,
    appViewChurchResource,
  },
  methods: {
    open_modal(data) {
      console.log("data >> ", data);
      this.$store.state.church_organisation.single_resource = data;
    },
    async get_response() {
      try {
        const get_response = await this.$store.dispatch("church_organisation/allResponse");
        console.log("get_response >> ", get_response);
        this.$store.state.church_organisation.all_response = get_response.result;
        this.data_array = get_response.data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted(){
    await this.get_response();
  }
};
</script>

<style>
.c-resource-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.c-resource-date {
  margin-top: 0;
  display: block;
  font-size: 90%;
  font-weight: 600;
  color: #aaa;
}
.c-resource-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2b2b2b59;
}
.c-resource-card {
  cursor: pointer;
  box-shadow: 0 0 0.3rem #b1afaf;
  transition: all 0.3s ease-in-out;
}
.c-resource-card:focus,
.c-resource-card:hover {
  box-shadow: 0 0 0.1rem #b1afaf;
}
</style>
