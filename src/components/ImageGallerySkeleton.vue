<template>
  <v-card
    outlined
    dark
    height="100%"
  >
    <v-skeleton-loader
      type="image"
      height="171.5"
    />

    <template>
      <v-divider />

      <v-card-text>
        <v-skeleton-loader
          type="text"
        />
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
export default {

};
</script>
