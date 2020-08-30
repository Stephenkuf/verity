<template>
  <section class="groups m t-3 bg-white p-3 my-3">
    <h3 class="f-16 f-bold">My Groups</h3>

    <div class="row mt-3" v-for="(each_group, i) in groups" :key="i">
      <div class=" col-lg-3">
        <img
          :src="
            each_group.groups.profile_photo
              ? each_group.groups.profile_photo
              : '/assets/images/group-4.png'
          "
          class="w-40"
          style="width: 40px !important;"
          alt="user"
        />
      </div>
      <div class="col-lg-6 px-0">
        <p
          class="f-12 f-bold c-brand mb-0"
          :class="!each_group.is_admin && 'mt-2'"
          style="cursor: pointer"
        >
          {{ each_group.groups.group_name }}
        </p>
        <span v-if="each_group.is_admin" class="f-10 f-bold c-grey">Admin</span>
      </div>
      <!-- <div class="col-lg-3  px-0 text-right pr-2">
        <p class="c-brand f-14 f-med">Join</p>
      </div> -->
    </div>
    <div class="text-center c-brand f-med mt-3 mb-3">
      View all
    </div>
  </section>
</template>

<script>
export default {
  name: "MyGroups",
  props: {
    groups: {
      type: Array,
    },
  },
  methods: {},
  async mounted() {},
};
</script>

<style></style>
