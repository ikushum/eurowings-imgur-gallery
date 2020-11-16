<template>
  <v-app>
    <v-app-bar
      app
      dark
      dense
      color="primary darken-4"
    >
      <v-toolbar-title>Imgur Gallery</v-toolbar-title>
    </v-app-bar>

    <v-main class="black">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
