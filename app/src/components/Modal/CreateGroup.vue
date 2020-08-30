<template>
  <!-- create group modal -->
  <div
    class="modal fade"
    id="group"
    tabindex="-1"
    role="dialog"
    aria-labelledby="createGroupModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded">
        <div class="modal-header bg-grey-light">
          <h4 class="modal-title f-bold pl-2" id="createGroupModal">
            Create a Group
          </h4>
          <button
            type="button"
            class="close"
            id="close-create-group"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-group">
              <label for="name" class="f-bold">Name your Group</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="create_group.group_name"
                class="form-control"
                placeholder="Enter the name of your group"
                required
              />
              <small
                v-if="!$v.create_group.group_name.required"
                class="text-danger"
                >Group Name is required</small
              >
            </div>
            <div class="form-group mt-4">
              <label for="description" class="f-bold">Group Description</label>
              <textarea
                id="description"
                name="description"
                v-model="create_group.group_bio"
                class="form-control h-100"
                placeholder="Enter group description, Rules and Regulations... "
                required
              ></textarea>
              <small
                v-if="!$v.create_group.group_bio.required"
                class="text-danger"
                >Group Description is required</small
              >
            </div>
            <div class="form-group mt-4">
              <label for="people" class="f-bold">Add people</label>
              <multiselect
                v-model="value"
                placeholder="Add people by names or email address"
                label="name"
                :custom-label="nameWithLang"
                track-by="id"
                :options="get_all_users"
                :multiple="true"
              ></multiselect>
            </div>
            <div class="form-group row mt-4">
              <div class="col-md-8">
                <label for="" class="f-bold">Select Privacy</label>
                <!-- Default unchecked -->
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    v-model="create_group.group_privacy"
                    id="secret"
                    value="secret"
                    name="privacy"
                  />
                  <label class="custom-control-label" for="secret"
                    >Secret
                    <span class="c-grey">
                      ( Enter group description, Rules and Regulations...
                      )</span
                    >
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    v-model="create_group.group_privacy"
                    id="private"
                    value="private"
                    name="privacy"
                  />
                  <label class="custom-control-label" for="private"
                    >Private
                    <span class="c-grey"
                      >( Enter group description, Rules and Regulations... )
                    </span>
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="public"
                    value="public"
                    name="privacy"
                    v-model="create_group.group_privacy"
                  />
                  <label class="custom-control-label" for="public"
                    >Public
                    <span class="c-grey"
                      >( Enter group description, Rules and Regulations... )
                    </span>
                  </label>
                </div>
              </div>
              <div class="col-md-4 text-center">
                <label for="" class="f-bold mb-5">Upload Image</label>
                <div class="pos-rel">
                  <label for="group-image" class="upload_group_image py-3">
                    <img src="/assets/images/camera.png" alt="" />
                  </label>
                  <input
                    type="file"
                    ref="GETGROUPIMG"
                    id="group-image"
                    name="group-image"
                    class="group__hidden"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer text-right bg-grey-light">
          <button
            class="btn btn-brand text-white btn-md"
            @click="createGroup()"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
import { required } from "vuelidate/lib/validators";
import Multiselect from "vue-multiselect";
export default {
  name: "CreateGroup",
  data() {
    return {
      create_group: {
        group_name: "",
        group_bio: "",
        group_privacy: "public",
      },
      value: [],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    };
  },
  validations: {
    create_group: {
      group_name: {
        required,
      },
      group_bio: {
        required,
      },
      group_privacy: {
        required,
      },
    },
  },
  mixins: [notifications],
  components: {
    Multiselect,
  },
  computed: {
    get_all_users() {
      return this.$store.state.dashboard.all_users;
    },
  },
  methods: {
    nameWithLang({ full_name, email }) {
      return `${full_name} [${email}]`;
    },
    value_mutated() {
      let empty_arr = [];
      this.value.forEach((each) => {
        empty_arr.push(each.id);
      });
      return empty_arr;
    },
    async createGroup() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        // const get_file = this.$ref.GETGROUPIMG;
        // console.log("get_file >> ", get_file);

        const payload = {
          group_name: this.create_group.group_name,
          group_bio: this.create_group.group_bio,
          group_privacy: this.create_group.group_privacy,
          users: this.value_mutated(),
        };

        console.log("payload >> ", payload);

        Nprogress.start();
        const data = await this.$store.dispatch(
          "dashboard/createGroup",
          payload
        );
        console.log("data >> ", data);
        this.showSuccessNotification(data.message);
        Nprogress.done();
        this.value = [];
        this.create_group.group_name = "";
        this.create_group.group_bio = "";
        this.$emit("triggerMyGroup");
        document.getElementById("close-create-group").click();
      } catch (error) {
        console.log("error >> ", error);
        Nprogress.done();
      }
    },
  },
};
</script>

<style>
/* editing the multiselector */

.multiselect__tag {
  background: #08587d;
  /* margin-bottom: 0px !important; */
}

.multiselect__tag-icon:hover {
  background: #08587d;
}

.multiselect__tag-icon:after {
  /* content: "\D7" !important; */
  color: #030372 !important;
  /* font-size: 14px !important; */
}

.multiselect__tag-icon:hover:after {
  color: #fff !important;
}

.multiselect__option--highlight {
  background: #08587d !important;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #ff6a6a !important;
}
.multiselect__option--highlight:after {
  background: #08587d !important;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background: #ff6a6a !important;
}

.multiselect__single {
  font-size: 95% !important;
}

.multiselect__content-wrapper {
  z-index: 100 !important;
}
</style>
