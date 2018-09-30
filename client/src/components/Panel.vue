<template>
  <v-card color="cyan darken-2" class="white--text">
    <v-card-title primary-title style="position: relative">
      <div class="headline" >{{ title }}</div >
      <v-btn
      absolute
      dark
      fab
      top
      small
      right
      color="cyan"
      to="songs/add"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-text>
      <slot>No slot content defined.</slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>

