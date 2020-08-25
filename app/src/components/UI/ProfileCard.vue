<template>
  <div class="user-section bg-white">
    <div class="general-block"></div>
    <img src="/assets/images/user_1.png" class="img-fluid" alt="user big" />
    <div class="user-details text-center pb-3">
      <router-link to="/account/profile" tag="div">
        <p class="f-14 f-bold c-blk mb-0 c-hov" style="cursor: pointer">
          {{ profile_data.full_name }} ({{ profile_data.username }})
        </p>
        <p class="f-12 f-med c-grey" style="cursor: pointer">
          {{ profile_data.email }} | {{ profile_data.phone_number }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profilecard",
  props: {
    profile_data: {
      type: Object,
    },
  },
};
</script>

<style>
.c-hov:hover {
  color: rgb(33, 33, 247) !important;
}
</style>
