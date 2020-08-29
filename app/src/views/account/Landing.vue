<template>
  <body
    data-page="homepage"
    :class="
      $store.state.landing_page.trigger_create_church_modal && 'modal-open'
    "
  >
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg nav-bs">
          <router-link tag="a" class="navbar-brand" to="/">
            <img src="/assets/images/s4.png" alt="logo" />
          </router-link>
          <button
            class="navbar-toggler border bd-blue"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars c-blue"></span>
          </button>
          <div class="collapse navbar-collapse" id="basicExampleNav">
            <!-- <ul class="navbar-nav ml-auto" v-if="!check_route">
              <li class="nav-item">
                <router-link tag="a" class="nav-link nav-border" to="/login">
                  Login
                </router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class="nav-link" to="/register">
                  Sign Up
                </router-link>
              </li>
            </ul> -->
          </div>
        </nav>
      </div>
    </header>

    <!-- landing page default -->
    <app-landing-page-default v-if="!check_route"></app-landing-page-default>

    <!-- individual -->
    <app-landing-page-individual
      v-if="check_route == 'individual'"
    ></app-landing-page-individual>
    <!-- denomination -->
    <app-landing-page-denomination
      v-if="check_route == 'denomination'"
    ></app-landing-page-denomination>
    <app-landing-page-branch
      v-if="check_route == 'branch'"
    ></app-landing-page-branch>

    <!-- create church modal -->
    <app-create-church></app-create-church>
  </body>
</template>

<script>
import CreateChurch from "@/components/Modal/CreateChurch";
import LandingPageDefault from "@/components/landing_page/LandingPageDefault";
import LandingPageIndividual from "@/components/landing_page/Individual";
import LandingPageDenomination from "@/components/landing_page/Denomination";
import LandingPageBranch from "@/components/landing_page/Branch";

export default {
  name: "Landing",
  components: {
    appCreateChurch: CreateChurch,
    appLandingPageDefault: LandingPageDefault,
    appLandingPageIndividual: LandingPageIndividual,
    appLandingPageDenomination: LandingPageDenomination,
    appLandingPageBranch: LandingPageBranch,
  },
  computed: {
    check_route() {
      if (this.$route.query.selected) {
        return this.$route.query.selected.toLowerCase();
      } else {
        return false;
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("dashboard/viewProfile");
  },
};
</script>

<style></style>
