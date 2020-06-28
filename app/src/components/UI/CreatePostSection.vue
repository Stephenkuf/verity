<template>
  <section class="create-post p-3">
    <div class="media">
      <img src="/assets/images/user_2.png" class="mr-3" alt="logged in user" />
      <div class="media-body">
        <input
          type="text"
          v-model="post_text"
          class="create-post-input f-14 f-bold"
          placeholder="Create a post..."
        />
        <div class="uploads mt-3">
          <input type="file" class="upload-input" />
          <button class="btn add-btn c-brand f-bold btn-md-block ">
            <i class="fa fa-image mr-2"></i>Add File
          </button>
          <button
            class="btn add-btn c-brand f-bold ml-3"
            @click.prevent="createPost()"
          >
            <!-- <i class="fa fa-tag c-brand mr-1"></i> -->
            Create Post
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
export default {
  name: "CreatePostSection",
  data() {
    return {
      post_text: "",
    };
  },
  mixins: [notifications],
  methods: {
    async createPost() {
      console.log("show_data >> ", this.post_text);
      try {
        if (this.post_text) {
          Nprogress.start();
          const data = await this.$store.dispatch("dashboard/createPost", {
            post_body: this.post_text,
          });
          console.log("data >> ", data);
          this.showSuccessNotification(data.message);
          Nprogress.done();
        }
      } catch (error) {
        this.showErrorNotification(error.data.message);
        Nprogress.done();
      }
    },
  },
};
</script>

<style></style>
