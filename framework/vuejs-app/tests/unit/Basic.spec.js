import {shallowMount} from '@vue/test-utils'
import Basic from '@/components/Basic.vue'

describe('Basic.vue', () => {
  it('renders expected text', () => {
    const wrapper = shallowMount(Basic, {
      propsData: { }
    });
    expect(wrapper.text()).toMatch('I am component')
  })
});
