<template>
  <section class="posts">
    <div class="d-flex justify-content-between">
      <appChurchOrganizationHeader
        :title="'Register Manager'"
        :sub_title="'Manage all attendance registered in the system'"
      />
      <div class="">
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#CreateRegister"
        >
          Create Register
        </button>
      </div>
    </div>

    <section class="row justify-content-between mx-0 pb-1 px-0 ">
      <div
        class="col-12 col-md-6 mb-4 px-2  my-0 "
        v-for="(i, k) in 5"
        :key="k"
      >
        <appRegisterManagerCard />
      </div>
    </section>
    <appCreateRegister />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appRegisterManagerCard from "@/components/UI/RegisterManagerCard";
import appCreateRegister from "@/components/Modal/CreateRegister";
export default {
  name: "ViewResource",
  components: {
    appChurchOrganizationHeader,
    appRegisterManagerCard,
    appCreateRegister,
  },
};
</script>
