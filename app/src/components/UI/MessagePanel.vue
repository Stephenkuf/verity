<template>
  <div>
    <div class="bg-white v-border-rad-5">
      <div class="p-3" style="border-bottom: 1px solid #ccc">
        <div class="d-flex justify-content-between">
          <div>
            <h6 class="mb-0 font-weight-bold">Stephen Kuforiji (stephen10)</h6>
            <small>stephen@gmail.com</small>
          </div>
        </div>
      </div>
      <div class="p-3 v-chat">
        <div class="d-flex mt-2 mb-4">
          <img
            src="/assets/images/group-4.png"
            class="w-40 mr-3"
            width="50"
            height="50"
            alt="user"
          />
          <div class="v-max-w-80">
            <p class="font-weight-bold mb-1">Stephen Kufo</p>
            <span class="d-inline-block py-3 px-3 v-bg-gray v-each-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ea.</span
            >
          </div>
        </div>
        <div class="d-flex justify-content-end mt-2 mb-4">
          <div class="v-max-w-80">
            <p class="font-weight-bold text-right mb-1">Me</p>
            <span class="d-inline-block py-3 px-3 v-each-text v-each-text-right"
              >Lorem ipsuelit. Doloremque, ea.</span
            >
          </div>
          <img
            src="/assets/images/group-4.png"
            class="w-40 ml-3"
            width="50"
            height="50"
            alt="user"
          />
        </div>
        <div class="d-flex justify-content-end mt-2 mb-4">
          <div class="v-max-w-80">
            <p class="font-weight-bold text-right mb-1">Me</p>
            <span class="d-inline-block py-3 px-3 v-each-text v-each-text-right"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              reprehenderit. Libero possimus praesentium labore, blanditiis
              consequatur iste quo officia doloremque non ad deserunt tempore
              eveniet, inventore eaque numquam fugiat consectetur magni. Facere
              earum nemo corporis nulla, consequuntur illo odio, sequi veritatis
              facilis libero vero labore asperiores sapiente sed dolores
              totam!</span
            >
          </div>
          <img
            src="/assets/images/group-4.png"
            class="w-40 ml-3"
            width="50"
            height="50"
            alt="user"
          />
        </div>
        <div class="d-flex justify-content-end mt-2 mb-4">
          <div class="v-max-w-80">
            <p class="font-weight-bold text-right mb-1">Me</p>
            <span class="d-inline-block py-3 px-3 v-each-text v-each-text-right"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ea.</span
            >
          </div>
          <img
            src="/assets/images/group-4.png"
            class="w-40 ml-3"
            width="50"
            height="50"
            alt="user"
          />
        </div>
        <div class="d-flex mt-2 mb-4">
          <img
            src="/assets/images/group-4.png"
            class="w-40 mr-3"
            width="50"
            height="50"
            alt="user"
          />
          <div class="v-max-w-80">
            <p class="font-weight-bold mb-1">Stephen Kufo</p>
            <span class="d-inline-block py-3 px-3 v-bg-gray v-each-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, ea.</span
            >
          </div>
        </div>
      </div>
      <div style="border-top: 1px solid #ccc" class="px-3 py-0 pb-2">
        <div class="col-12 px-0">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control border-right-0"
              placeholder="Comment..."
              aria-label="Comment..."
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text border-left-0" id="basic-addon2">
                <i class="fa fa-paper-plane c-blue"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagePanel",
};
</script>

<style>
.v-border-rad-5 {
  border-radius: 0.5rem;
}
.v-bg-gray {
  background: #eee;
}
.v-chat {
  min-height: 36rem !important;
  max-height: 36rem !important;
  height: 36rem !important;
  overflow-y: scroll;
}
.v-each-text {
  font-size: 90%;
  word-wrap: break-word;
  border-radius: 0.5rem;
  /* max-width: 90% !important; */
}
.v-each-text-right {
  background: blue;
  color: white;
  word-wrap: break-word;
}
.v-max-w-80 {
  max-width: 80% !important;
}
.v-chat {
  overflow-y: scroll;
  overflow-x: wrap;
}

.v-chat::-webkit-scrollbar {
  width: 5px !important;
  height: 4px !important;
}

/* Track */
.v-chat::-webkit-scrollbar-track {
  background-color: #fbfbfb;
  width: 7px !important;
}

/* Handle */
.v-chat::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 10px;
  width: 7px !important;
}

/* Handle on hover */
.v-chat::-webkit-scrollbar-thumb:hover {
  background-color: #6d7be0;
}
</style>
