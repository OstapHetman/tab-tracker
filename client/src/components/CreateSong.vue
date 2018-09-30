<template>
  <v-layout row class="pt-5" wrap>
     <v-flex xs12>
      <h1 class="text-xs-center cyan--text mb-4">Create new Song</h1>
    </v-flex>
    <v-flex xs5>
      <v-card color="white" class="cyan--text">
        <v-card-text>
          <v-text-field
          v-model="song.text"
          label="Title"
          >
          </v-text-field>

          <v-text-field
          v-model="song.artist"
          label="Artist"
          >
          </v-text-field>

          <v-text-field
          v-model="song.genre"
          label="Genre"
          >
          </v-text-field>

          <v-text-field
          v-model="song.album"
          label="Album"
          >
          </v-text-field>

          <v-text-field
          v-model="song.albumImage"
          label="Album Image Url"
          >
          </v-text-field>

          <v-text-field
          v-model="song.youtubeId"
          label="YouTube ID"
          >
          </v-text-field>
        </v-card-text>
      </v-card>  
    </v-flex>

    <v-flex xs7 class="pl-5">
      <v-card color="white" class="cyan--text">
        <v-card-text>
          <v-textarea
          v-model="song.lyrics"
          label="Lyrics"
          >
          </v-textarea>

          <v-textarea
          v-model="song.tab"
          label="Tab"
          >
          </v-textarea>

          <v-btn class="d-block mx-auto" @click="createSong" color="success">Create Song</v-btn>
        </v-card-text>
      </v-card>  
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from "@/services/SongsService";

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    };
  },
  methods: {
    async createSong() {
      // call API
      try {
        await SongService.post(this.song);
        this.$router.push({
          name: "songs"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

