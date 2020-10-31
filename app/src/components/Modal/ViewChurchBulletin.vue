<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="ViewChurchBulletin"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ViewChurchBulletin"
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
            src="/assets/images/bg-locate.png"
            alt="resource img"
            class="c-resource-img"
          />
          <span class="c-resource-background-overlay"></span>
        </div>
        <div class="col-12 col-md-9 px-0">
          <div class="modal-header border-none py-0">
            <!-- <h5 class="modal-title" id="exampleModalLabel">Choose a denomination</h5> -->
            <button
              ref="closeViewChurchBulletin"
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
              <h3 class="f-30 c-brand font-weight-bold text-uppercase">
                THIS IS A NEW BULLETIN
                <span class="c-underline"></span>
              </h3>
              <p class="c-brown mt-3 mb-2" style="font-size: 1rem;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                nihil rem asperiores excepturi voluptate. Perferendis quidem
                voluptate quia veniam veritatis. Ullam harum cum, cumque
                repellat quia quibusdam. Atque adipisci laudantium harum dolorem
                dolorum nisi fugiat est, laborum quidem fugit quaerat accusamus
                doloribus odio culpa blanditiis itaque ipsum minus odit
                reprehenderit obcaecati aliquam alias. Corrupti aliquam omnis
                numquam modi inventore nihil exercitationem ex reiciendis
                cupiditate debitis alias sapiente libero sint facere iure vel
                tempore, qui distinctio quasi voluptas ullam mintibus error
                aliquid impedit.
              </p>
              <span class="c-resource-date text-right"
                >November 12 2020, 9:30 PM</span
              >
            </div>
            <div class="mt-3">
              <button class="btn btn-danger font-weight-bold">
                Delete Bulletin
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
};
</script>

<style></style>
