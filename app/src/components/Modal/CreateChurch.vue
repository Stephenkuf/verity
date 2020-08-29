<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="platformModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog w-80" role="document">
      <div class="modal-content">
        <div class="modal-header border-none py-0">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Choose a denomination</h5> -->
          <button
            ref="closeChurchModal"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="heading">
            <h3 class="text-center f-bold f-24 c-brand">
              Welcome to the {{ $store.state.landing_page.platformModal }}
            </h3>
            <p class="text-center c-brown mt-3" style="font-size: 1rem;">
              Please select a platform for you to enter
            </p>
          </div>
          <form class="text-center">
            <div class="form-group mt-5">
              <div class="form-check form-check-inline mr-5e">
                <input
                  class="form-check-input "
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="create_church_chosen"
                  id="individual"
                  value="individual"
                  required
                />
                <label
                  class="form-check-label f-16 f-med"
                  for="individual"
                  htmlFor="individual"
                  >Individual</label
                >
              </div>
              <div class="form-check form-check-inline mr-5e">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="create_church_chosen"
                  id="denomination"
                  value="denomination"
                />
                <label
                  class="form-check-label f-16 f-med"
                  for="denomination"
                  htmlFor="denomination"
                  >Denomination</label
                >
              </div>
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="create_church_chosen"
                  id="branch"
                  value="branch"
                  required
                />
                <label class="form-check-label f-16 f-med" htmlFor="branch"
                  >Branch</label
                >
              </div>
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="create_church_chosen"
                  id="forum"
                  value="forum"
                  required
                />
                <label class="form-check-label f-16 f-med" htmlFor="forum"
                  >Forum</label
                >
              </div>
            </div>
            <div class="form-group mt-5 text-center">
              <button
                type="submit"
                class="btn btn-brand text-white"
                data-toggle="modal"
                data-target="denominationModal"
                @click.prevent="submitCreateChurchModal()"
              >
                Select
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateChurch",
  data() {
    return {
      create_church_chosen: "",
    };
  },
  methods: {
    submitCreateChurchModal() {
      if (this.create_church_chosen) {
        if (this.create_church_chosen == "forum") {
          // this.$router.query.selected = "";
        } else {
          this.$router.push(`?selected=${this.create_church_chosen}`);
          this.$refs["closeChurchModal"].click();
        }
      }
    },
  },
};
</script>

<style></style>
