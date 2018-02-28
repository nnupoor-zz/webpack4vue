<template>
  <div class="welcome-class">
   {{byeText}}
   <router-link to="/">Back!</router-link>
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
        byeText: 'K Bye!!'
      }
    },
    methods: {
      _someGoofyMethod() {
        console.log('I am goofier than you can ever be!')
      }
    },
    mounted() {
    },
    created() {
      this._someGoofyMethod();
    }
  }
</script>

<style scoped lang="scss">
  .welcome-class {
    background: orange;
    font-size: 18px;
    a {
      display: block;
      font-size: 16px;
    }
  }
</style>