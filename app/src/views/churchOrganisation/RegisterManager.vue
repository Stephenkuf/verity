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

    <section class="row justify-content-between mx-0 pb-1 px-0 " v-if="data_array.length">
      <div
        class="col-12 col-md-6 mb-4 px-2  my-0 "
        v-for="(i, k) in data_array"
        
        :key="k"
      >
        <appRegisterManagerCard />
      </div>
    </section>
    <PlaceHolder :message="'register'" :imageTitle="'nofeed.svg'" v-else>
      <p slot="placeholder-content">
        Start by creating a register
      </p>
    </PlaceHolder>

    <appCreateRegister @triggerMyRegister="triggerMyRegister" />
  </section>
</template>

<script>
import Nprogress from "nprogress";
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
  data() {
    return {
      data_array: [],
    };
  },
  methods: {
    async get_register() {
      try {
        const get_register = await this.$store.dispatch(
          "church_organisation/getRegister"
        );
        console.log("get_register >> ", get_register);
        // this.data_array = get_register.data.map((each_data) => {
        //   return {
        //     ...each_data,
        //     requests: {
        //       request_body: each_data.request_body,
        //       request_title: each_data.request_title,
        //     },
        //   };
        // });
        this.data_array = get_register.data

        console.log("this.data_array >> ", this.data_array);
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
    async triggerMyRegister() {
      await this.get_register();
    },
  },
  async mounted() {
    await this.get_register();
  },
};
</script>
