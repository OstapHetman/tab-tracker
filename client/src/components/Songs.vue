<template>
  <v-layout row wrap class="pt-5">
    <v-flex xs6>
    <panel title="Songs">
      <div v-for="song in songs" :key="song.ic">
        <p>{{ song.title }}</p>
        <p>{{ song.artist }}</p>
        <p>{{ song.album }}</p>
      </div>
    </panel>
     </v-flex>
  </v-layout>
</template>
<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";

export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

