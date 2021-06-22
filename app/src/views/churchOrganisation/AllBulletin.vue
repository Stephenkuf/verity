<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All Bulletin'"
      :sub_title="'View all bulletin in the system'"
    />
    <section class="row mx-0 pb-1 px-0 " v-if="data_array && data_array.length">
      <div
        class="col-12 mb-4 c-co-card row mx-0 px-0 my-0 c-resource-card"
        data-toggle="modal"
        data-target="#ViewChurchBulletin"
        v-for="(data, k) in data_array"
        :key="k"
        @click="open_modal(data)"
      >
        <div
          v-if="false"
          class="d-none d-md-block px-0 col-md-3"
          style="min-height: 12rem; overflow: hidden"
        >
          <img
            src="/assets/images/bg-locate.png"
            alt="bulletin img"
            class="c-resource-img"
          />
          <span class="c-resource-background-overlay"></span>
        </div>
        <div class="col-12 col-md-12 my-2 py-3 px-4" style="min-height: 12rem;">
          <div class="d-flex">
            <div>
              <p class="f-24 font-weight-bold mb-0 text-uppercase c-brand">
                {{ data.bulletin_subject }}
              </p>
              <span class="c-resource-date">{{ data.created_at }}</span>
            </div>
          </div>
          <div>
            <p class="mt-3">
              {{ data.bulletin_body }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <PlaceHolder :message="'bulletins'" :imageTitle="'nofeed.svg'" v-else>
      <p slot="placeholder-content">
        Start by creating a bulletin
      </p>
    </PlaceHolder>
    <appViewChurchBulletin />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appViewChurchBulletin from "@/components/Modal/ViewChurchBulletin";
import Nprogress from "nprogress";
export default {
  name: "AllBulletin",
  data() {
    return {
      data_array: [],
    };
  },
  components: {
    appChurchOrganizationHeader,
    appViewChurchBulletin,
  },
  methods: {
    open_modal(data) {
      console.log("data >> ", data);
      this.$store.state.church_organisation.single_bulletin = data;
    },
    async get_bulletin() {
      try {
        const get_bulletin = await this.$store.dispatch(
          "church_organisation/allBulletin"
        );
        console.log("get_bulletin >> ", get_bulletin);
        this.$store.state.church_organisation.all_bulletin =
          get_bulletin.result;
        this.data_array = get_bulletin.data;
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
  async mounted() {
    await this.get_bulletin();
  },
};
</script>
