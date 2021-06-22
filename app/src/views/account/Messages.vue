<template>
  <main class="mt-5 pb-5">
    <app-navbar></app-navbar>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 col-md-4 pb-5 pb-md-0">
          <appFriendList :friends="friends" @select_chat="select_chat" />
        </div>
        <div class="col-12 col-md-8">
          <appMessagePanel v-if="show_message" />
          <PlaceHolder
            :message="'chat'"
            :imageTitle="'send-message.svg'"
            :margin_style="'my-0'"
            :img_width="'250px'"
            v-else
          >
            <p slot="placeholder-content">
              Select a friend and chat.
            </p>
          </PlaceHolder>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import appNavbar from "@/components/Account/Navbar";
import appFriendList from "@/components/UI/FriendList";
import appMessagePanel from "@/components/UI/MessagePanel";

export default {
  name: "Messages",
  data() {
    return {
      friends: [],
      show_message: false,
    };
  },
  components: {
    appNavbar,
    appFriendList,
    appMessagePanel,
  },
  computed: {
    get_chat_id() {
      return this.$store.state.message.chat_id;
    },
  },
  methods: {
    async select_chat(each_friend) {
      this.show_message = true;
      console.log("each_friend >> ", each_friend);
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
  },
  async mounted() {
    await this.myFriends();
  },
};
</script>

<style></style>
