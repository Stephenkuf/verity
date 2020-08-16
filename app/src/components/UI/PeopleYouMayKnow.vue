<template>
  <!-- FRIENDS SUGGESTIONS -->
  <div class="bg-white p-3">
    <h3 class="text-center c-brown f-16 f-bold">
      People you may know
    </h3>
    <div
      class="row mt-3"
      v-for="(single_user, index) in peopleToFollow"
      :key="index"
    >
      <div class="col-12 col-lg-3">
        <img src="/assets/images/user_2.png" class="w-40" alt="user" />
      </div>
      <div class="col-12 col-lg-6 px-0">
        <p class="f-12 f-med c-brand mb-0 ml-2">{{ single_user.full_name }}</p>
        <p class="f-10 f-med c-grey ml-2">
          {{ single_user.email }} ({{ single_user.phone_number }})
        </p>
      </div>
      <div class="col-12 col-lg-3  px-0">
        <p
          @click="follow(single_user.id)"
          class="c-brand f-14 f-med"
          style="cursor: pointer"
        >
          Follow
        </p>
      </div>
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </div>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
export default {
  name: "PeopleYouMayKnow",
  data() {
    return {
      peopleToFollow: [],
    };
  },
  mixins: [notifications],
  computed: {
    get_all_users() {
      return this.$store.state.dashboard.all_users;
    },
  },
  methods: {
    async follow(user_id) {
      try {
        Nprogress.start();
        const follow_user = await this.$store.dispatch("dashboard/followUser", {
          user_id,
        });
        console.log("follow_user >> ", follow_user);
        this.showSuccessNotification(follow_user.message);
        Nprogress.done();
        await this.whoToFollow();
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async whoToFollow() {
      try {
        const get_people = await this.$store.dispatch(
          "dashboard/getPeopleToFollow"
        );
        console.log("get_people >> ", get_people);
        this.peopleToFollow = get_people.result;
      } catch (error) {
        console.log("error >> ", error);
      }
    },
  },
  async mounted() {
    await this.whoToFollow();
  },
};
</script>

<style></style>
