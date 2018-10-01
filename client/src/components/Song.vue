<template>
  <v-layout row wrap class="pt-5 single-song">
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
        small
        right
        v-if="isUserLoggedIn"
        :to="'/songs/' + song.id + '/edit'"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-fab-transition>
       <v-btn
        color="cyan"
        dark
        fab
        fixed
        small
        bottom
        right
        class="mr-5"
        v-if="isUserLoggedIn && !bookmark"
        @click="setAsBookmark">
        <v-icon>bookmarks</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-fab-transition>
       <v-btn
        color="red darken-3"
        dark
        fab
        fixed
        small
        bottom
        right
        class="mr-5"
        v-if="isUserLoggedIn && bookmark"
        @click="unsetAsBookmark">
        <v-icon>bookmarks</v-icon>
      </v-btn>
  
    </v-fab-transition>
  </v-layout>
</template>

<script>
import SongService from "@/services/SongsService";
import BookmarksService from "@/services/BookmarksService";
import VueYoutubeEmbed from "vue-youtube-embed";
import { mapState } from "vuex";

export default {
  components: {
    VueYoutubeEmbed
  },
  data() {
    return {
      song: {},
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongService.show(songId)).data;
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;
      } catch (err) {
        console.log(err);
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.single-song iframe {
  width: 100%;
}
.single-song textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
</style>
