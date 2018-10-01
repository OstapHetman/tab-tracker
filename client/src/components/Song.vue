<template>
  <v-layout row wrap class="pt-5 single-song">

    <!-- Start Song Metadata -->
    <song-metadata :song="song" />
    <!-- End Song Metadata -->

    <!-- Start Youtube Component -->
    <you-tube :youtubeId="song.youtubeId" />
    <!-- End Youtube Component -->

    <!-- Start Lyrics -->
    <lyrics :song="song.lyrics" />
    <!-- End Lyrics -->

    <!-- Start Tabs -->
    <tabs :tab="song.tab" />
    <!-- End Tabs -->
    
  </v-layout>
</template>

<script>
import Lyrics from "@/components/ViewSong/SongLyrics";
import Tabs from "@/components/ViewSong/SongTabs";
import YouTube from "@/components/ViewSong/SongYoutube";
import SongMetadata from "@/components/ViewSong/SongMetadata";
import SongService from "@/services/SongsService";
import { mapState } from "vuex";

export default {
  components: {
    YouTube,
    Lyrics,
    Tabs,
    SongMetadata
  },
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongService.show(songId)).data;
  }
};
</script>

<style>
.single-song iframe {
  width: 100%;
}
</style>
