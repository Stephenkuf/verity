<template>
  <v-client-table
    ref="serverTableRef"
    name="question-table"
    class="v-table"
    :data="data"
    :columns="columns"
    :options="options"
  >
    <div slot="id" slot-scope="props">
      <div class="text-capitalize">{{ props.index }}</div>
    </div>
    <div slot="subject" slot-scope="props">
      <div>
        {{ props.row.subject }}
      </div>
    </div>
    <div slot="created_at" slot-scope="props">
      <div>
        {{ props.row.created_at | moment("MMMM DD YYYY, h:mm A") }}
      </div>
    </div>
    <div slot="user_id" slot-scope="props">
      <div :id="props.row.user_id">
        <button
          class="btn btn-sm m-0"
          :class="btn_color"
          @click="open_modal()"
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
      columns: ["id", "subject", "created_at", "user_id"],
      options: {
        // filterable: [
        //   "first_name",
        //   "last_name",
        //   "email",
        //   "wallet_status",
        //   "wallet_alias",
        //   "phone_number",
        //   "wallet_code",
        //   "wallet_balance",
        //   "wallet_type",
        //   "user_id",
        // ],
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
          subject: "SUBJECT",
          created_at: "DATE/TIME",
          user_id: "ACTION",
        },
      },
    };
  },
  methods: {
    open_modal() {
      this.$store.state.church_organisation.show_reason = false;
    },
  },
};
</script>

<style></style>
