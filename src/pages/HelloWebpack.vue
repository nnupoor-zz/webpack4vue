<template>
  <div class="welcome-class">
    <h2>{{welcomeText}}</h2>
    <keep-alive>
      <div class="btn-wrapper">
        <router-link class="hi" to="hello">Hi</router-link>
        <router-link class="bi" to="bye">Bi</router-link>
      </div>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// Set the parent router view.
// The parent route component is Home.vue in pages.
// Loads home.vue from here.
  export default {
    name: 'HelloWebpack',
    components: {
    },
    data: function(){
      return {
        welcomeText: 'Welcome, old friend!'
      }
    },
    methods: {
      _someSillyMethod() {
        console.log('I bet you can not be as silly as me!')
      }
    },
    mounted() {
    },
    created() {
      this._someSillyMethod();
    }
  }
</script>

<style scoped lang="scss">
  .welcome-class {
    h2 {
      margin-top: 0;
      margin-bottom: 2em;
    }
    padding: 1em;
    background: #efefef;
    border-radius: 4px;
    font-size: 24px;
    text-align: center;
    .btn-wrapper {
      margin-bottom: 2em;
      margin-top: 16px;
      a {
        color: #fff;
        text-decoration: none;
        padding: 0.5em 2em;
        border-radius: 3px;
      }
      .hi {
        background: #6c6cd6;
      }
      .bi {
        background: #d66c87
      }
    }
  }
</style>