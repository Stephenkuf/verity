<template>
  <section class="groups m t-3 bg-white p-3 my-3">
    <h3 class="f-16 f-bold">Friends</h3>
    <div class="row my-3" v-if="!friends.length">
      <div class="d-flex justify-content-center w-100">
        <img
          src="/assets/svg/add-friend.svg"
          class="c-pointer"
          alt="no friends"
          @click="$router.push('/account/dashboard/belivers-network')"
        />
      </div>
      <div class="text-center w-100 mt-2">
        <span class="font-weight-bold">Please add a friend</span>
      </div>
    </div>
    <div class="row my-3" v-for="(each_friend, i) in friends" :key="i" v-else>
      <div class=" col-lg-3">
        <img src="/assets/images/group-4.png" class="w-40" alt="user" />
      </div>
      <div class="col-lg-6 px-0">
        <p class="f-12 f-bold mt-0 c-brand mb-0" style="cursor: pointer">
          <span class="d-block"> {{ each_friend.users.full_name }} </span>
          <span class="f-10 f-bold c-grey">{{ each_friend.users.email }}</span>
        </p>
      </div>
      <!-- <div class="col-lg-3  px-0 text-right pr-2">
        <p class="c-brand f-14 f-med">Join</p>
      </div> -->
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3" v-if="friends.length > 5">
      View all
    </div>
  </section>
</template>

<script>
export default {
  name: "MyFriends",
  props: {
    friends: {
      type: Array,
    },
  },
};
</script>

<style>
.c-pointer {
  cursor: pointer !important;
}
</style>
