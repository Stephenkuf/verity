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
            :class="{ active: get_active_sidebar == 'mails' }"
            style="color: #555;"
            @click="
              clickLink('mails', '/account/dashboard/church-organisation')
            "
          >
            <div>
              <span
                ><i class="fa fa-envelope pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">Mails</span>
            </div>
            <div></div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'request' }"
            style="color: #555;"
            @click="clickLink('request')"
          >
            <div>
              <span
                ><i class="fa fa-question pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">Request</span>
            </div>
            <div>
              <span
                ><i class="fa fa-angle-right text-right" aria-hidden="true"></i
              ></span>
            </div>
          </div>
          <div
            class="py-3 "
            style="background: #f7f7f7;color: #555555;"
            v-if="get_active_sidebar == 'request'"
          >
            <div
              v-if="
                profile.user_role &&
                  profile.user_role.role_label &&
                  profile.user_role.role_label.toLowerCase() == 'user'
              "
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'create-request' && 'active'"
              @click="
                clickLink2(
                  'create-request',
                  '/account/dashboard/church-organisation/create-request'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Create Request</span>
              </div>
            </div>
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'new-request' && 'active'"
              @click="
                clickLink2(
                  'new-request',
                  '/account/dashboard/church-organisation/incoming-request'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Pending Request</span>
              </div>
              <div>
                <!-- <span class="badge badge-pill badge-primary">20</span> -->
              </div>
            </div>
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'accepted-request' && 'active'"
              @click="
                clickLink2(
                  'accepted-request',
                  '/account/dashboard/church-organisation/accepted-request'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Accepted Request</span>
              </div>
              <div>
                <!-- <span class="badge badge-pill badge-success">190</span> -->
              </div>
            </div>
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'rejected-request' && 'active'"
              @click="
                clickLink2(
                  'rejected-request',
                  '/account/dashboard/church-organisation/rejected-request'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Rejected Request</span>
              </div>
              <div>
                <!-- <span class="badge badge-pill badge-danger">10</span> -->
              </div>
            </div>
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'resource' }"
            style="color: #555;"
            @click="clickLink('resource')"
          >
            <div>
              <span><i class="fa fa-book pr-4" aria-hidden="true"></i></span>
              <span class="font-weight-bold">Resource</span>
            </div>
            <div>
              <span
                ><i class="fa fa-angle-right text-right" aria-hidden="true"></i
              ></span>
            </div>
          </div>

          <div
            class="py-3 "
            style="background: #f7f7f7;color: #555555;"
            v-if="get_active_sidebar == 'resource'"
          >
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'create-resource' && 'active'"
              @click="
                clickLink2(
                  'create-resource',
                  '/account/dashboard/church-organisation/create-resource'
                )
              "
            >
              <div
                v-if="
                  profile.user_role &&
                    profile.user_role.role_label.toLowerCase() == `denomination`
                "
              >
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Create Resource</span>
              </div>
            </div>
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'view-resource' && 'active'"
              @click="
                clickLink2(
                  'view-resource',
                  '/account/dashboard/church-organisation/view-resource'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">All Resources</span>
              </div>
            </div>
          </div>

          <div
            v-if="
              profile.user_role &&
                profile.user_role.role_label.toLowerCase() != `user`
            "
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'register-manager' }"
            style="color: #555;"
            @click="
              clickLink(
                'register-manager',
                '/account/dashboard/church-organisation/register-manager'
              )
            "
          >
            <div>
              <span><i class="fa fa-users pr-3" aria-hidden="true"></i></span>
              <span class="font-weight-bold">Register Manager </span>
            </div>
            <!-- <div>
              <span
                ><i class="fa fa-angle-right text-right" aria-hidden="true"></i
              ></span>
            </div> -->
          </div>
          <div
            class="d-flex px-4 py-3 justify-content-between w-100 c-co-pointer c-co-link"
            :class="{ active: get_active_sidebar == 'bulletins' }"
            style="color: #555;"
            @click="clickLink('bulletins')"
          >
            <div>
              <span
                ><i class="fa fa-bullhorn pr-4" aria-hidden="true"></i
              ></span>
              <span class="font-weight-bold">Bulletins</span>
            </div>
            <div>
              <span
                ><i class="fa fa-angle-right text-right" aria-hidden="true"></i
              ></span>
            </div>
          </div>
          <div
            class="py-3 "
            style="background: #f7f7f7;color: #555555;"
            v-if="get_active_sidebar == 'bulletins'"
          >
            <div
              v-if="
                profile.user_role &&
                  profile.user_role.role_label &&
                  profile.user_role.role_label.toLowerCase() != 'user'
              "
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'create-bulletin' && 'active'"
              @click="
                clickLink2(
                  'create-bulletin',
                  '/account/dashboard/church-organisation/create-bulletin'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">Create Bulletin</span>
              </div>
            </div>
            <div
              class="d-flex justify-content-between c-pl-5 py-2 pr-4 w-100 c-co-pointer c-co-sub-link"
              :class="get_active_sub_sidebar == 'all-bulletin' && 'active'"
              @click="
                clickLink2(
                  'all-bulletin',
                  '/account/dashboard/church-organisation/all-bulletin'
                )
              "
            >
              <div>
                <small style="font-size: 70%;"
                  ><i class="fa fa-circle pr-3" aria-hidden="true"></i
                ></small>
                <span style="font-size: 88%;" class="">All Bulletin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChurchOrganisationSidebar",
  props: {
    profile: Object,
  },
  computed: {
    get_active_sidebar() {
      return this.$store.state.church_organisation.sidebar_active.main;
    },
    get_active_sub_sidebar() {
      return this.$store.state.church_organisation.sidebar_active.sub;
    },
  },
  methods: {
    clickLink(params, params2 = null) {
      this.$store.state.church_organisation.sidebar_active.sub = "";
      if (this.$store.state.church_organisation.sidebar_active.main == params) {
        this.$store.state.church_organisation.sidebar_active.main = "";
      } else {
        this.$store.state.church_organisation.sidebar_active.main = params;
      }
      if (params2) {
        this.$router.push(params2).catch(() => {});
      }
    },
    clickLink2(params, params2 = null) {
      this.$store.state.church_organisation.sidebar_active.sub = params;
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
