<template>
  <v-container>
    <ImageFilters
      class="my-10"
      :is-show-viral="filters.isShowViral"
      :selected-sort="filters.selectedSort"
      :selected-window="filters.selectedWindow"
      :selected-section="filters.selectedSection"
      :is-loading="isLoading"
      @change-show-viral="filters.isShowViral = $event, resetAndFetch()"
      @change-sort="filters.selectedSort = $event, resetAndFetch()"
      @change-window="filters.selectedWindow = $event, resetAndFetch()"
      @change-section="filters.selectedSection = $event, resetAndFetch()"
    />

    <ImageGallery
      class="my-10"
      :is-loading="isLoading"
      :galleries="galleries"
    />
  </v-container>
</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue';
import ImageFilters from '@/components/ImageFilters.vue';

export default {
  name: 'Home',
  components: { ImageGallery, ImageFilters },
  data() {
    return {
      isLoading: false,
      filters: {
        isShowViral: true,
        selectedSort: 'viral',
        selectedWindow: 'day',
        selectedSection: 'top',
      },
      galleries: [],
      page: 0,
    };
  },
  mounted() {
    this.fetchImages();
    this.handleInfiniteScroll();
  },
  methods: {
    resetAndFetch() {
      this.galleries = [];
      this.fetchImages();
    },
    fetchImages() {
      this.isLoading = true;
      const url = `/gallery/${this.filters.selectedSection}/${this.filters.selectedSort}/${this.filters.selectedWindow}/${this.page}`;

      const params = {
        showViral: this.filters.isShowViral,
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
