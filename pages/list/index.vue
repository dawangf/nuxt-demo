<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: index.name: Drop Down Menu
 -->

<template>
  <section class="container">
    <div class="w1200">
      {{msg}}
      <button @click="$store.commit('test/getList')">{{$store.state.test.list}}</button>
      <a @click="getRoute()">首页</a>
    </div>
  </section>
</template>

<script>
  //import OtherComponent from './components/other.vue'
  export default {
    data() {
      return {
        msg: 'hello vue compoent!'
      }
    },
    methods: {
      getRoute() {
        console.log('router --> index')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  body {
  }
</style>
