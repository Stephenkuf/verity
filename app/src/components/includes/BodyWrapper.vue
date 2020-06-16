<template>
  <div>
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Footer from "@/components/includes/Footer";

export default {
  name: "Body",
  components: {
    appFooter: Footer,
  },
  mounted() {
    console.log("route >> ", this.$route);
  },
};
</script>

<style></style>
