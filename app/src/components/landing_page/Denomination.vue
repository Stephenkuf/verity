<template>
  <main class="mt-5 mb-6e">
    <div class="container px-0">
      <div class="row justify-content-center">
        <div class="col-md-11 bg-white px-0">
          <div class="row">
            <div class="col-md-6 px-4 py-5">
              <h3 class="text-center f-bold f-24 c-brand">
                Create a profile for your denomination
              </h3>
              <p class="text-center c-brown f-20 mt-3">
                Please fill the form below
              </p>
              <form class="text-center" action="user_onboarding2.html">
                <div class="form-group mt-5">
                  <input
                    type="text"
                    class="form-control v__input"
                    placeholder="Denomination name"
                    required
                  />
                  <p></p>
                </div>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control v__input"
                    placeholder="Headquarters Address"
                    required
                  />
                </div>
                <div class="form-group mt-4">
                  <textarea
                    type="text"
                    class="form-control v__input v__input-textarea"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div class="form-group mt-5 text-center">
                  <button type="submit" class="btn btn-brand text-white">
                    Create
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-6 bg-yellow">
              <div class="frame"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Denomination",
};
</script>

<style></style>
