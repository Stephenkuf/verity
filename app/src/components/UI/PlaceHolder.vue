<template>
  <div class="card py-5" :class="margin_style || 'my-3'">
    <div class="text-center">
      <img
        :src="`/assets/svg/${imageTitle}`"
        alt
        :style="{ width: img_width ? img_width : '100px;' }"
      />
      <br>
      <br>
      <h5 class="defaultTitle" v-if="message == 'Settlement Account'">
        You have not created any {{ message }}
      </h5>
      <h5 class="defaultTitle" v-else>There are currently no {{ message }}</h5>
      <slot name="placeholder-content"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageTitle: {
      type: String,
      default: "note.svg",
    },
    message: {
      type: String,
    },
    margin_style: {
      type: String,
    },
    img_width: {
      type: String,
    },
  },
};
</script>

<style scoped>
.default-ImageEmpty {
  height: 30vh;
}
</style>
