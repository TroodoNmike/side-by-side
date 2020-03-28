import {shallowMount} from '@vue/test-utils'
import AppBasic from '@/components/AppBasic.vue'

describe('Basic.vue', () => {
  it('renders expected text', () => {
    const wrapper = shallowMount(AppBasic, {
      propsData: { }
    });
    expect(wrapper.text()).toMatch('I am basic component')
  })
});
