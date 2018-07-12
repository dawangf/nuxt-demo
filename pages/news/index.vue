<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: index.name: Drop Down Menu
 -->

<template>
  <section class="container">
    <div class="banner-bg"></div>
    <div class="w1200">
      <ul>
        <li v-for="(item, index) in newsList" :key="index">
          <img src="" alt="">
          <div class="title">{{item.name}}</div>
          <div>{{item.dateTime}}</div>
          <div>{{item.summary}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        msg: [{
          "name": "某某某离婚了，可惜了啊",
          "path": "/",
          "dateTime": "2018-07-06",
          "summary": "我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁"
        }, {
          "name": "某某某离婚了，可惜了啊",
          "path": "/",
          "dateTime": "2018-07-06",
          "summary": "我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁我是简介，你是谁"
        }],
        newsList: []
      }
    },
    async asyncData({context}) {
      console.log('newsList')
      let {data} = await axios.get(`https://api.myjson.com/bins/jycfm`)
      console.log('date', data)
      return {newsList: data}
    }
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
