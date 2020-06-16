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
          <form class="f-16">
            <div class="form-group ">
              <input
                type="email"
                id="email"
                class="form-control v__input"
                placeholder="Email address"
                required
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="password"
                id="password"
                class="form-control v__input"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group mt-4 text-center">
              <a class="c-brand f-16 f-bold" href="forgot_password.html"
                >Forgot Password?</a
              >
            </div>
            <div class="form-group mt-5 text-center">
              <router-link tag="button" to="/account" class="signUp-btn"
                >Log In</router-link
              >
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
import HomeLogo from "@/components/UI/HomeLogo";

export default {
  name: "Login",
  components: {
    appHomeLogo: HomeLogo,
  },
};
</script>

<style></style>
