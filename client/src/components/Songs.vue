<template>
  <v-layout row wrap class="pt-5">
    <v-flex xs6>
      <panel title="Songs">
        <v-layout row v-for="song in songs" :key="song.id">
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ song.title }}</div>
                <div>Artist - <span class="font-weight-bold">{{ song.artist }}</span></div>
                <div>Genre - <span class="font-weight-bold">{{ song.genre }}</span></div>
                <div>Album - <span class="font-weight-bold">{{ song.album }}</span></div>
              </div>
            </v-card-title>
            <v-card-actions>
                <v-btn color="cyan white--text" :to="'/songs/' + song.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View
                </v-btn>
            </v-card-actions>
          </v-flex>
          <v-flex xs5>
            <v-img
              :src="song.albumImage"
              height="125px"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
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

