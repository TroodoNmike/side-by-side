import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders expected text', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { }
    });
    expect(wrapper.text()).toMatch('I am component')
  })
});
