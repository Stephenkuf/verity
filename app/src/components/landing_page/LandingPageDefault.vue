<template>
  <main class="mt-6e mb-6e">
    <section class="intro">
      <h3 class="f-20 c-red text-center f-bold">
        Verity Christian Faith Ministry
      </h3>
      <h2 class="mt-3 f-52 f-bold c-brand text-center">
        A Social & Communication <br />
        Platform For The Christian Faith
      </h2>
      <p class="c-brand f-20 text-center">
        To make a donation to the welfare to help those in need
        <a hre="onboarding.html">
          <i class="fa fa-long-arrow-right c-red ml-3"></i>
        </a>
      </p>
    </section>

    <div class="info text-center mt-6e">
      <div class="square-container">
        <div
          class="square"
          @click="
            completeReg(
              'beliver’s fellowship platform/network',
              'belivers-network'
            )
          "
        >
          <span>Belivers’ Fellowship Platform/Network</span>
        </div>
      </div>
      <div class="square-container">
        <div class="square">
          <span>Church Organisation Platform</span>
        </div>
        <!-- <div
          class="square"
          @click="
            completeReg('church organisation platform', 'church-organisation')
          "
        >
          <span>Church Organisation Platform</span>
        </div> -->
      </div>
      <div class="square-container">
        <div class="square">
          <span>Biblical Research (Search Engine)</span>
        </div>
      </div>
      <div class="square-container">
        <div class="square">
          <span>Registry Directory Event Locator</span>
        </div>
      </div>
      <div class="mt-4">
        <div class="square-container">
          <div class="square">
            <span> Welfare</span>
          </div>
        </div>
        <div class="square-container">
          <div class="square">
            <span>Devotional Online Store</span>
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-dark d-none"
      data-toggle="modal"
      id="OpenCOMREGMOD"
      data-target="#platformModal"
    >
      ...
    </button>
  </main>
</template>

<script>
export default {
  name: "LandingPageDefault",
  computed: {
    get_profile() {
      return this.$store.state.dashboard.profile;
    },
  },
  methods: {
    completeReg(title, link) {
      if (!this.get_profile.is_complete_registration) {
        this.$store.state.landing_page.platformModal = title;
        document.getElementById("OpenCOMREGMOD").click();
      } else {
        location.replace(`/account/dashboard/${link}`);
      }
    },

    // churchOrganisation() {
    //   $('#platformModal').modal('show');
    //   console.log("here");
    // },
  },
};
</script>

<style></style>
