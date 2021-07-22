<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// import Nprogress from "nprogress";

export default {
  name: "DirectoryEventLocatorDashboard",
  data() {
    return {
      profile_data: {},
    };
  },
  components: {},
  methods: {
    // async get_user_profile() {
    //   try {
    //     const get_profile = await this.$store.dispatch("dashboard/viewProfile");
    //     console.log("get_profile >> ", get_profile);
    //     this.profile_data = get_profile.result[0];
    //     this.$store.state.church_organisation.profile = this.profile_data;
    //   } catch (error) {
    //     console.log("error >> ", error);
    //     Nprogress.done();
    //   }
    // },
  },
  async mounted() {
    // await this.get_user_profile();
  },
};
</script>

<style></style>
