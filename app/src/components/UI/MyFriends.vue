<template>
  <section class="groups m t-3 bg-white p-3 my-3">
    <h3 class="f-16 f-bold">Friends</h3>

    <div class="row mt-3" v-for="i in 5" :key="i">
      <div class=" col-lg-3">
        <img src="/assets/images/group-4.png" class="w-40" alt="user" />
      </div>
      <div class="col-lg-6 px-0">
        <p class="f-12 f-bold mt-0 c-brand mb-0" style="cursor: pointer">
          <span class="d-block"> Chinedu ifediorah </span>
          <span class="f-10 f-bold c-grey">cifediorah@gmail.com</span>
        </p>
      </div>
      <!-- <div class="col-lg-3  px-0 text-right pr-2">
        <p class="c-brand f-14 f-med">Join</p>
      </div> -->
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </section>
</template>

<script>
export default {
  name: "MyGroups",
};
</script>

<style></style>
