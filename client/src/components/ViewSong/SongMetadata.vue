<template>
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
     <!-- Start Floating Button -->
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
    <!-- End Floating Button -->
  </v-flex>
</template>

<script>
import BookmarksService from "@/services/BookmarksService";
import { mapState } from "vuex";

export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
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
