<template>
  <v-client-table
    ref="serverTableRef"
    name="question-table"
    class="v-table"
    :data="[...data].reverse()"
    :columns="columns"
    :options="options"
  >
    <div slot="id" slot-scope="props">
      <div class="text-capitalize">{{ props.index }}</div>
    </div>
    <div slot="requests" slot-scope="props">
      <div>
        {{ props.row.request_title }}
      </div>
    </div>
    <div slot="created_at" slot-scope="props">
      <div>
        {{ props.row.created_at | moment("MMMM DD YYYY, h:mm A") }}
      </div>
    </div>
    <div slot="reciever_id" slot-scope="props">
      <div :id="props.row.reciever_id">
        <button
          class="btn btn-sm m-0"
          :class="btn_color"
          @click="open_modal(props.row)"
          data-toggle="modal"
          data-target="#ViewChurchRequestModal"
        >
          View More
        </button>
      </div>
    </div>
  </v-client-table>
</template>

<script>
export default {
  name: "RequestTables",
  props: {
    data: Array,
    btn_color: String,
  },
  data() {
    return {
      columns: ["id", "requests", "created_at", "reciever_id"],
      options: {
        filterable: [
          "requests.request_title",
          "requests.request_body",
          "created_at",
        ],
        sortable: [],
        perPage: 25,
        pagination: {
          chunk: 3,
        },
        texts: {
          filter: "",
          filterPlaceholder: "Search..",
          noResults: "No matching records",
        },
        headings: {
          id: "S/N",
          requests: "SUBJECT",
          created_at: "DATE/TIME",
          reciever_id: "ACTION",
        },
      },
    };
  },
  methods: {
    open_modal(data) {
      this.$store.state.church_organisation.show_reason = false;
      this.$store.state.church_organisation.single_request = data;

    },
  }
};
</script>

<style></style>
