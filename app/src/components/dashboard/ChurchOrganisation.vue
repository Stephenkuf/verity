<template>
  <div
    class="mt-3"
    :class="
      $route.name == 'ChurchEmail' ||
      $route.name == 'NewRequest' ||
      $route.name == 'RejectedRequest' ||
      $route.name == 'CreateRequest' ||
      $route.name == 'CreateResource' ||
      $route.name == 'CreateBulletin' ||
      $route.name == 'ViewResource' ||
      $route.name == 'AllBulletin' ||
      $route.name == 'RegisterManager' ||
      $route.name == 'AcceptedRequest'
        ? 'co_container'
        : 'container'
    "
  >
    <div class="row justify-content-center">
      <div class="col-md-3">
        <appChurchOrganisationSidebar :profile="profile_data" />
        <appChurchBranch v-if="false" />
      </div>

      <div class="col-md-9">
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import appChurchOrganisationSidebar from "@/components/includes/ChurchOrganisationSidebar";
import appChurchBranch from "@/components/UI/ChurchBranch";
import Nprogress from "nprogress";

export default {
  name: "ChurchOrganisationDashboard",
  data() {
    return {
      profile_data: {},
    };
  },
  components: {
    appChurchOrganisationSidebar,
    appChurchBranch,
  },
  methods: {
    async get_user_profile() {
      try {
        const get_profile = await this.$store.dispatch("dashboard/viewProfile");
        console.log("get_profile >> ", get_profile);
        this.profile_data = get_profile.result[0];
        this.$store.state.church_organisation.profile = this.profile_data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.get_user_profile();
  },
};
</script>

<style>
.c-co-card {
  font-weight: 400;
  border: 1px solid #dedede;
  background: white;
}
.c-label {
  font-weight: bold;
  color: #3e3e3e;
}
.c-input {
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-leave {
  position: fixed;
  top: 700px;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
  opacity: 0;
  transform: translateX(20px);
}
</style>
