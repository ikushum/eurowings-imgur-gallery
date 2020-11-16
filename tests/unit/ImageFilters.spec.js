import { shallowMount } from '@vue/test-utils';

import ImageFilters from '@/components/ImageFilters.vue';

describe('ImageFilters.vue', () => {
  it('Viral Images checkbox is true when isShowViral prop is true', () => {
    const isShowViral = 'true';
    const wrapper = shallowMount(ImageFilters, {
      propsData: { isShowViral },
    });

    const checkbox = wrapper.find('#isShowViralCheckbox');

    expect(checkbox.attributes('value')).toBe(isShowViral);
  });

  it('change-show-viral event is triggred when Viral Images checkbox is clicked', async () => {
    const wrapper = shallowMount(ImageFilters);

    const checkbox = wrapper.find('#isShowViralCheckbox');

    await checkbox.trigger('change');

    expect(wrapper.emitted('change-show-viral')).toBeTruthy();
  });
});
