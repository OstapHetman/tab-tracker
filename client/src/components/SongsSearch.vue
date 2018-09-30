<template>
  <v-layout row class="mt-5">
    <v-flex xs6>
        <v-text-field
          label="Search by song, artist, album"
          append-icon="search"
          solo
          v-model="search"
        >
        </v-text-field>
      </v-flex>
  </v-layout>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search: _.debounce(async function(value) {
      const route = {
        name: "songs"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    }, 700),
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>
