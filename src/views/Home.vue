<template>
  <v-container>
    <div class="my-10">
      <div class="d-flex align-center mb-5">
        <label class="white--text mr-3">
          Show Viral Images
        </label>

        <v-checkbox
          v-model="filters.isShowViral"
          dark
          hide-details
          class="pa-0 ma-0"
          :disabled="isLoading"
          @change="resetAndFetch()"
        />
      </div>

      <div class="mb-5">
        <label class="white--text mr-3">
          Section:
        </label>

        <v-btn-toggle
          v-model="filters.selectedSection"
          dark
          @change="resetAndFetch()"
        >
          <v-btn
            v-for="sectionOption in filterOptions.sectionOptions"
            :key="sectionOption"
            dark
            small
            :disabled="isLoading"
            :value="sectionOption"
          >
            {{ sectionOption }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <div class="mb-5">
        <label class="white--text mr-3">
          Window:
        </label>

        <v-btn-toggle
          v-model="filters.selectedWindow"
          dark
          @change="resetAndFetch()"
        >
          <v-btn
            v-for="windowOption in filterOptions.windowOptions"
            :key="windowOption"
            dark
            small
            :disabled="isLoading"
            :value="windowOption"
          >
            {{ windowOption }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <div class="mb-5">
        <label class="white--text mr-3">
          Sort By:
        </label>

        <v-btn-toggle
          v-model="filters.selectedSort"
          dark
          @change="resetAndFetch()"
        >
          <v-btn
            v-for="sortOption in filterOptions.sortOptions"
            :key="sortOption"
            dark
            small
            :disabled="isLoading || filters.selectedSection !== 'user'"
            :value="sortOption"
          >
            {{ sortOption }}
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <ImageGallery
      class="my-10"
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
      filterOptions: {
        sectionOptions: ['hot', 'top', 'user'],
        sortOptions: ['viral', 'top', 'time', 'rising'],
        windowOptions: ['day', 'week', 'month', 'year', 'all'],
      },
      isLoading: false,
      filters: {
        selectedSection: 'top',
        selectedSort: 'viral',
        isShowViral: true,
        selectedWindow: 'day',
      },
      galleries: [],
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
