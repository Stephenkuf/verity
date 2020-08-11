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
              Login to your verity Account Now
            </h3>
            <p class="f-16 c-brown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
            </p>
          </div>
          <form class="f-16" @submit.prevent="loginUser()">
            <div class="form-group ">
              <input
                type="email"
                id="email"
                class="form-control v__input"
                v-model="login_data.email"
                placeholder="Email address"
                required
              />
              <small v-if="!$v.login_data.email.required" class="text-danger"
                >Email is required</small
              >
              <small v-if="!$v.login_data.email.email" class="text-danger"
                >Failed email validation</small
              >
            </div>
            <div class="form-group mt-4">
              <input
                type="password"
                id="password"
                v-model="login_data.password"
                class="form-control v__input"
                placeholder="Password"
                required
              />
              <small v-if="!$v.login_data.password.required" class="text-danger"
                >Password is required</small
              >
            </div>
            <div class="form-group mt-4 text-center">
              <a class="c-brand f-16 f-bold" href="forgot_password.html"
                >Forgot Password?</a
              >
            </div>
            <div class="form-group mt-5 text-center">
              <button class="signUp-btn" type="submit">
                {{ is_processing ? "Processing ... " : "Login" }}
              </button>
            </div>

            <div class="form-group mt-3 mb-5 text-center">
              <p class="c-brown">
                Don’t have an account?

                <router-link tag="a" class="c-red f-bold ml-1" to="/register">
                  Sign Up
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
import { required, email } from "vuelidate/lib/validators";

import HomeLogo from "@/components/UI/HomeLogo";

export default {
  name: "Login",
  components: {
    appHomeLogo: HomeLogo,
  },
  mixins: [notifications],
  data() {
    return {
      is_processing: false,
      login_data: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    login_data: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    async loginUser() {
      try {
        this.is_processing = true;
        console.log("login user >> ", this.login_data, " >> ", this.$v);
        Nprogress.start();
        this.$v.login_data.$touch();
        if (this.$v.login_data.$invalid) {
          return;
        }
        const data = await this.$store.dispatch(
          "auth/loginUser",
          this.login_data
        );

        this.showSuccessNotification(data.message);
        console.log("get login response >> ", data);
        this.is_processing = false;
        Nprogress.done();
        // location.replace("/account");
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.is_processing = false;
        Nprogress.done();
      }
    },
  },
};
</script>

<style></style>
