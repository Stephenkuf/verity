<template>
  <div
    :class="
      $route.meta.group == 'Dashboard' &&
      ($route.name == 'ChurchEmail' ||
        $route.name == 'NewRequest' ||
        $route.name == 'RejectedRequest' ||
        $route.name == 'CreateRequest' ||
        $route.name == 'CreateResource' ||
        $route.name == 'CreateBulletin' ||
        $route.name == 'ViewResource' ||
        $route.name == 'AllBulletin' ||
        $route.name == 'RegisterManager' ||
        $route.name == 'AcceptedRequest')
        ? 'bg-blue-light'
        : 'bg-grey-light'
    "
  >
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
