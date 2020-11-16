<template>
  <v-container>
    <ImageGallery
      :is-loading="isLoading"
      :galleries="galleries"
    />
  </v-container>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue';

export default {
  name: 'Home',
  components: { ImageGallery },
  data() {
    return {
      isLoading: false,
      galleries: [],
      section: 'top',
      sort: 'viral',
      page: 0,
      window: 'day',
      perPage: 10,
    };
  },
  mounted() {
    this.fetchImages();
    this.handleInfiniteScroll();
  },
  methods: {
    fetchImages() {
      this.isLoading = true;
      const url = `/gallery/${this.section}/${this.sort}/${this.window}/${this.page}`;

      const params = {
        showViral: true,
        mature: true,
        album_previews: true,
      };

      this.axios
        .get(url, { params })
        .then((response) => {
          this.galleries.push(...response.data.data);
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    handleInfiniteScroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight
          === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.page += 1;
          this.fetchImages();
        }
      };
    },
  },
};
</script>
