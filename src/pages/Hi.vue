<template>
  <div class="welcome-class">
   {{hiText}}
   <router-link to="default">Nope!</router-link>
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
        hiText: 'Hey Dude! \'Sup?'
      }
    },
    methods: {
      _someMehMethod() {
        console.log('Meh.')
      }
    },
    mounted() {
    },
    created() {
      this._someMehMethod();
    }
  }
</script>

<style scoped lang="scss">
  .welcome-class {
    background: yellow;
    font-size: 18px;
    a {
      display: block;
      font-size: 16px;
    }
  }
</style>