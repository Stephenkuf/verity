<template>
  <section class="old-post bg-white border p-4">
    <div class="post-header">
      <div class="row justify-content-between">
        <div class="col-9 col-md-7 col-lg-7">
          <div class="row">
            <div class="col-4 col-md-3 col-lg-3 pr-0 ">
              <img
                src="/assets/images/user_2.png"
                class="img-fluid "
                alt="logged in user"
              />
            </div>
            <div class="col-8 col-md-9 col-lg-9 pl-0">
              <p class="c-brand f-14 f-bold mb-0">
                {{ post_data.user.full_name }}
              </p>
              <p class="c-grey f-8 c-fs">
                {{ post_data.created_at | moment("MMMM Do YYYY, h:mm a") }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-2 col-lg-3">
          <!-- <button
            class="btn btn-sm bg-transparent border-0 pull-right no-bs no-bs--show"
          >
            <i class="fa fa-ellipsis-h f-16 c-blue"></i>
          </button> -->
        </div>
      </div>
      <div class="mt-4">
        <p class=" f-12 f-med">
          {{ post_data.post_body }}
        </p>
        <img
          v-if="post_data.post_image"
          src="/assets/images/post_1.png"
          class="w-100"
          alt="user post"
        />
      </div>
      <div class=" mt-3 px-3">
        <div class="row justify-content-between">
          <div class="col-9 px-0 col-lg-6">
            <span
              class="post-likes c-blue f-14 mr-3 f-bold"
              @click="likePost(post_data.id)"
            >
              <i class="far fa-heart mr-2 f-16" style="cursor:pointer"></i>
              {{ post_data.__meta__.like_count }} likes
            </span>
            <span class="post-comment c-blue f-14 f-bold">
              <i class="far fa-comment mr-2 f-16" style="cursor:pointer"></i>
              {{ post_data.reply.length }} comments
            </span>
          </div>
          <div class="col-3 col-lg-3 text-right px-0">
            <i class="far fa-bookmark c-blue"></i>
          </div>
        </div>
      </div>
      <div class="comment-box mt-4">
        <div class="row">
          <div class="col-2 col-md-2 pr-0 pt-3">
            <img src="/assets/images/user_3.png" class="img-fluid" alt="" />
          </div>
          <div class="col-10 col-md-10 pl-0">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border-right-0"
                placeholder="Comment..."
                aria-label="Comment..."
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text border-left-0" id="basic-addon2">
                  <i class="fa fa-image c-blue"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { notifications } from "@/mixins/Notification";
export default {
  name: "SinglePost",
  props: {
    post_data: {
      type: Object,
    },
  },
  mixins: [notifications],
  methods: {
    fetchPost() {
      this.$emit("fetchPost");
    },
    async likePost(post_id) {
      console.log("post id >> ", post_id);
      try {
        const data = await this.$store.dispatch("dashboard/likePosts", {
          post_id: post_id,
        });
        console.log("data >> ", data);
        this.showSuccessNotification(data.message);
        this.fetchPost();
      } catch (error) {
        this.showErrorNotification(error.data.message);
      }
    },
  },
};
</script>

<style scoped>
.f-med {
  font-size: 1rem;
}
.c-fs {
  font-size: 14px;
}
</style>
