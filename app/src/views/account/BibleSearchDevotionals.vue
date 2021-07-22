<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <app-bible-search-devotionals />
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appBibleSearchDevotionals from "@/components/dashboard/BibleSearchDevotionals";

export default {
  name: "BibleSearchDevotionals",
  components: {
    appNavbar,
    appBibleSearchDevotionals,
  },
};
</script>

<style></style>
