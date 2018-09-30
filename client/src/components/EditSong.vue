<template>
  <v-layout row class="pt-5" wrap>
     <v-flex xs12>
      <h1 class="text-xs-center cyan--text mb-4">Edit song</h1>
    </v-flex>
    <v-flex xs5>
      <v-card color="white" class="cyan--text">
        <v-card-text>
          <v-text-field
          v-model="song.title"
          label="Title"
          required
          :rules="[required]"
          >
          </v-text-field>

          <v-text-field
          v-model="song.artist"
          label="Artist"
          :rules="[required]"
          >
          </v-text-field>

          <v-text-field
          v-model="song.genre"
          label="Genre"
          :rules="[required]"
          >
          </v-text-field>

          <v-text-field
          v-model="song.album"
          label="Album"
          :rules="[required]"
          >
          </v-text-field>

          <v-text-field
          v-model="song.albumImage"
          label="Album Image Url"
          :rules="[required]"
          >
          </v-text-field>

          <v-text-field
          v-model="song.youtubeId"
          label="YouTube ID"
          :rules="[required]"
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
          :rules="[required]"
          >
          </v-textarea>

          <v-textarea
          v-model="song.tab"
          label="Tab"
          :rules="[required]"
          >
          </v-textarea>
        </v-card-text>
      </v-card>  
          <v-alert
            class="my-4"
            :value="error"
            transition="scale-transition"
            error>
            {{error}}
          </v-alert>

          <v-btn class="d-block mx-auto mt-4" @click="save" color="success">Save Song</v-btn>  
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
      },
      required: value => !!value || "Required.",
      error: null
    };
  },
  methods: {
    async save() {
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields";
        return;
      }

      const songId = this.$store.state.route.params.songId;
      try {
        await SongService.put(this.song);
        this.$router.push(`/songs/${songId}`);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const songId = this.$store.state.route.params.songId;
      this.song = (await SongService.show(songId)).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

