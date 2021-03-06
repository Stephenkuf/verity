<template>
  <div>
    <div class="container mt-3">
      <div class="my-5 py-5" v-if="is_fetching">
        <Loader />
      </div>
      <div v-else class="tab-content" id="myTabContent">
        <div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <!-- user details -->
              <appProfileCard :profile_data="profile_data" />
              <div class="user__social-stats row mx-0 mt-2 bg-white px-2 py-3">
                <div class="col-md-7 c-grey f-med f-14">
                  <p>Followers</p>
                  <p>Following</p>
                  <p>Post</p>
                  <p>Groups</p>
                </div>
                <div class="col-md-5 c-brand f-med f-14 text-right">
                  <p>
                    {{
                      profile_data.__meta__
                        ? profile_data.__meta__.followers_count
                        : 0
                    }}
                  </p>
                  <p>
                    {{
                      profile_data.__meta__
                        ? profile_data.__meta__.following_count
                        : 0
                    }}
                  </p>
                  <p>
                    {{
                      profile_data.__meta__
                        ? profile_data.__meta__.posts_count
                        : 0
                    }}
                  </p>
                  <p>0</p>
                </div>
              </div>

              <div class="resources-section p-3 mt-3 bg-white">
                <p
                  class="c-brand f-bold pointer mb-0"
                  data-toggle="modal"
                  data-target="#group"
                >
                  Create a Group
                </p>
                <!-- <p
                  class="c-brand f-bold pointer"
                  data-toggle="modal"
                  data-target="#topic"
                >
                  Create a Topic
                </p> -->
              </div>
              <div>
                <appMyGroups :groups="groups" />
              </div>
            </div>
            <div class="col-md-6" v-if="selected_tab == 'general-tab'">
              <section class="posts">
                <!-- <appCreatePostSection @fetchPost="fetch_post_n_profile" /> -->
                <template v-if="post_list.length">
                  <appSinglePost
                    v-for="(post, index) in post_list"
                    :profile="profile_data"
                    :key="index"
                    :post_data="post"
                    @fetchPost="fetch_post"
                  />
                </template>

                <PlaceHolder :message="'posts'" :margin_style="'mb-3'" v-else>
                  <p slot="placeholder-content">
                    Please start by creating a post.
                  </p>
                </PlaceHolder>
              </section>
            </div>
            <div class="col-md-3">
              <section class="sidebar__right ">
                <appMyFriends :friends="friends" />
                <!-- friends  -->
                <appPeopleYouMayKnow
                  :selected_tab="'general-tab'"
                  :key="`${'general-tab'}-2`"
                />
                <!-- Groups -->
                <appGroupYouMayJoin
                  :selected_tab="'general-tab'"
                  :key="`${'general-tab'}-1`"
                  @triggerMyGroup="triggerMyGroup"
                />
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
    <appCreateGroup @triggerMyGroup="triggerMyGroup" />
  </div>
</template>

<script>
import appProfileCard from "@/components/UI/ProfileCard";
// import appCreatePostSection from "@/components/UI/CreatePostSection";
import appSinglePost from "@/components/UI/SinglePost";
import appGroupYouMayJoin from "@/components/UI/GroupYouMayJoin";
import appMyGroups from "@/components/UI/MyGroups";
import appMyFriends from "@/components/UI/MyFriends";
import appPeopleYouMayKnow from "@/components/UI/PeopleYouMayKnow";
import appCreateGroup from "@/components/Modal/CreateGroup";

import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export default {
  name: "AccountProfile",
  data() {
    return {
      is_fetching: true,
      selected_tab: "general-tab",
      post_list: [],
      profile_data: {},
      all_users: [],
      groups: [],
      friends: [],
    };
  },
  mixins: [notifications],
  components: {
    appProfileCard,
    // appCreatePostSection,
    appSinglePost,
    appGroupYouMayJoin,
    appPeopleYouMayKnow,
    appCreateGroup,
    appMyGroups,
    appMyFriends,
  },
  methods: {
    async fetch_post_n_profile() {
      try {
        await this.fetch_post();
        await this.get_user_profile();
      } catch (error) {
        console.log(error);
      }
    },
    async fetch_post() {
      try {
        Nprogress.start();
        const get_posts = await this.$store.dispatch("profile/viewUserPosts");
        console.log("get users posts >> ", get_posts);
        this.post_list = get_posts.result;
        Nprogress.done();
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async get_user_profile() {
      try {
        const get_profile = await this.$store.dispatch("dashboard/viewProfile");
        console.log("get_profile >> ", get_profile);
        this.profile_data = get_profile.result[0];
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async get_all_users() {
      try {
        const get_all_users = await this.$store.dispatch("dashboard/allUsers");
        console.log("get_all_users >> ", get_all_users);
        this.all_users = get_all_users.result;
        this.$store.state.dashboard.all_users = get_all_users.result;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async myGroups() {
      try {
        const get_people = await this.$store.dispatch("dashboard/myGroups");
        console.log("get_people >> ", get_people);
        this.groups = get_people.result;
      } catch (error) {
        console.log("error >> ", error);
      }
    },
    async myFriends() {
      try {
        const get_people = await this.$store.dispatch("profile/getFriends");
        console.log("get my friends >> ", get_people);
        this.friends = get_people.result;
      } catch (error) {
        console.log("error >> ", error);
      }
    },
    async triggerMyGroup() {
      await this.myGroups();
      await this.get_user_profile();
    },
  },
  async mounted() {
    await this.fetch_post();
    await this.get_user_profile();
    await this.get_all_users();
    await this.myGroups();
    await this.myFriends();
    this.is_fetching = false;
  },
};
</script>

<style></style>
