<template>
  <div id="app">
    <app-body></app-body>
  </div>
</template>

<script>
import Body from "@/components/includes/BodyWrapper";

export default {
  name: "App",
  components: {
    appBody: Body,
  },
};
</script>
