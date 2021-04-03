<template>
  <main class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <app-home-logo></app-home-logo>
        </div>
        <div class="col-md-6 col-lg-6 pt-5 mt-5">
          <div class="SignUp-intro mb-5">
            <h3 class="f-24 c-black font-weight-bold">
              Create Your Account On Verity Now
            </h3>
            <!-- <p class="f-16 c-brown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
            </p> -->
          </div>
          <form @submit.prevent="registerUser()" class="f-16" action="">
            <div class="form-group">
              <input
                type="text"
                id="fullname"
                v-model="sign_up_data.full_name"
                class="form-control v__input"
                placeholder="Full Name"
                required
              />
              <small v-if="$v.sign_up_data.full_name.$error" class="text-danger"
                >Full name is required</small
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                id="username"
                v-model="sign_up_data.username"
                class="form-control v__input"
                placeholder="Username"
                required
              />
              <small v-if="$v.sign_up_data.username.$error" class="text-danger"
                >Username is required</small
              >
            </div>
            <div class="form-group mt-4">
              <input
                type="email"
                id="email"
                class="form-control v__input"
                v-model="sign_up_data.email"
                placeholder="Email address"
                required
              />
              <template v-if="$v.sign_up_data.email.$error">
                <small
                  v-if="!$v.sign_up_data.email.required"
                  class="text-danger"
                  >Email is required</small
                >
                <small v-if="!$v.sign_up_data.email.email" class="text-danger"
                  >Failed email validation</small
                >
              </template>
            </div>

            <div class="form-group mt-4">
              <input
                type="text"
                id="phonenumber"
                class="form-control v__input"
                v-model="sign_up_data.phone_number"
                placeholder="Phone Number"
                required
              />
              <template v-if="$v.sign_up_data.phone_number.$dirty">
                <small
                  v-if="!$v.sign_up_data.phone_number.required"
                  class="text-danger"
                  >Phone Number is required,
                </small>
                <small
                  v-if="!$v.sign_up_data.phone_number.numeric"
                  class="text-danger"
                  >Only numbers are allowed,
                </small>
                <small
                  v-if="!$v.sign_up_data.phone_number.minLength"
                  class="text-danger"
                  >Phone Number must be more than 7 digits</small
                >
              </template>
            </div>
            <!-- <div class="form-group mt-4">
              <v-select
                class="v-select form-control v__input "
                v-model="sign_up_data.denomination"
                placeholder="Select your Denomination"
                name="denomination"
                label="denomination_label"
                :options="denomination_list"
              ></v-select>
              <small
                v-if="$v.sign_up_data.denomination.$error"
                class="text-danger"
                >Denomination is required</small
              >
            </div> -->
            <div class="form-group mt-4">
              <input
                type="password"
                id="password"
                v-model="sign_up_data.password"
                class="form-control v__input"
                placeholder="Password"
                required
              />
              <small v-if="$v.sign_up_data.password.$error" class="text-danger"
                >Password is required</small
              >
            </div>

            <div class="form-group mt-5 text-center">
              <button
                :disabled="is_processing"
                type="submit"
                class="signUp-btn"
              >
                {{ is_processing ? "Creating ..." : "Sign Up" }}
              </button>
            </div>

            <div class="form-group mt-3 mb-5 text-center">
              <p class="c-brown">
                Already have an account?
                <router-link tag="a" class="c-red f-bold ml-1" to="/login">
                  Log In
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
import { required, minLength, email, numeric } from "vuelidate/lib/validators";

import HomeLogo from "@/components/UI/HomeLogo";

export default {
  name: "Register",
  components: {
    appHomeLogo: HomeLogo,
  },
  mixins: [notifications],
  data() {
    return {
      is_processing: false,
      sign_up_data: {
        full_name: "",
        username: "",
        email: "",
        password: "",
        // denomination: "",
        phone_number: "",
        user_role_id: 2,
      },
      denomination_list: [],
    };
  },
  validations: {
    sign_up_data: {
      full_name: {
        required,
      },
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      phone_number: {
        required,
        numeric,
        minLength: minLength(8),
      },
      password: {
        required,
      },
      // denomination: {
      //   required,
      // },
    },
  },
  methods: {
    async registerUser() {
      try {
        this.is_processing = true;
        console.log("signup user >> ", this.sign_up_data, " >> ", this.$v);

        this.$v.sign_up_data.$touch();
        if (this.$v.sign_up_data.$invalid) {
          return;
        }
        Nprogress.start();
        // this.sign_up_data.denomination = this.sign_up_data.denomination.id;
        const data = await this.$store.dispatch(
          "auth/registerUser",
          this.sign_up_data
        );

        this.showSuccessNotification(data.message);
        console.log("get signup response >> ", data);
        this.is_processing = false;
        location.replace("/login");
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.is_processing = false;
        Nprogress.done();
      }
    },
  },
  async mounted() {
    const get_meta_data = await this.$store.dispatch("getMetaData");
    // this.denomination_list = get_meta_data.result.denomination;
    console.log("get meta data >> ", get_meta_data, this.$v);
  },
};
</script>

<style></style>
