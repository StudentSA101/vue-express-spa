// tests/js/components/ExampleComponent.spec.js
import { mount } from '@vue/test-utils';
import expect from 'expect';
import button from '../../../../../app/vue/components/buttons/button.vue';

describe('button.vue', () => {
  it('says that it is an example component', () => {
    const wrapper = mount(button);
    expect(wrapper.html()).toContain('Example Button Component');
  });
});