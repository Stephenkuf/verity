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
      <div class="modal-content">
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
              Request for yealy church renovation
              <span class="c-underline"></span>
            </h3>
            <p class="c-brown mt-3" style="font-size: 1rem;">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              nihil rem asperiores excepturi voluptate. Perferendis quidem
              voluptate quia veniam veritatis. Ullam harum cum, cumque repellat
              quia quibusdam. Atque adipisci laudantium harum dolorem dolorum
              nisi fugiat est, laborum quidem fugit quaerat accusamus doloribus
              odio culpa blanditiis itaque ipsum minus odit reprehenderit
              obcaecati aliquam alias. Corrupti aliquam omnis numquam modi
              inventore nihil exercitationem ex reiciendis cupiditate debitis
              alias sapiente libero sint facere iure vel tempore, qui distinctio
              quasi voluptas ullam minus pariatur veritatis. Minima quaerat
              cupiditate in nemo ipsa modi, officiis optio, omnis minus
              molestiae expedita obcaecati. Quidem quasi dicta esse quis atque
              veritatis explicabo? Illo impedit error deleniti quod rem dolores
              cumque voluptatibus neque, eveniet libero porro obcaecati ipsum
              natus dicta incidunt molestias ea illum eligendi alias, corporis
              sed commodi sit mollitia? Temporibus quos voluptatum modi ratione,
              est natus eos. Nulla eius autem quam perferendis? Nesciunt harum
              voluptatibus error aliquid impedit.
            </p>
          </div>
          <div v-if="!show_reason">
            <button
              class="btn btn-success font-weight-bold"
              @click="select_reason('acceptance')"
            >
              ACCEPT
            </button>
            <button
              class="btn btn-danger font-weight-bold"
              @click="select_reason('rejection')"
            >
              REJECT
            </button>
          </div>
          <hr v-if="show_reason" />
          <div v-if="show_reason">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="reason" class="c-label text-capitalize"
                    >Reason For {{ chosen_reason }}</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    id="reason"
                    rows="5"
                    placeholder="Enter Reason"
                  ></textarea>
                </div>
                <div class="d-flex">
                  <button
                    class="btn btn-success font-weight-bold"
                    @click.prevent="
                      $store.state.church_organisation.show_reason = false
                    "
                  >
                    CONTINUE
                  </button>
                  <button
                    class="btn btn-danger font-weight-bold"
                    @click.prevent="
                      $store.state.church_organisation.show_reason = false
                    "
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
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
    return {
      chosen_reason: "acceptance",
    };
  },
  computed: {
    show_reason() {
      return this.$store.state.church_organisation.show_reason;
    },
  },
  methods: {
    select_reason(param) {
      this.$store.state.church_organisation.show_reason = true;
      this.chosen_reason = param;
    },
  },
};
</script>

<style>
.c-underline {
  display: block;
  width: 5rem;
  height: 0.4rem;
  background: #08587d;
  border-radius: 5px;
  margin-top: 0.6rem;
}
</style>
