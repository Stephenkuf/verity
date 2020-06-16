<template>
  <div>
    <appTopbar v-if="!($route.name == 'Landing')"></appTopbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "@/components/Account/TopBar";

export default {
  name: "AccountWrapper",
  components: {
    appTopbar: Topbar,
  },
};
</script>

<style></style>
