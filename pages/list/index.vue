<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: index.name: Drop Down Menu
 -->

<template>
  <section class="container">
    <div class="w1200">
      {{msg}}
      <button @click="$store.commit('INCREMENT')">{{$store.state.counter}}</button> {---}
      <button @click="test()">getter{{getterTest}}</button>
      <a @click="getRoute()">首页</a>
    </div>
  </section>
</template>

<script>
  //import OtherComponent from './components/other.vue'
  export default {
    data() {
      return {
        msg: 'hello vue compoent!',
        getterTest: 0
      }
    },
    methods: {
      getRoute() {
        console.log('router --> index')
        this.$router.push('/')
      },
      test() {
        this.getterTest = this.$store.getters.getAddCounter
      }
    }
  }
</script>

<style scoped>
  body {
  }
</style>
