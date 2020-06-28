<template>
  <div>
    <div class="nav__tabs">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <ul class="nav nav-tabs nav-fill bg-white">
              <li class="nav-item mb-0">
                <a
                  class="nav-link"
                  :class="selected_tab == 'general-tab' && 'active'"
                  @click.prevent="selected_tab = 'general-tab'"
                  >General</a
                >
              </li>
              <li class="nav-item mb-0">
                <a
                  class="nav-link"
                  :class="selected_tab == 'denomination-tab' && 'active'"
                  @click.prevent="selected_tab = 'denomination-tab'"
                >
                  Denomination
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="tab-content" id="myTabContent">
        <div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <!-- user details -->
              <appProfileCard />
              <div class="user__social-stats row mx-0 mt-2 bg-white px-2 py-3">
                <div class="col-md-7 c-grey f-med f-14">
                  <p>Followers</p>
                  <p>Following</p>
                  <p>Post</p>
                  <p>Groups</p>
                </div>
                <div class="col-md-5 c-brand f-med f-14 text-right">
                  <p>52</p>
                  <p>102</p>
                  <p>12</p>
                  <p>5</p>
                </div>
              </div>

              <div class="resources-section p-3 mt-3 bg-white">
                <p
                  class="c-brand f-bold pointer"
                  data-toggle="modal"
                  data-target="#group"
                >
                  Create a Group
                </p>
                <p
                  class="c-brand f-bold pointer"
                  data-toggle="modal"
                  data-target="#topic"
                >
                  Create a Topic
                </p>
              </div>
            </div>
            <div class="col-md-6" v-if="selected_tab == 'general-tab'">
              <section class="posts">
                <appCreatePostSection @fetchPost="fetch_post" />
                <appSinglePost
                  v-for="(post, index) in post_list"
                  :key="index"
                  :post_data="post"
                />
              </section>
            </div>
            <div class="col-md-6" v-if="selected_tab == 'denomination-tab'">
              <section class="posts">
                <appCreatePostSection />
                <appSinglePost
                  v-for="(post, index) in post_list"
                  :key="index"
                  :post_data="post"
                />
              </section>
            </div>
            <div class="col-md-3">
              <section class="sidebar__right ">
                <div
                  class=" text-center bg-white py-3 mb-2"
                  v-if="selected_tab == 'denomination-tab'"
                >
                  <img src="/assets/images/church_logo.png" alt="" />
                  <p class="font-weight-bold">Deeper Life Bible Church</p>
                </div>
                <!-- friends  -->
                <appPeopleYouMayKnow />
                <!-- Groups -->
                <appGroupYouMayJoin />
              </section>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="denomination"
          role="tabpanel"
          aria-labelledby="denomination-tab"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import appProfileCard from "@/components/UI/ProfileCard";
import appCreatePostSection from "@/components/UI/CreatePostSection";
import appSinglePost from "@/components/UI/SinglePost";
import appGroupYouMayJoin from "@/components/UI/GroupYouMayJoin";
import appPeopleYouMayKnow from "@/components/UI/PeopleYouMayKnow";

import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export default {
  name: "BeliversFellowshipDashBoard",
  data() {
    return {
      selected_tab: "general-tab",
      post_list: [],
    };
  },
  mixins: [notifications],
  components: {
    appProfileCard,
    appCreatePostSection,
    appSinglePost,
    appGroupYouMayJoin,
    appPeopleYouMayKnow,
  },
  methods: {
    async fetch_post() {
      try {
        Nprogress.start();
        const get_posts = await this.$store.dispatch("dashboard/viewPosts");
        console.log("get posts >> ", get_posts);
        this.post_list = get_posts.data;
        Nprogress.done();
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.fetch_post();
  },
};
</script>

<style></style>
