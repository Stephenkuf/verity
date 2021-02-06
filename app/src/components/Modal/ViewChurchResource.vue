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
      <div
        class="modal-content row mx-0"
        style="flex-direction: unset !important;"
      >
        <div class="col-12 col-md-3 px-0">
          <img
            :src="single_resource.resource_file"
            alt="resource img"
            class="c-resource-img"
          />
          <span class="c-resource-background-overlay"></span>
        </div>
        <div class="col-12 col-md-9 px-0">
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
                {{single_resource.resource_title}}
                <span class="c-underline"></span>
              </h3>
              <p class="c-brown mt-3 mb-2" style="font-size: 1rem;">
                {{single_resource.resource_body}}
              </p>
              <span class="c-resource-date text-left"
                >{{single_resource.created_at}}</span
              >
            </div>
            <div class="mt-3" v-if="false">
              <button class="btn btn-primary ml-0 font-weight-bold">
                Download File
              </button>
              <button class="btn btn-danger font-weight-bold">
                Delete Resource
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewChurchRequest",
  data() {
    return {};
  },
  computed: {
    get_profile(){
      return this.$store.state.church_organisation.profile
    },
    single_resource() {
      // console.log(this.$store.state.church_organisation.single_resource);
      return this.$store.state.church_organisation.single_resource;
    },
  }
};
</script>

<style></style>
