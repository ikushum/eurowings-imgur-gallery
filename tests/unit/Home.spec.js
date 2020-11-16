import { createLocalVue, shallowMount } from '@vue/test-utils';

import ImageFilters from '@/components/ImageFilters.vue';
import Home from '@/views/Home.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

const localVue = createLocalVue();
localVue.use(VueAxios, axios);

describe('ImageFilters.vue', () => {
  it('Viral Images checkbox is false when the checkbox is clicked', async () => {
    const isShowViral = 'true';

    const wrapper = shallowMount(Home, {
      localVue,
      data() {
        return {
          filters: {
            isShowViral,
          },
        };
      },
    });

    const imageFilterComponent = wrapper.find(ImageFilters);
    imageFilterComponent.vm.$emit('change-show-viral', 'false');

    expect(wrapper.vm.filters.isShowViral).toBe('false');
  });
});
