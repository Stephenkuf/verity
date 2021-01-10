<template>
  <section class="px-0 pb-3">
    <p class="c-co-thead">{{ title }}</p>
    <p class="c-co-tsub">{{ sub_title }}.</p>
  </section>
</template>

<script>
export default {
  name: "ChurchOrganizationHeader",
  props: {
    title: String,
    sub_title: String,
  },
};
</script>

<style>
.c-co-thead {
  font-weight: bold;
  font-size: 150%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: #383838f7;
}
.c-co-tsub {
  font-size: 90%;
}
</style>
