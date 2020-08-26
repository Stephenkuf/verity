<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <appAccountProfile />
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appAccountProfile from "@/components/Profile/AccountProfile";

export default {
  name: "Profile",
  components: {
    appNavbar,
    appAccountProfile,
  },
};
</script>

<style></style>
