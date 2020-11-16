<template>
  <v-row>
    <template v-for="gallery in galleries">
      <v-col
        v-for="image in gallery.images"
        :key="image.id"
        lg="2"
        md="3"
        sm="4"
      >
        <v-card
          outlined
          dark
          height="100%"
        >
          <v-img
            :src="getThumbnail(image)"
          >
            <v-row class="fill-height">
              <v-card-text
                v-if="image.description"
                class="py-1 image-description mt-auto"
              >
                <div>
                  {{ image.description | truncate }}
                </div>
              </v-card-text>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </template>

    <template v-if="isLoading">
      <v-col
        v-for="count in 12"
        :key="count"
        lg="2"
        md="3"
        sm="4"
      >
        <ImageGallerySkeleton />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import ImageGallerySkeleton from '@/components/ImageGallerySkeleton.vue';

export default {
  components: { ImageGallerySkeleton },
  filters: {
    truncate(string) {
      const truncateLength = 30;
      if (!string) return '';

      if (string.length <= truncateLength) {
        return string;
      }
      return `${string.substr(0, truncateLength)}...`;
    },
  },
  props: {
    galleries: {
      type: Array,
      default() {
        return [];
      },
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getThumbnail(image) {
      const imageBase = 'https://i.imgur.com/';
      const imageExtension = image.link.split('.')[image.link.split('.').length - 1];
      return `${imageBase + image.id}b.${imageExtension}`;
    },
  },
};
</script>

<style scoped>
  .image-description {
    background:#000000c2
  }
</style>
