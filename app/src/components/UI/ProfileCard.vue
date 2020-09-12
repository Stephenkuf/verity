<template>
  <div class="user-section bg-white">
    <div class="general-block"></div>
    <img
      src="/assets/svg/man-svgrepo-com.svg"
      class="img-fluid c-profile-img"
      alt="user big"
    />
    <!-- <div class="wrap-pic-s size-109 bor0 of-hidden mr-1 c-bg-success">
      <p class="c-review-img-name text-uppercase font-weight-bold">
        {{ profile_data.full_name.split(" ")[0][0]
        }}{{
          profile_data.full_name.split(" ")[1] &&
            profile_data.full_name.split(" ")[1][0]
        }}
      </p>
    </div> -->
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
.c-profile-img {
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 0.5rem #fff, 0 2px 1rem #fff, 0 3px 2rem #fff,
    0 3px 3rem #fff;
}
</style>
