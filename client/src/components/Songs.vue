<template>
  <main>
    <songs-search/>
    <v-layout row wrap class="pt-2">
        <v-flex xs4 class="px-1" v-for="song in songs" :key="song.id">
            <v-card color="pink accent-3" class="white--text">
                <v-layout row>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ song.title }}</div>
                                <div>Artist - <span class="font-weight-bold">{{ song.artist }}</span></div>
                                <div>Genre - <span class="font-weight-bold">{{ song.genre }}</span></div>
                                <div>Album - <span class="font-weight-bold">{{ song.album }}</span></div>
                            </div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs5>
                        <v-img :src="song.albumImage" height="125px" contain></v-img>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions>
                    <v-btn dark flat :to="'/songs/' + song.id">
                        <v-icon left light>arrow_forward</v-icon>
                        View
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-fab-transition>
          <v-btn
            color="indigo"
            dark
            fab
            fixed
            bottom
            right
            to="songs/add"
          >
            <v-icon>add</v-icon>
          </v-btn>
      </v-fab-transition>
    </v-layout>
  </main>
</template>

<script>
import SongsService from "@/services/SongsService";
import SongsSearch from "@/components/SongsSearch";

export default {
  components: {
    SongsSearch
  },
  data() {
    return {
      songs: null
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data;
      }
    }
  }
};
</script>

