<template>
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
          Frontier for growth in the development of local expertise in the
          subsea of oil and gas industry and that Brisktrode will play a key
          role in driving this agenda. Frontier for growth in the development of
          local expertise in the subsea of oil and gas industry and that
          Brisktrode will play a key role in driving this agenda. Frontier for
          growth in the development of local expertise in the subsea of oil and
          gas industry and that Brisktrode will play a key role in driving this
          agenda.
        </p>
        <img src="/assets/images/post_1.png" class="w-100" alt="user post" />
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
            <img src="/assets/images/user_3.png" class="img-fluid" alt="" />
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
                <span class="input-group-text border-left-0" id="basic-addon2">
                  <i class="fa fa-image c-blue"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SinglePost",
};
</script>

<style></style>
