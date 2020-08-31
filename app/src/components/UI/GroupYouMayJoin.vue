<template>
  <section class="groups m t-3 bg-white mb-3 p-3" v-if="groups.length">
    <h3 class="f-16 f-bold mb-3">Groups you may like to join</h3>

    <div class="row mt-3" v-for="(each_group, i) in groups" :key="i">
      <div class=" col-lg-3">
        <img
          :src="
            each_group.profile_photo
              ? each_group.profile_photo
              : '/assets/images/group-4.png'
          "
          class="w-40"
          style="width: 40px !important;"
          alt="group img"
        />
      </div>
      <div class="col-lg-6 px-0">
        <p class="f-12 f-bold c-brand mb-0">
          {{ each_group.group_name }}
        </p>
        <span class="f-10 f-bold c-grey"
          >{{ each_group.__meta__.members_count }} Members</span
        >
      </div>
      <div class="col-lg-3  px-0 text-right pr-2">
        <p class="c-brand f-14 f-med text-right">
          <span style="cursor: pointer;" @click="joinGroup(each_group.id)"
            >Join</span
          >
        </p>
      </div>
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </section>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
export default {
  name: "GroupYouMayJoin",
  data() {
    return {
      groups: [],
    };
  },
  mixins: [notifications],
  methods: {
    async joinGroup(group_id) {
      try {
        Nprogress.start();
        const join_group = await this.$store.dispatch(
          "dashboard/joinGroup",
          group_id
        );
        console.log("join_group >> ", join_group);
        this.showSuccessNotification(join_group.message);
        Nprogress.done();
        await this.groupToJoin();
        this.$emit("triggerMyGroup");
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async groupToJoin() {
      try {
        const get_people = await this.$store.dispatch(
          "dashboard/getNonJoinedGroup"
        );
        console.log("get_people >> ", get_people);
        this.groups = get_people.result;
      } catch (error) {
        console.log("error >> ", error);
      }
    },
  },
  async mounted() {
    await this.groupToJoin();
  },
};
</script>

<style></style>
