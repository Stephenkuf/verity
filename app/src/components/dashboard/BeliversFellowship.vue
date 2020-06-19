<template>
  <div>
    <div class="nav__tabs">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <ul class="nav nav-tabs nav-fill bg-white">
              <li class="nav-item mb-0">
                <a
                  class="nav-link"
                  :class="selected_tab == 'general-tab' && 'active'"
                  @click.prevent="selected_tab = 'general-tab'"
                  >General</a
                >
              </li>
              <li class="nav-item mb-0">
                <a
                  class="nav-link"
                  :class="selected_tab == 'denomination-tab' && 'active'"
                  @click.prevent="selected_tab = 'denomination-tab'"
                >
                  Denomination
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="tab-content" id="myTabContent">
        <div>
          <div class="row justify-content-center">
            <div class="col-md-3">
              <!-- user details -->
              <div class="user-section bg-white">
                <div class="general-block"></div>
                <img
                  src="/assets/images/user_1.png"
                  class="img-fluid"
                  alt="user big"
                />
                <div class="user-details text-center pb-3">
                  <p class="f-14 f-bold c-blk mb-0">Akintunde Williams</p>
                  <p class="f-12 f-med c-grey">
                    Administrative officer for Deeper Life <br />
                    Bible Church
                  </p>
                </div>
              </div>
              <div class="user__social-stats row mx-0 mt-2 bg-white px-2 py-3">
                <div class="col-md-7 c-grey f-med f-14">
                  <p>Followers</p>
                  <p>Following</p>
                  <p>Post</p>
                  <p>Groups</p>
                </div>
                <div class="col-md-5 c-brand f-med f-14 text-right">
                  <p>52</p>
                  <p>102</p>
                  <p>12</p>
                  <p>5</p>
                </div>
              </div>

              <div class="resources-section p-3 mt-3 bg-white">
                <p
                  class="c-brand f-bold pointer"
                  data-toggle="modal"
                  data-target="#group"
                >
                  Create a Group
                </p>
                <p
                  class="c-brand f-bold pointer"
                  data-toggle="modal"
                  data-target="#topic"
                >
                  Create a Topic
                </p>
              </div>
            </div>
            <div class="col-md-6" v-if="selected_tab == 'general-tab'">
              <section class="posts">
                <section class="create-post p-3">
                  <div class="media">
                    <img
                      src="/assets/images/user_2.png"
                      class="mr-3"
                      alt="logged in user"
                    />
                    <div class="media-body">
                      <input
                        type="text"
                        class="create-post-input f-14 f-bold"
                        placeholder="Create a post..."
                      />
                      <div class="uploads mt-3">
                        <input type="file" class="upload-input" />
                        <button
                          class="btn add-btn c-brand f-bold btn-md-block "
                        >
                          <i class="fa fa-image mr-2"></i>Add branch
                        </button>
                        <button class="btn add-btn c-brand f-bold ml-3">
                          <i class="fa fa-tag c-brand mr-1"></i>
                          Tag Members
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="old-post bg-white border p-4">
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
                            <p class="c-brand f-14 f-bold mb-0">
                              David Akinbami
                            </p>
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
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                      </p>
                      <img
                        src="/assets/images/post_1.png"
                        class="w-100"
                        alt="user post"
                      />
                    </div>
                    <div class=" mt-3 px-3">
                      <div class="row justify-content-between">
                        <div class="col-9 col-lg-6">
                          <span class="post-likes c-blue f-14 mr-3 f-bold">
                            <i class="far fa-heart mr-2 f-16"></i>
                            20 likes
                          </span>
                          <span class="post-comment c-blue f-14 f-bold">
                            <i class="far fa-comment mr-2 f-16"></i>
                            12 comments
                          </span>
                        </div>
                        <div class="col-3 col-lg-3 text-right px-0">
                          <i class="far fa-bookmark c-blue"></i>
                        </div>
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
                </section>
              </section>
            </div>
            <div class="col-md-6" v-if="selected_tab == 'denomination-tab'">
              <section class="posts">
                <section class="create-post p-3">
                  <div class="media">
                    <img
                      src="/assets/images/user_2.png"
                      class="mr-3"
                      alt="logged in user"
                    />
                    <div class="media-body">
                      <input
                        type="text"
                        class="create-post-input f-14 f-bold"
                        placeholder="Create a post..."
                      />
                      <div class="uploads mt-3">
                        <input type="file" class="upload-input" />
                        <button
                          class="btn add-btn c-brand f-bold btn-md-block "
                        >
                          <i class="fa fa-image mr-2"></i>Add branch
                        </button>
                        <button class="btn add-btn c-brand f-bold ml-3">
                          <i class="fa fa-tag c-brand mr-1"></i>
                          Tag Members
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="old-post bg-white border p-4">
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
                            <p class="c-brand f-14 f-bold mb-0">
                              David Akinbami
                            </p>
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
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                        Frontier for growth in the development of local
                        expertise in the subsea of oil and gas industry and that
                        Brisktrode will play a key role in driving this agenda.
                      </p>
                      <img
                        src="/assets/images/post_1.png"
                        class="w-100"
                        alt="user post"
                      />
                    </div>
                    <div class=" mt-3 px-3">
                      <div class="row justify-content-between">
                        <div class="col-9 col-lg-6">
                          <span class="post-likes c-blue f-14 mr-3 f-bold">
                            <i class="far fa-heart mr-2 f-16"></i>
                            20 likes
                          </span>
                          <span class="post-comment c-blue f-14 f-bold">
                            <i class="far fa-comment mr-2 f-16"></i>
                            12 comments
                          </span>
                        </div>
                        <div class="col-3 col-lg-3 text-right px-0">
                          <i class="far fa-bookmark c-blue"></i>
                        </div>
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
                </section>
              </section>
            </div>
            <div class="col-md-3">
              <section class="sidebar__right ">
                <div
                  class=" text-center bg-white py-3 mb-2"
                  v-if="selected_tab == 'denomination-tab'"
                >
                  <img src="/assets/images/church_logo.png" alt="" />
                  <p class="font-weight-bold">Deeper Life Bible Church</p>
                </div>
                <!-- FRIENDS SUGGESTIONS -->
                <div class="bg-white p-3">
                  <h3 class="text-center c-brown f-16 f-bold">
                    People you may know
                  </h3>
                  <div class="row mt-3" v-for="i in 5" :key="i">
                    <div class="col-12 col-lg-3">
                      <img
                        src="/assets/images/user_2.png"
                        class="w-40"
                        alt="user"
                      />
                    </div>
                    <div class="col-12 col-lg-6 px-0">
                      <p class="f-12 f-med c-brand mb-0 ml-2">David Akinbami</p>
                      <p class="f-10 f-med c-grey ml-2">
                        Deeper Life Bible Church
                      </p>
                    </div>
                    <div class="col-12 col-lg-3  px-0">
                      <p class="c-brand f-14 f-med">Follow</p>
                    </div>
                  </div>
                  <div class="text-center c-brand f-med mt-3 mb-3">
                    View all
                  </div>
                </div>
                <!-- Groups -->
                <section class="groups m t-3 bg-white p-3">
                  <h3 class="f-16 f-bold">Groups you may like to join</h3>

                  <div class="row mt-3" v-for="i in 5" :key="i">
                    <div class=" col-lg-3">
                      <img
                        src="/assets/images/group-4.png"
                        class="w-40"
                        alt="user"
                      />
                    </div>
                    <div class="col-lg-6 px-0">
                      <p class="f-12 f-bold c-brand mb-0">
                        Redeem Youth Church
                      </p>
                      <span class="f-10 f-bold c-grey"
                        >Deeper Life Bible Church</span
                      >
                    </div>
                    <div class="col-lg-3  px-0 text-right pr-2">
                      <p class="c-brand f-14 f-med">Join</p>
                    </div>
                  </div>
                  <div class="text-center c-brand f-med mt-3 mb-3">
                    View all
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="denomination"
          role="tabpanel"
          aria-labelledby="denomination-tab"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeliversFellowshipDashBoard",
  data() {
    return {
      selected_tab: "general-tab",
    };
  },
};
</script>

<style></style>
