<template>
  <section class="groups m t-3 bg-white p-3">
    <h3 class="f-16 f-bold mb-3">Groups you may like to join</h3>

    <div class="row mt-3" v-for="(each_group, i) in groups" :key="i">
      <div class=" col-lg-3">
        <img src="/assets/images/group-4.png" class="w-40" alt="user" />
      </div>
      <div class="col-lg-6 px-0">
        <p class="f-12 f-bold c-brand mb-0">
          Redeem Youth Church
        </p>
        <span class="f-10 f-bold c-grey">3 Members</span>
      </div>
      <div class="col-lg-3  px-0 text-right pr-2">
        <p class="c-brand f-14 f-med text-right">
          <span style="cursor: pointer;">Join</span>
        </p>
      </div>
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </section>
</template>

<script>
export default {
  name: "GroupYouMayJoin",
  data() {
    return {
      groups: [],
    };
  },
  method: {
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
