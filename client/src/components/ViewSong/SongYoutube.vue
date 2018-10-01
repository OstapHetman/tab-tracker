<template>
  <v-flex xs8 class="pl-5">
    <youtube
    :video-id="youtubeId"
    :player-height="324"
    >
    </youtube> 
  </v-flex>
</template>

<script>
import VueYoutubeEmbed from "vue-youtube-embed";
export default {
  components: {
    VueYoutubeEmbed
  },
  props: ["youtubeId"]
};
</script>

