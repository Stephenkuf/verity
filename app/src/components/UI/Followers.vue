<template>
  <!-- FRIENDS SUGGESTIONS -->
  <div class="bg-white p-3 mb-3" v-if="peopleToFollow.length">
    <h3 class=" c-brown f-16 f-bold">
      <i
        class="fas fa-arrow-left c-pointer pr-2 c-hov"
        @click="$store.state.dashboard.third_panel = 'initial'"
      ></i>
      Followers({{ peopleToFollow.length }})
    </h3>
    <div
      class="row mt-3"
      v-for="(single_user, index) in peopleToFollow"
      :key="index"
    >
      <div class="col-12 col-lg-3">
        <!-- <img src="/assets/images/user_2.png" class="w-40" alt="user" /> -->
        <div class="wrap-pic-s size-109 bor0 of-hidden mr-1 c-bg-success">
          <p class="c-review-img-name text-uppercase font-weight-bold">
            {{ single_user.followers[0].full_name.split(" ")[0][0]
            }}{{
              single_user.followers[0].full_name.split(" ")[1] &&
                single_user.followers[0].full_name.split(" ")[1][0]
            }}
          </p>
        </div>
      </div>
      <div class="col-12 col-lg-6 px-0">
        <p class="f-12 f-med c-brand mb-0 ml-2">
          {{ single_user.followers[0].full_name }}
        </p>
        <p class="f-10 f-med c-grey ml-2">
          {{ single_user.followers[0].email }} ({{
            single_user.followers[0].phone_number
          }})
        </p>
      </div>
      <!-- <div class="col-12 col-lg-3  px-0">
        <p
          @click="follow(single_user.users.id)"
          class="c-brand f-14 f-med"
          style="cursor: pointer"
        >
          Follow
        </p>
      </div> -->
    </div>
    <!-- <div
      class="text-center c-brand f-med mt-3 mb-3"
      v-if="peopleToFollow.length > 5"
    >
      View all
    </div> -->
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
        await this.followers();
        this.$emit("get_user_profile");
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async followers() {
      try {
        const get_people = await this.$store.dispatch("dashboard/getFollowers");
        console.log("followers >> ", get_people);
        this.peopleToFollow = get_people.result;
      } catch (error) {
        console.log("error >> ", error);
      }
    },
  },
  async mounted() {
    await this.followers();
  },
};
</script>

<style></style>
