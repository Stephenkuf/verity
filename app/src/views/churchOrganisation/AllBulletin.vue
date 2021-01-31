<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All Bulletin'"
      :sub_title="'View all bulletin in the system'"
    />
    <section class="row mx-0 pb-1 px-0 ">
      <div
        class="col-12 mb-4 c-co-card row mx-0 px-0 my-0 c-resource-card"
        data-toggle="modal"
        data-target="#ViewChurchBulletin"
        v-for="(i, k) in 5"
        :key="k"
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
                This is a new bulletin
              </p>
              <span class="c-resource-date">November 12 2020, 9:30 PM</span>
            </div>
          </div>
          <div>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              consectetur, sequi harum laborum reiciendis iure facere
              repellendus. Voluptate dolores architecto cum tenetur similique,
              repellat laudantium obcaecati facilis.
            </p>
          </div>
        </div>
      </div>
    </section>
    <appViewChurchBulletin />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appViewChurchBulletin from "@/components/Modal/ViewChurchBulletin";
export default {
  name: "ViewResource",
  components: {
    appChurchOrganizationHeader,
    appViewChurchBulletin,
  },
};
</script>
