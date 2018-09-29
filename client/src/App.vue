<template>
    <v-app>
      <page-header></page-header>
      <v-container class="mt-5">
        <router-view/>
      </v-container>
    </v-app>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>


<style lang="scss">
</style>
