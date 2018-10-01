<template>
  <v-flex xs7 class="pl-4 mt-5  single-song">
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
          v-model="tab"
          no-resize
          readonly
        ></v-textarea>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["tab"]
};
</script>

<style>
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


