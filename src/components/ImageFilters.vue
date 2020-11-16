<template>
  <div class="my-10">
    <div class="d-flex align-center mb-5">
      <label class="white--text mr-3">
        Show Viral Images
      </label>

      <v-checkbox
        id="isShowViralCheckbox"
        :input-value="isShowViral"
        :value="isShowViral"
        dark
        hide-details
        class="pa-0 ma-0"
        :disabled="isLoading"
        @change="$emit('change-show-viral', !isShowViral), $emit('change')"
      />
    </div>

    <div class="mb-5">
      <label class="white--text mr-3">
        Section:
      </label>

      <v-btn-toggle
        id="selectedSection"
        :value="selectedSection"
        dark
        @change="$emit('change-section', $event)"
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
        id="selectedWindow"
        :value="selectedWindow"
        dark
        @change="$emit('change-window', $event)"
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
        id="selectedSort"
        :value="selectedSort"
        dark
        @change="$emit('change-sort', $event)"
      >
        <v-btn
          v-for="sortOption in filterOptions.sortOptions"
          :key="sortOption"
          dark
          small
          :disabled="isLoading || selectedSection !== 'user'"
          :value="sortOption"
        >
          {{ sortOption }}
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    isShowViral: {
      type: Boolean,
      default: false,
    },
    selectedSort: {
      type: String,
      default: '',
    },
    selectedSection: {
      type: String,
      default: '',
    },
    selectedWindow: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      filterOptions: {
        sectionOptions: ['hot', 'top', 'user'],
        sortOptions: ['viral', 'top', 'time', 'rising'],
        windowOptions: ['day', 'week', 'month', 'year', 'all'],
      },
    };
  },
};
</script>
