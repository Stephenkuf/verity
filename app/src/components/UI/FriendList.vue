<template>
  <div class="resources-section p-0 card bg-white ">
    <div class="p-3 v-background">
      <h3 class="f-18 c-dark font-weight-bold v-text-primary">Friends</h3>

      <input class="form-control" placeholder="search" />
    </div>

    <div class="resources pt-0 bg-white">
      <li class="list-unstyled py-2 px-3 v-hover-list" v-for="i in 10" :key="i">
        <a class="f-16 f-med d-block" href="">Stephen Kuforiji (stephen10)</a>
        <span class="c-grey f-12 f-med">stephen.kufo@gmail.com</span>
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
