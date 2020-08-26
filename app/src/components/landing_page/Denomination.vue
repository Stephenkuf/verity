<template>
  <main class="mt-5 mb-6e">
    <div class="container px-0">
      <div class="row justify-content-center">
        <div class="col-md-11 bg-white px-0">
          <div class="row">
            <div class="col-md-6 px-4 py-5">
              <h3 class="text-center f-bold f-24 c-brand">
                Create a profile for your denomination
              </h3>
              <p class="text-center c-brown f-20 mt-3">
                Please fill the form below
              </p>
              <form class="" @submit.prevent="creatDenomination()">
                <div class="form-group mt-5">
                  <v-select
                    class="v-select form-control v__input "
                    v-model="create_denomination.denomination_name"
                    placeholder="Select your Denomination"
                    name="denomination"
                    label="denomination_label"
                    :options="denomination_list"
                  ></v-select>
                  <small
                    v-if="
                      !$v.create_denomination.denomination_name.required &&
                        first_submit
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
                        placeholder="Denomination phone"
                        v-model="create_denomination.denomination_phone"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_denomination.denomination_phone.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Phone is required</small
                      >
                      <small
                        v-if="
                          !$v.create_denomination.denomination_phone.numeric &&
                            first_submit
                        "
                        class="text-danger"
                        >Only numbers are allowed</small
                      >
                      <small
                        v-if="
                          !$v.create_denomination.denomination_phone
                            .minLength && first_submit
                        "
                        class="text-danger"
                        >Phone Number must be more than 7 digits</small
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group mt-4">
                      <input
                        type="email"
                        class="form-control v__input"
                        placeholder="Denomination email"
                        v-model="create_denomination.denomination_email"
                        required
                      />
                      <small
                        v-if="
                          !$v.create_denomination.denomination_email.required &&
                            first_submit
                        "
                        class="text-danger"
                        >Email is required</small
                      >
                      <small
                        v-if="
                          !$v.create_denomination.denomination_email.email &&
                            first_submit
                        "
                        class="text-danger"
                        >Failed email validation</small
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group mt-4">
                  <input
                    type="text"
                    class="form-control v__input"
                    placeholder="Headquarters Address"
                    v-model="create_denomination.address"
                    required
                  />
                  <small
                    v-if="
                      !$v.create_denomination.address.required && first_submit
                    "
                    class="text-danger"
                    >Denomination Address is required</small
                  >
                </div>
                <div class="form-group mt-4">
                  <textarea
                    type="text"
                    class="form-control v__input v__input-textarea"
                    placeholder="Description"
                    rows="4"
                  ></textarea>
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
  name: "Denomination",
  mixins: [notifications],
  data() {
    return {
      is_processing: false,
      first_submit: false,
      denomination_list: [],
      create_denomination: {
        denomination_name: "",
        denomination_phone: "",
        denomination_email: "",
        address: "",
        description: "",
      },
    };
  },
  validations: {
    create_denomination: {
      denomination_name: {
        required,
      },
      address: {
        required,
      },
      denomination_email: {
        required,
        email,
      },
      denomination_phone: {
        required,
        numeric,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    async creatDenomination() {
      this.first_submit = true;
      this.is_processing = true;

      this.$v.create_denomination.$touch();
      if (this.$v.create_denomination.$invalid) {
        this.is_processing = false;
        return;
      }

      this.create_denomination.denomination_name = this.create_denomination.denomination_name.denomination_label;

      console.log("this.create_denomination >> ", this.create_denomination);
      Nprogress.start();
      try {
        const data = await this.$store.dispatch(
          "auth/createDenomination",
          this.create_denomination
        );

        this.showSuccessNotification(data.message);
        console.log("create denomin response >> ", data);
        this.is_processing = false;
        location.replace("/account/dashboard/belivers-network");
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
  },
};
</script>

<style></style>
