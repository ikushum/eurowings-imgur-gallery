<template>
  <v-dialog
    :value="true"
    @input="handleInputChange"
  >
    <v-card
      dark
      :height="$vuetify.breakpoint.mdAndUp ? '90vh': ''"
      width="90vw"
    >
      <v-row no-gutters>
        <v-col
          md="8"
          sm="12"
          class="black"
        >
          <v-img
            height="90vh"
            contain
            :src="image.link"
            :lazy-src="getThumbnail(image)"
          />
        </v-col>

        <v-col
          md="4"
          sm="12"
        >
          <v-card-title>
            <v-spacer />

            <v-icon @click="$emit('close')">
              mdi-close
            </v-icon>
          </v-card-title>

          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-avatar class="mr-2">
                  <v-icon dark>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle v-text="'Title'" />

                  <v-list-item-title v-text="image.title || 'N/A'" />
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar class="mr-2">
                  <v-icon dark>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle v-text="'Description'" />

                  <div>
                    {{ image.description || 'N/A' }}
                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar class="mr-2">
                  <v-icon dark>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle v-text="'Upvotes'" />

                  <div>
                    {{ image.ups || 'N/A' }}
                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar class="mr-2">
                  <v-icon dark>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle v-text="'Down Votes'" />

                  <div>
                    {{ image.downs || 'N/A' }}
                  </div>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar class="mr-2">
                  <v-icon dark>
                    mdi-information-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-subtitle v-text="'Score'" />

                  <div>
                    {{ image.score || 'N/A' }}
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-text />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleInputChange($event) {
      if (!$event) {
        this.$emit('close');
      }
    },
    getThumbnail(image) {
      const imageBase = 'https://i.imgur.com/';
      const splittedByDot = image.link.split('.');
      const imageExtension = splittedByDot[splittedByDot.length - 1];
      return `${imageBase + image.id}b.${imageExtension}`;
    },
  },
};
</script>
