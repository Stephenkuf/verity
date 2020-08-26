<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <div class="container mt-3">
      <div class="row">
        <div class="col-4">
          <appFriendList />
        </div>
        <div class="col-8">
          <appMessagePanel />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appFriendList from "@/components/UI/FriendList";
import appMessagePanel from "@/components/UI/MessagePanel";

export default {
  name: "Messages",
  components: {
    appNavbar,
    appFriendList,
    appMessagePanel,
  },
};
</script>

<style></style>
