<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="CreateRegister"
    tabindex="-1"
    role="dialog"
    aria-labelledby="CreateRegister"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered w-80" role="document">
      <div class="modal-content">
        <div class="modal-header border-none py-0">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Choose a denomination</h5> -->
          <button
            ref="closeCreateRegister"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body px-4 pb-5">
          <div class="col-12 my-0">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="register_name" class="c-label"
                    >Register Name</label
                  >
                  <input
                    type="text"
                    class="form-control c-input"
                    id="register_name"
                    placeholder="Enter Register Name"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="male_number" class="c-label"
                    >Number Of Male</label
                  >
                  <input
                    type="number"
                    class="form-control c-input"
                    id="male_number"
                    placeholder="Enter Numbber"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="female_number" class="c-label"
                    >Number Of Female</label
                  >
                  <input
                    type="number"
                    class="form-control c-input"
                    id="female_number"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="total_number" class="c-label">Total Number</label>
                  <input
                    type="number"
                    class="form-control c-input"
                    id="total_number"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="register_date" class="c-label"
                    >Register Date</label
                  >
                  <input
                    type="date"
                    class="form-control c-input"
                    id="register_date"
                    placeholder="Enter Register Date"
                  />
                </div>
              </div>
              <div style="margin-top: 2.5rem">
                <button class="btn-lg btn-primary">Create Register</button>
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
  name: "CreateRegister",
};
</script>

<style></style>
