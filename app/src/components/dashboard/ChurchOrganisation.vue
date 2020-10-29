<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-3">
        <appChurchOrganisationSidebar />
        <appChurchBranch />

        <!-- <div class="resources-section p-3 mt-3 bg-white">
          <h3 class="f-18 c-dark">Resources</h3>

          <input class="form-control" placeholder="search" />
          <p class="f-12 c-grey f-med">Search by state, area, name...</p>
          <div class="resources mt-3 bg-white">
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <li class="list-unstyled mt-2">
              <a class="f-16 f-med" href="">Messages (video)</a>
              <br />
              <span class="c-grey f-12 f-med">250 different types</span>
            </li>
            <a
              href="resources.html"
              class="btn bg-brand btn-md btn-block white-text"
              >View all Resources</a
            >
          </div>
        </div> -->
      </div>

      <div class="col-md-9">
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
        <!-- <section class="old-post bg-white border p-4">

            <div class="post-header">
              <div class="row justify-content-between">
                <div class="col-9 col-md-7 col-lg-7">
                  <div class="row">
                    <div class="col-4 col-md-3 col-lg-3 pr-0 ">
                      <img
                        src="/assets/images/user_2.png"
                        class="img-fluid "
                        alt="logged in user"
                      />
                    </div>
                    <div class="col-7 col-md-9 col-lg-6 pl-0">
                      <p class="c-brand f-14 f-bold mb-0">David Akinbami</p>
                      <p class="c-grey f-12 f-med">4 hrs Ago</p>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-md-2 col-lg-3">
                  <button
                    class="btn btn-sm bg-transparent border-0 pull-right no-bs no-bs--show"
                  >
                    <i class="fa fa-ellipsis-h f-16 c-blue"></i>
                  </button>
                </div>
              </div>
              <div class="mt-4">
                <p class=" f-12 f-med">
                  Frontier for growth in the development of local expertise in
                  the subsea of oil and gas industry and that Brisktrode will
                  play a key role in driving this agenda. Frontier for growth in
                  the development of local expertise in the subsea of oil and
                  gas industry and that Brisktrode will play a key role in
                  driving this agenda. Frontier for growth in the development of
                  local expertise in the subsea of oil and gas industry and that
                  Brisktrode will play a key role in driving this agenda.
                </p>
                <div class="attached-img">
                  <a
                    v-for="i in 5"
                    :key="i"
                    href="/assets/images/post_4.jpg"
                    class="lightbox-img p-2"
                    data-lightbox="posts"
                    data-title="My post image"
                  >
                    <img
                      src="/assets/images/post_4.jpg"
                      class="w-100"
                      alt="user post"
                    />
                  </a>
                </div>
              </div>
              <div class=" mt-3 px-3">
                <div class="row justify-content-between">
                  <div class="col-9 col-lg-9 pl-0">
                    <button
                      class="post-likes btn btn-sm no-bs c-blue f-14 f-bold"
                    >
                      <i class="far fa-heart f-16"></i>
                      20 likes
                    </button>
                    <button
                      class="view-comment btn btn-sm no-bs c-blue f-14 f-bold"
                    >
                      <i class="far fa-comment mr-2 f-16"></i>
                      12 comments
                    </button>
                  </div>
                  <div class="col-3 col-lg-3 text-right px-0">
                    <i class="far fa-bookmark c-blue"></i>
                  </div>
                </div>
              </div>
              <div class="comments hide mt-5">
                <div
                  class="partial-comments scrollbar scrollbar-teal"
                  id="partial_comments"
                >
                  <div class="forc-overflow"></div>
                  <div class="media">
                    <img
                      class="d-flex mr-3"
                      src="assets/images/user_3.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body f-12 f-med">
                      <h5 class="mt-0 font-weight-bold c-brand f-13">
                        Adekunle Ayo
                      </h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.

                      <div class="media mt-4">
                        <a class="d-flex pr-3" href="#">
                          <img
                            src="assets/images/user_3.png"
                            alt="Generic placeholder image"
                          />
                        </a>
                        <div class="media-body f-12 f-med">
                          <h5 class="mt-0 font-weight-bold c-brand f-13">
                            Tobi Smith
                          </h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media mt-4">
                    <img
                      class="d-flex mr-3"
                      src="assets/images/user_3.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body f-12 f-med">
                      <h5 class="mt-0 font-weight-bold c-brand f-13">
                        Adekunle Ayo
                      </h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.

                      <div class="media mt-4">
                        <a class="d-flex pr-3" href="#">
                          <img
                            src="assets/images/user_3.png"
                            alt="Generic placeholder image"
                          />
                        </a>
                        <div class="media-body f-12 f-med">
                          <h5 class="mt-0 font-weight-bold c-brand f-13">
                            Tobi Smith
                          </h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-md btn-brand text-white mt-5 font-weight-bold hide"
                    id="show_more"
                  >
                    show more
                  </button>
                </div>
              </div>
              <div class="comment-box mt-4">
                <div class="row">
                  <div class="col-2 col-md-2 pr-0 pt-3">
                    <img
                      src="/assets/images/user_3.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="col-10 col-md-10 pl-0">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-right-0"
                        placeholder="Comment..."
                        aria-label="Comment..."
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text border-left-0"
                          id="basic-addon2"
                        >
                          <i class="fa fa-image c-blue"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> -->
      </div>
    </div>
  </div>
</template>

<script>
import appChurchOrganisationSidebar from "@/components/includes/ChurchOrganisationSidebar";
import appChurchBranch from "@/components/UI/ChurchBranch";

export default {
  name: "ChurchOrganisationDashboard",
  components: {
    appChurchOrganisationSidebar,
    appChurchBranch,
  },
};
</script>

<style>
.c-co-card {
  font-weight: 400;
  border: 1px solid #dedede;
  background: white;
}
.c-label {
  font-weight: bold;
  color: #3e3e3e;
}
.c-input {
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-leave {
  position: fixed;
  top: 700px;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
  opacity: 0;
  transform: translateX(20px);
}
</style>
