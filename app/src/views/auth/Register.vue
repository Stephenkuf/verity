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
            <p class="f-16 c-brown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
            </p>
          </div>
          <form class="f-16" action="">
            <div class="form-group">
              <input
                type="text"
                id="fullname"
                class="form-control v__input"
                placeholder="Full Name"
                required
              />
            </div>
            <div class="form-group mt-4">
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
            <div class="form-group mt-4">
              <input
                type="text"
                id="phonenumber"
                class="form-control v__input"
                placeholder="Phone Number"
                required
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="text"
                id="denomination"
                class="form-control v__input"
                placeholder="Denomination"
                required
              />
            </div>

            <div class="form-group mt-5 text-center">
              <button class="signUp-btn">Sign Up</button>
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
import HomeLogo from "@/components/UI/HomeLogo";

export default {
  name: "Register",
  components: {
    appHomeLogo: HomeLogo,
  },
};
</script>

<style></style>
