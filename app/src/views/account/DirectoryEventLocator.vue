<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <app-directory-event-locator-dashboard />
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appDirectoryEventLocatorDashboard from "@/components/dashboard/DirectoryEventLoactor";

export default {
  name: "DirectoryEventLocator",
  components: {
    appNavbar,
    appDirectoryEventLocatorDashboard,
  },
};
</script>

<style></style>
