import Vue from 'vue';
// Taken from https://vuejs.org/v2/guide/unit-testing.html
// The path is relative to the project root.
import MyComponent from '../../pages/HelloWebpack.vue';

describe('MyComponent', () => {
  it(`should set correct welcomeText value`, () => {
    // Extend the component to get the constructor, which we can then initialize directly.
    it('has a created hook', () => {
      expect(typeof MyComponent.created).toBe('function')
    })

    it('sets the correct default data', () => {
      expect(typeof MyComponent.data).toBe('function')
      const defaultData = MyComponent.data()
      expect(defaultData.welcomeText).toBe( 'Welcome, old friend!')
    })

    it('renders the correct message', () => {
      const Constructor = Vue.extend(MyComponent)
      const vm = new Constructor().$mount()
      expect(vm.$el.textContent).toBe('Welcome, old friend!')
    })
  })
})