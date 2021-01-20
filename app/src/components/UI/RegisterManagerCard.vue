<template>
  <div class="row mx-0 py-4 px-5 c-co-card" style="border-radius: .5rem;">
    <div class="w-100">
      <p class="f-20 font-weight-bold mb-0 text-uppercase">
        {{data.register && data.register.register_name}}
      </p>
      <span class="c-resource-date">{{data.register && data.register.register_date}}</span>
      <div class="mt-3" style="color: #0b6391;">
        <div class="d-flex justify-content-between">
          <p class="f-20 font-weight-bold text-capitalize">
            Number of male
          </p>
          <p class="f-20">-------</p>
          <p class="f-20 font-weight-bold">{{data.register && data.register.total_males}}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="f-20 font-weight-bold text-capitalize">
            Number of female
          </p>
          <p class="f-20">-------</p>
          <p class="f-20 font-weight-bold">{{data.register && data.register.total_females}}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="f-20 font-weight-bold text-capitalize">
            Total Number
          </p>
          <p class="f-20">-------</p>
          <p class="f-20 font-weight-bold">{{data.register && data.register.total_members}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterManagerCard",
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style></style>
