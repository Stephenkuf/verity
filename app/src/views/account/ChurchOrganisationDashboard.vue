<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <app-church-organisation-dashboard />
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appChurchOrganisationDashboard from "@/components/dashboard/ChurchOrganisation";

export default {
  name: "ChurchOrganisationDashboard",
  components: {
    appNavbar,
    appChurchOrganisationDashboard,
  },
};
</script>

<style></style>
