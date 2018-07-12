<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: index.name: Drop Down Menu
 -->

<template>
  <section class="container">
    <div class="banner-bg about-bg"></div>

    <div class="w1200">
      <h1>{{msg | testFilter}}</h1>
    </div>
  </section>
</template>

<script>
    //import OtherComponent from './components/other.vue'
    export default {
        data() {
            return {
                msg: 0
            }
        },
        // components: {
        //  'other-component': OtherComponent,
        //  HeaderComponent,
        // }
    }
</script>

<style scoped>
    body {
        background-color: #dd0000;
    }
</style>
