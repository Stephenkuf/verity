<template>
  <section class="posts">
    <appChurchOrganizationHeader
      :title="'All resources'"
      :sub_title="'View all resources in the system'"
    />
    <section class="row mx-0 pb-1 px-0 ">
      <div
        class="col-12 mb-4 c-co-card row mx-0 px-0 my-0 c-resource-card"
        data-toggle="modal"
        data-target="#ViewChurchRequestModal"
        v-for="(i, k) in 5"
        :key="k"
      >
        <div
          class="d-none d-md-block px-0 col-md-3"
          style="min-height: 12rem; overflow: hidden"
        >
          <img
            src="/assets/images/bg-locate.png"
            alt="resource img"
            class="c-resource-img"
          />
          <span class="c-resource-background-overlay"></span>
        </div>
        <div class="col-12 col-md-9 my-2" style="min-height: 12rem;">
          <div class="d-flex">
            <div>
              <p class="f-24 font-weight-bold mb-0 text-uppercase c-brand">
                This is a new resource
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
    <appViewChurchResource />
  </section>
</template>

<script>
import appChurchOrganizationHeader from "@/components/UI/ChurchOrganizationHeader";
import appViewChurchResource from "@/components/Modal/ViewChurchResource";
export default {
  name: "ViewResource",
  components: {
    appChurchOrganizationHeader,
    appViewChurchResource,
  },
};
</script>

<style>
.c-resource-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.c-resource-date {
  margin-top: 0;
  display: block;
  font-size: 90%;
  font-weight: 600;
  color: #aaa;
}
.c-resource-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2b2b2b59;
}
.c-resource-card {
  cursor: pointer;
  box-shadow: 0 0 0.3rem #b1afaf;
  transition: all 0.3s ease-in-out;
}
.c-resource-card:focus,
.c-resource-card:hover {
  box-shadow: 0 0 0.1rem #b1afaf;
}
</style>
