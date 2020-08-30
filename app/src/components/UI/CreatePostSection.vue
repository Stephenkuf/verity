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
          <input type="file" class="upload-input" ref="GETPOST" />
          <button class="btn add-btn c-brand f-bold btn-md-block ">
            <i class="fa fa-image mr-2"></i>Add Image
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
    fetchPost() {
      this.$emit("fetchPost");
    },
    async createPost() {
      console.log("show_data >> ", this.post_text);
      try {
        if (this.post_text) {
          const get_file =
            this.$refs.GETPOST && this.$refs.GETPOST.files
              ? this.$refs.GETPOST.files[0]
              : "";

          console.log("get_file >> ", get_file);

          const new_form_data = new FormData();
          new_form_data.append("post_body", this.post_text);
          new_form_data.append("post_image", get_file);
          Nprogress.start();
          const data = await this.$store.dispatch(
            "dashboard/createPost",
            new_form_data
          );
          console.log("data >> ", data);
          this.showSuccessNotification(data.message);
          Nprogress.done();
          this.post_text = "";
          this.fetchPost();
        }
      } catch (error) {
        console.log("err >>", error);
        if (error.data) {
          this.showErrorNotification(error.data.message);
        } else {
          this.showErrorNotification("Internal Server Error");
        }
        Nprogress.done();
      }
    },
  },
};
</script>

<style></style>
