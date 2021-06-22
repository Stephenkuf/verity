<template>
  <div class="resources-section p-0 card bg-white ">
    <div class="p-3 v-background">
      <h3 class="f-18 c-dark font-weight-bold v-text-primary">Friends</h3>

      <input class="form-control" placeholder="search" />
    </div>

    <div class="resources pt-0 bg-white">
      <li
        class="list-unstyled py-2 px-3 v-hover-list"
        v-for="(each_friend, i) in friends"
        :key="i"
        @click.prevent="select_chat(each_friend)"
      >
        <a class="f-16 f-med d-block" href=""
          >{{ each_friend.followers[0].full_name }} ({{
            each_friend.followers[0].username
          }})</a
        >
        <span class="c-grey f-12 f-med">{{
          each_friend.followers[0].email
        }}</span>
      </li>

      <!-- <a href="resources.html" class="btn bg-brand btn-md btn-block white-text"
        >View all Resources</a
      > -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendList",
  props: {
    friends: {
      type: Array,
    },
  },
  methods: {
    select_chat(each_friend) {
      this.$emit("select_chat", each_friend);
    },
  },
};
</script>

<style>
.v-text-primary {
  color: #0d5b8c;
}
.v-bb-primary {
  border-bottom: 1px solid #528aa4;
}
.v-hover-list {
  cursor: pointer;
}
.v-hover-list:hover {
  background: #eee;
  border: 1px solid #ccc;
}
.v-background {
  background: #eee;
  border: 1px solid #ccc;
}
</style>
