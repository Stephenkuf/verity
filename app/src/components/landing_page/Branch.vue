<template>
  <main class="mt-5 mb-6e">
    <div class="container px-0">
      <div class="row justify-content-center">
        <div class="col-md-11 bg-white px-0">
          <div class="row">
            <div class="col-md-6 px-4 py-5">
              <h3 class="text-center f-bold f-24 c-brand">
                Create a profile for your branch
              </h3>
              <p class="text-center c-brown f-20 mt-3">
                Please fill the form below
              </p>
              <form class="" @submit.prevent="creatBranch()">
                <div class="form-group mt-5">
                  <v-select
                    class="v-select form-control v__input "
                    v-model="create_branch.denomination_id"
                    placeholder="Select your denomination"
                    name="denomination"
                    label="denomination_label"
                    :options="denomination_list"
                  ></v-select>
                  <small
                    v-if="
                      !$v.create_branch.denomination_id.required && first_submit
                    "
                    class="text-danger"
                    >Denommination Name is required</small
                  >
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <input
                        type="text"
                        class="form-control v__input"
                        placeholder="Branch Name"
                        v-model="create_branch.branch_name"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_branch.branch_name.required && first_submit
                        "
                        class="text-danger"
                        >Branch Name is required</small
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <input
                        type="email"
                        class="form-control v__input"
                        placeholder="Branch email"
                        v-model="create_branch.branch_email"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_branch.branch_email.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Email is required</small
                      >
                      <small
                        v-if="
                          !$v.create_branch.branch_email.email && first_submit
                        "
                        class="text-danger"
                        >Failed email validation</small
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <input
                        type="text"
                        class="form-control v__input"
                        placeholder="Branch phone"
                        v-model="create_branch.branch_phone"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_branch.branch_phone.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Phone is required</small
                      >
                      <small
                        v-if="
                          !$v.create_branch.branch_phone.numeric && first_submit
                        "
                        class="text-danger"
                        >Only numbers are allowed</small
                      >
                      <small
                        v-if="
                          !$v.create_branch.branch_phone.minLength &&
                            first_submit
                        "
                        class="text-danger"
                        >Phone Number must be more than 7 digits</small
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <input
                        type="text"
                        class="form-control v__input"
                        placeholder="Branch Address"
                        v-model="create_branch.branch_address"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_branch.branch_address.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Address is required</small
                      >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <v-select
                        class="v-select form-control v__input "
                        v-model="create_branch.branch_country"
                        placeholder="Select your country"
                        name="country"
                        label="country_label"
                        disabled
                        :options="country_list"
                      ></v-select>
                      <small
                        v-if="
                          !$v.create_branch.branch_country.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Country is required</small
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <v-select
                        class="v-select form-control v__input "
                        v-model="create_branch.branch_city"
                        placeholder="Select your city"
                        name="city"
                        label="state_label"
                        :options="city_list"
                      ></v-select>
                      <small
                        v-if="
                          !$v.create_branch.branch_city.required && first_submit
                        "
                        class="text-danger"
                        >City is required</small
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group mt-5 text-center">
                  <button type="submit" class="btn btn-brand text-white">
                    {{ is_processing ? "Creating" : "Create" }}
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-6 bg-yellow">
              <div class="frame"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
import { required, minLength, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "Branch",
  mixins: [notifications],
  data() {
    return {
      is_processing: false,
      first_submit: false,
      denomination_list: [],
      country_list: [],
      city_list: [],
      create_branch: {
        denomination_id: "",
        branch_name: "",
        branch_phone: "",
        branch_email: "",
        branch_address: "",
        branch_city: "",
        branch_country: "",
      },
    };
  },
  validations: {
    create_branch: {
      denomination_id: {
        required,
      },
      branch_name: {
        required,
      },
      branch_country: {
        required,
      },
      branch_city: {
        required,
      },
      branch_address: {
        required,
      },
      branch_email: {
        required,
        email,
      },
      branch_phone: {
        required,
        numeric,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    async creatBranch() {
      this.first_submit = true;
      this.is_processing = true;

      this.$v.create_branch.$touch();
      if (this.$v.create_branch.$invalid) {
        this.is_processing = false;
        return;
      }

      this.create_branch.denomination_id = this.create_branch.denomination_id.id;
      this.create_branch.branch_city = this.create_branch.branch_city.state_label;
      this.create_branch.branch_country = this.create_branch.branch_country.country_label;

      console.log("this.create_branch >> ", this.create_branch);
      Nprogress.start();
      try {
        const data = await this.$store.dispatch(
          "auth/createBranch",
          this.create_branch
        );

        this.showSuccessNotification(data.message);
        console.log("create branch response >> ", data);
        this.is_processing = false;
        location.replace("#/account/dashboard/belivers-network");
      } catch (error) {
        console.log("showing error >> ", error);
        Nprogress.done();
        this.is_processing = false;
        if (error.data) {
          this.showErrorNotification(error.data.message);
        }
      }
    },
  },
  async mounted() {
    const get_meta_data = await this.$store.dispatch("getMetaData");
    this.denomination_list = get_meta_data.result.denomination;
    this.country_list = get_meta_data.result.countries;
    this.city_list = get_meta_data.result.states;
    this.create_branch.branch_country = get_meta_data.result.countries[0];
  },
};
</script>

<style></style>
