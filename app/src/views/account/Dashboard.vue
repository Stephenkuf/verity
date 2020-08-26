<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <appBeliversFellowshipDashBoard />
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appBeliversFellowshipDashBoard from "@/components/dashboard/BeliversFellowship";

export default {
  name: "BeliversNetworkDashboard",
  components: {
    appNavbar,
    appBeliversFellowshipDashBoard,
  },
};
</script>

<style></style>
