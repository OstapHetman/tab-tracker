<template>
  <v-layout row wrap class="pt-5">
    <!-- Song Metadata -->
    <v-flex xs4>
      <v-card>
        <v-img
          class="white--text"
          height="250px"
          :src="song.albumImage"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline font-weight-bold">{{ song.artist }} - {{ song.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Genre: {{ song.genre }}</span><br>
            <span><span class="font-weight-bold"> Album: </span>{{ song.album }}</span><br>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <!-- Youtube -->
    <v-flex xs8 class="pl-5">
      <youtube
      :video-id="song.youtubeId"
      :player-height="324"
      >
      </youtube> 
    </v-flex>
    <!-- Lyrics -->
    <v-flex xs5 class="mt-5">
      <v-card>
        <v-toolbar
          card
          color="purple darken-1"
          dark
        >
          <v-icon>music_note</v-icon>
          <v-toolbar-title>Lyrics</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-textarea
            full-width
            single-line
            v-model="song.lyrics"
            no-resize
            readonly
          ></v-textarea>
        </v-form>
      </v-card>
    </v-flex>
    <!-- Tabs -->
    <v-flex xs7 class="pl-4 mt-5">
      <v-card>
        <v-toolbar
          card
          color="pink darken-1"
          dark
        >
          <v-icon>music_note</v-icon>
          <v-toolbar-title>Tab</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-textarea
            full-width
            single-line
            v-model="song.tab"
            no-resize
            readonly
          ></v-textarea>
        </v-form>
      </v-card>
    </v-flex>
    <!-- Floating Button -->
    <v-fab-transition>
      <v-btn
        color="indigo"
        dark
        fab
        fixed
        bottom
        right
        :to="'/songs/' + song.id + '/edit'"
      >
        <v-icon>edit</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-layout>
</template>

<script>
import SongService from "@/services/SongsService";
import VueYoutubeEmbed from "vue-youtube-embed";

export default {
  components: {
    VueYoutubeEmbed
  },
  data() {
    return {
      song: {}
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongService.show(songId)).data;
  }
};
</script>

<style>
iframe {
  width: 100%;
}
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
