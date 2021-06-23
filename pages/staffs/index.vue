<template>
  <div>
    <div class="breadcrumb">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/staffs" class="active">Staffs</router-link>
    </div>

    <v-card class="mx-auto defaulf">
      <staffs-list :datalist="staffs" :pagetitle="all_pagetitle"> </staffs-list>
    </v-card>
  </div>
</template>

<script>
import staffs from "@/components/staffs/staffsListing";

export default {
  components: {
    "staffs-list": staffs
  },

  data: () => ({
    dialog: false,
    search: "",
    all_pagetitle: "All staffs"
  }),
  created() {
    this.$store.dispatch("retrieve_staff");
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    staffs() {
      return this.$store.getters.listusers;
    }
  },

  beforeMount() {
    // store inatakiwa hapa data
  }
};
</script>

<style scoped>
.v-text-field__slot {
  width: 20px;
}
</style>
