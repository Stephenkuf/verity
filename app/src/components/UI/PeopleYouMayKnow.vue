<template>
  <!-- FRIENDS SUGGESTIONS -->
  <div class="bg-white p-3">
    <h3 class="text-center c-brown f-16 f-bold">
      People you may know
    </h3>
    <div class="row mt-3" v-for="i in 5" :key="i">
      <div class="col-12 col-lg-3">
        <img src="/assets/images/user_2.png" class="w-40" alt="user" />
      </div>
      <div class="col-12 col-lg-6 px-0">
        <p class="f-12 f-med c-brand mb-0 ml-2">David Akinbami</p>
        <p class="f-10 f-med c-grey ml-2">
          Deeper Life Bible Church
        </p>
      </div>
      <div class="col-12 col-lg-3  px-0">
        <p class="c-brand f-14 f-med">Follow</p>
      </div>
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleYouMayKnow",
};
</script>

<style></style>
