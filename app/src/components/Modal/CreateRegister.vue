<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="CreateRegister"
    tabindex="-1"
    role="dialog"
    aria-labelledby="CreateRegister"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered w-80" role="document">
      <div class="modal-content">
        <div class="modal-header border-none py-0">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Choose a denomination</h5> -->
          <button
            ref="closeCreateRegister"
            type="button"
            class="close"
            id="close-create-register"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body px-4 pb-5">
          <div class="col-12 my-0">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="register_name" class="c-label"
                    >Register Name</label
                  >
                  
                  <input
                    type="text"
                    class="form-control c-input"
                    id="register_name"
                    v-model="register_data.register_name"
                    placeholder="Enter Register Name"
                  />
                  <template v-if="$v.register_data.register_name.$error">
                    <small
                        v-if="!$v.register_data.register_name.required"
                        class="text-danger"
                        >Register Name is required</small
                      >
                  </template>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="male_number" class="c-label"
                    >Number Of Male</label
                  >
                  <input
                    type="number"
                    class="form-control c-input"
                    id="male_number"
                    v-model="register_data.males"
                    placeholder="Enter Numbber"
                  />
                  
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="female_number" class="c-label"
                    >Number Of Female</label
                  >
                  <input
                    type="number"
                    class="form-control c-input"
                    id="female_number"
                    v-model="register_data.females"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="total_number" class="c-label">Total Number</label>
                  <input
                    type="number"
                    class="form-control c-input"
                    id="total_number"
                    v-model="register_data.total_number"
                    placeholder="Enter Number"
                  />
                  <template v-if="$v.register_data.total_number.$error">
                    <small
                        v-if="!$v.register_data.total_number.required"
                        class="text-danger"
                        >Total number is required</small
                      >
                  </template>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="register_date" class="c-label"
                    >Register Date</label
                  >
                  <input
                    type="date"
                    class="form-control c-input"
                    v-model="register_data.register_date"
                    id="register_date"
                    placeholder="Enter Register Date"
                  />
                </div>
              </div>
              <div style="margin-top: 2.5rem">
                <button @click.prevent="createRegister" class="btn-lg btn-primary">Create Register</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nprogress from "nprogress";
import { notifications } from "@/mixins/Notification";
import { required } from "vuelidate/lib/validators";
export default {
  name: "CreateRegister",
  mixins: [notifications],
  data(){
    return {
      register_data: {
        register_name: "",
        total_number: 0,
        females: 0,
        register_date: "",
        males: 0
      },
      is_processing: false
    }
  },
  validations: {
    register_data: {
      register_name: {
        required,
      },
      total_number: {
        required,
      },
    },
  },
  methods: {
    async createRegister(){
      console.log('hhh');
      try {
        this.is_processing = true;
        // console.log("Sending Register >> ", this.register_data, " >> ", this.$v);

        this.$v.register_data.$touch();
        if (this.$v.register_data.$invalid) {
          return;
        }
        Nprogress.start();
        
        const data = await this.$store.dispatch(
          "church_organisation/createRegister",
          this.register_data
        );

        this.showSuccessNotification(data.message);
        console.log("get send email response >> ");
        Nprogress.done();
        this.is_processing = false;
        this.register_data.register_name = "",
        this.register_data.total_number = 0,
        this.register_data.females = 0,
        this.register_data.register_date = "",
        this.register_data.males = 0
        this.$emit("triggerMyRegister");
        document.getElementById("close-create-register").click();
      } catch (error) {
        this.showErrorNotification(error.data.message);
        this.is_processing = false;
        Nprogress.done();
      }
    }
  }
};
</script>

<style></style>
