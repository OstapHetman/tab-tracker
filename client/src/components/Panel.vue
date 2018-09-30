<template>
  <v-card color="blue-grey lighten-2" class="white--text">
    <v-card-title primary-title>
      <div class="headline">{{ title }}</div>
    </v-card-title>
    <v-card-text>
      <slot>No slot content defined.</slot>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn flat dark>Listen now</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>

