<template>
  <div class="user-section bg-white">
    <div class="general-block"></div>
    <img src="/assets/images/user_1.png" class="img-fluid" alt="user big" />
    <div class="user-details text-center pb-3">
      <p class="f-14 f-bold c-blk mb-0">
        {{ profile_data.full_name }} ({{ profile_data.username }})
      </p>
      <p class="f-12 f-med c-grey">
        {{ profile_data.email }} | {{ profile_data.phone_number }}
      </p>
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

<style></style>
