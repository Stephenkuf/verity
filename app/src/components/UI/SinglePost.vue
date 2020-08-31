<template>
  <section
    class="old-post bg-white border p-4"
    :class="$route.name == 'Profile' && 'mt-0'"
  >
    <div class="post-header">
      <div class="row justify-content-between">
        <div class="col-9 col-md-7 col-lg-7">
          <div class="row">
            <div class="col-4 col-md-3 col-lg-3 pr-0 ">
              <!-- <img
                src="/assets/images/user_2.png"
                class="img-fluid "
                alt="logged in user"
              /> -->
              <div class="wrap-pic-s size-109 bor0 of-hidden mr-1 c-bg-success">
                <p class="c-review-img-name text-uppercase font-weight-bold">
                  {{ post_data.user.full_name.split(" ")[0][0]
                  }}{{
                    post_data.user.full_name.split(" ")[1] &&
                      post_data.user.full_name.split(" ")[1][0]
                  }}
                </p>
              </div>
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
          :src="post_data.post_image"
          style="border-radius: 1rem;"
          class="w-100"
          alt="user post"
        />
      </div>
      <div class=" mt-3 px-3">
        <div class="row justify-content-between">
          <div class="col-9 px-0 col-lg-6">
            <span
              class="post-likes c-blue f-14 mr-3 f-bold"
              style="cursor:pointer"
              @click="likePost(post_data.id)"
            >
              <i class="mr-2 f-16 far fa-heart" style="cursor:pointer"></i>
              {{ post_data.__meta__.like_count }} likes
            </span>
            <span
              class="post-comment c-blue f-14 f-bold"
              style="cursor:pointer"
              @click="open_comment_func(post_data.id)"
            >
              <i class="far fa-comment mr-2 f-16" style="cursor:pointer"></i>
              {{ post_data.comment.length }} comments
            </span>
          </div>
          <div class="col-3 col-lg-3 text-right px-0">
            <i class="far fa-bookmark c-blue"></i>
          </div>
        </div>
      </div>
      <div
        class="my-3 mx-0 row px-0"
        v-show="open_comment && post_data.comment.length"
      >
        <div class="d-flex w-100 justify-content-end">
          <div
            class="col-11 c-comment-box py-3"
            :id="`commentbox${post_data.id}`"
          >
            <div
              class="d-flex mx-2 mt-1 mb-3"
              v-for="(each_comment, index) in post_data.comment"
              :key="index"
            >
              <div class=" mr-3">
                <!-- <img
                  style="min-width: 35px;"
                  src="/assets/images/user_3.png"
                  width="35px"
                  class="img-fluid"
                  alt=""
                /> -->
                <div
                  class="wrap-pic-s size-109 bor0 of-hidden mr-1 c-bg-success"
                >
                  <p class="c-review-img-name text-uppercase font-weight-bold">
                    {{ post_data.user.full_name.split(" ")[0][0]
                    }}{{
                      post_data.user.full_name.split(" ")[1] &&
                        post_data.user.full_name.split(" ")[1][0]
                    }}
                  </p>
                </div>
              </div>
              <div class="">
                <small class="mb-0  d-block">
                  <span class="font-weight-bold d-block">{{
                    each_comment.user
                      ? each_comment.user.full_name
                      : "Annonymous User"
                  }}</span>
                  <small>{{
                    each_comment.created_at | moment("MMMM Do YYYY, h:mm a")
                  }}</small>
                </small>
                <small style="overflow-wrap: anywhere;">
                  {{ each_comment.comment }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-box mt-1">
        <div class="row">
          <div class="col-2 col-md-2 pr-0 pl-4 pt-2">
            <!-- <img src="/assets/images/user_3.png" class="img-fluid" alt="" /> -->
            <div class="wrap-pic-s size-109 bor0 of-hidden mr-1 c-bg-success">
              <p class="c-review-img-name text-uppercase font-weight-bold">
                {{ post_data.user.full_name.split(" ")[0][0]
                }}{{
                  post_data.user.full_name.split(" ")[1] &&
                    post_data.user.full_name.split(" ")[1][0]
                }}
              </p>
            </div>
          </div>
          <div class="col-10 col-md-10 pl-0">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border-right-0"
                placeholder="Comment..."
                v-model="comment_text"
                aria-label="Comment..."
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text border-left-0"
                  @click="send_comment(post_data.id)"
                  id="basic-addon2"
                >
                  <i class="fa fa-paper-plane c-blue"></i>
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
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";

export default {
  name: "SinglePost",
  data() {
    return {
      open_comment: false,
      comment_text: "",
    };
  },
  props: {
    post_data: {
      type: Object,
    },
    profile: {
      type: Object,
    },
  },
  mixins: [notifications],
  methods: {
    getMyLike(data) {
      console.log("like >> ", data, this.profile.id);
      return data.filter((obj) => {
        if (obj.user_id === this.profile.id) {
          console.log("true");
          return "fa fa-heart";
        } else {
          console.log("false");
          return "far fa-heart";
        }
      });
    },
    open_comment_func(id) {
      this.open_comment = !this.open_comment;
      let comment_box = document.getElementById(`commentbox${id}`);
      console.log("comment-box >> ", comment_box.scrollHeight);

      setTimeout(() => {
        comment_box.scrollTop = comment_box.scrollHeight;
        // setInterval(() => {
        //   // comment_box.scrollTop = comment_box.scrollHeight;
        //   comment_box.scrollTop += 1;
        // }, comment_box.scrollHeight);
      }, 500);
    },
    async send_comment(post_id) {
      console.log("comment_text >> ", this.comment_text, post_id);
      try {
        if (this.comment_text) {
          Nprogress.start();
          const data = await this.$store.dispatch("dashboard/sendComment", {
            comment: this.comment_text,
            post_id: post_id,
          });
          console.log("data >> ", data);
          this.showSuccessNotification(data.message);
          Nprogress.done();
          this.comment_text = "";
          this.fetchPost();
        }
      } catch (error) {
        console.log("error > ", error);
      }
    },
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
.c-comment-box {
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  max-height: 20rem;
  overflow-y: scroll;
  overflow-x: wrap;
}

.c-comment-box::-webkit-scrollbar {
  width: 0px !important;
  height: 4px !important;
}

/* Track */
.c-comment-box::-webkit-scrollbar-track {
  background-color: #fbfbfb;
  width: 7px !important;
}

/* Handle */
.c-comment-box::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 10px;
  width: 7px !important;
}

/* Handle on hover */
.c-comment-box::-webkit-scrollbar-thumb:hover {
  background-color: #6d7be0;
}
</style>

<style>
.bor0 {
  border-radius: 50%;
}
.size-109 {
  width: 45px;
  height: 45px;
}
.of-hidden {
  overflow: hidden;
}
.wrap-pic-s {
  display: block;
}
.c-review-img-name {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  vertical-align: middle;
  transform: translateY(0.4rem);
  color: white;
}
.c-bg-success {
  background-color: #4f87a7;
}
</style>
