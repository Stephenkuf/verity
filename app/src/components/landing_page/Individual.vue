<template>
  <main class="mt-5 mb-6e">
    <div class="container px-0">
      <div class="row justify-content-center">
        <div class="col-md-11 bg-white px-0">
          <div class="row">
            <div class="col-md-6 px-4 py-5">
              <h3 class="text-center f-bold f-24 c-brand">
                Create a profile for yourself
              </h3>
              <p class="text-center c-brown f-20 mt-3">
                Please fill the short form below
              </p>
              <form class="" @click.prevent="createIndividual()">
                <div class="form-group mt-5">
                  <v-select
                    class="v-select form-control v__input "
                    v-model="create_individual.denomination_name"
                    placeholder="Select your Denomination"
                    name="denomination"
                    label="denomination_label"
                    :options="denomination_list"
                  ></v-select>
                  <small
                    v-if="
                      !$v.create_individual.denomination_name.required &&
                        first_submit
                    "
                    class="text-danger"
                    >Denommination Name is required</small
                  >
                </div>
                <div class="form-group mt-5">
                  <v-select
                    class="v-select form-control v__input "
                    v-model="create_individual.branch_name"
                    placeholder="Select your Branch"
                    name="branch"
                    label="branch_label"
                    :options="branch_list"
                  ></v-select>
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
import { required } from "vuelidate/lib/validators";
export default {
  name: "Individual",
  mixins: [notifications],
  data() {
    return {
      is_processing: false,
      first_submit: false,
      denomination_list: [],
      branch_list: [],
      create_individual: {
        denomination_name: "",
        branch_name: "",
      },
    };
  },
  validations: {
    create_individual: {
      denomination_name: {
        required,
      },
    },
  },
  methods: {
    async createIndividual() {
      this.first_submit = true;
      this.is_processing = true;

      this.$v.create_individual.$touch();
      if (this.$v.create_individual.$invalid) {
        this.is_processing = false;
        return;
      }

      this.create_individual.denomination_name = this.create_individual.denomination_name.denomination_label;

      if (this.create_individual.branch_name) {
        this.create_individual.branch_name = this.create_individual.branch_name.branch_label;
      }

      console.log("this.create_individual >> ", this.create_individual);
      Nprogress.start();
      try {
        const data = await this.$store.dispatch(
          // "auth/createDenomination",
          this.create_individual
        );

        this.showSuccessNotification(data.message);
        console.log("create individual response >> ", data);
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
