<template>
  <div class="bg-white w-100">
    <div class="row mx-0">
      <div class="col-12 m-0 p-0">
        <div
          class="d-flex align-items-center justify-content-center w-100"
          style="height: 15rem; border-bottom: 2px solid #eee"
        >
          <div>
            <span
              class="d-flex mx-auto align-items-center text-uppercase text-white c-co-sidebar-imag"
              >{{
                profile.full_name &&
                  profile.full_name.split(" ")[0][0].toUpperCase()
              }}{{
                profile.full_name &&
                  profile.full_name.split(" ")[1] &&
                  profile.full_name.split(" ")[1][0].toUpperCase()
              }}</span
            >
            <div class="mt-2">
              <div class="">
                <p
                  class="f-14 f-bold c-blk mb-0 c-hov"
                  style="cursor: pointer;"
                >
                  Deeper Life Bibe Church ({{
                    profile.user_role && profile.user_role.role_label
                  }})
                </p>
                <p
                  class="f-12 f-med c-grey mb-0 text-center"
                  style="cursor: pointer;"
                >
                  {{ profile.full_name }} ({{ profile.username }})
                </p>
                <p
                  class="f-12 f-med c-grey text-center"
                  style="cursor: pointer;"
                >
                  {{ profile.email }} | {{ profile.phone_number }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 m-0 p-0 mt-5">
        <div class="w-100 mb-5">
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'denomination' }"
            style="color: #555;"
            @click="
              clickLink(
                'denomination',
                '/account/dashboard/directory-event-locator'
              )
            "
          >
            <div>
              <span><i class="fa fa-home pr-4" aria-hidden="true"></i></span>
              <span class="font-weight-bold">Denominations</span>
            </div>
            <div></div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'create_event' }"
            style="color: #555;"
            @click="
              clickLink(
                'create_event',
                '/account/dashboard/directory-event-locator/create-event'
              )
            "
          >
            <div>
              <span><i class="fa fa-plus pr-4" aria-hidden="true"></i></span>
              <span class="font-weight-bold">Create Event</span>
            </div>
            <div></div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'all_event' }"
            style="color: #555;"
            @click="
              clickLink(
                'all_event',
                '/account/dashboard/directory-event-locator/all-event'
              )
            "
          >
            <div>
              <span
                ><i class="fa fa-calendar pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">All Events</span>
            </div>
            <div></div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'denomination_event' }"
            style="color: #555;"
            @click="
              clickLink(
                'denomination_event',
                '/account/dashboard/directory-event-locator/denomination-event'
              )
            "
          >
            <div>
              <span
                ><i class="fa fa-calendar pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">Denomination Events</span>
            </div>
            <div></div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            v-if="
              profile.user_role &&
                profile.user_role.role_label != 'Denomination'
            "
            :class="{ active: get_active_sidebar == 'branch_event' }"
            style="color: #555;"
            @click="
              clickLink(
                'branch_event',
                '/account/dashboard/directory-event-locator/branch-event'
              )
            "
          >
            <div>
              <span
                ><i class="fa fa-calendar pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">Branch Events</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDirectoryLocatorSidebar",
  props: {
    profile: Object,
  },
  computed: {
    get_active_sidebar() {
      return this.$store.state.directory_event_locator.sidebar_active.main;
    },
    get_active_sub_sidebar() {
      return this.$store.state.directory_event_locator.sidebar_active.sub;
    },
  },
  methods: {
    clickLink(params, params2 = null) {
      this.$store.state.directory_event_locator.sidebar_active.sub = "";
      this.$store.state.directory_event_locator.sidebar_active.main = params;
      if (params2) {
        this.$router.push(params2).catch(() => {});
      }
    },
    clickLink2(params, params2 = null) {
      this.$store.state.directory_event_locator.sidebar_active.sub = params;
      if (params2) {
        this.$router.push(params2).catch(() => {});
      }
    },
  },
};
</script>

<style>
.c-co-sidebar-imag {
  width: 5rem;
  height: 5rem;
  background: #0b6391;
  border-radius: 1rem;
  font-size: 250%;
  font-weight: 600;
  justify-content: center;
}
.c-co-pointer {
  cursor: pointer;
}
.c-co-link:hover,
.c-co-link.active {
  color: #0b6391 !important;
  background: #efefef85;
  border-left: 3px solid #0b6391;
}
.c-co-sub-link:hover,
.c-co-sub-link.active {
  color: #0b6391 !important;
  font-weight: bold;
}
.c-pl-5 {
  padding-left: 2rem !important;
}
.VueTables__heading {
  font-weight: bold;
}
</style>
