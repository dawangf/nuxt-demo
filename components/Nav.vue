<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: Nav.name: Drop Down Menu
 -->

<template>
  <header>
    <div class="w1200">
      <nuxt-link class="logo" to="/">
        <img src="~/assets/images/logo.png" alt="logo">
      </nuxt-link>
      <nav>
        <nuxt-link v-for="item in navList" :to="item.path" :key="item.name">{{item.name}}
          <div class="nav-mask">
            <div class="w1200">
              <div class="nav-child">{{item.name}}</div>
            </div>
          </div>
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        navList: []
      }
    },
    mounted() {
      console.log('发起菜单请求前：')
      this.$store.dispatch('apiNavs').then(res => {
        console.log('ssssss', res)
        this.navList = res
      })
//      let {data} = await axios.get(`https://api.myjson.com/bins/11r7f6`)
//      console.log('菜单', {data}.data)
//      return this.navList = {data}.data
    }
  }
</script>

<style scoped lang="less">
  header {
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #23c3d6;
    font-size: 16px;
  }

  .logo {
    margin-top: 3px;
  }

  nav {
    float: right;
    a {
      display: inline-block;
      padding: 0px 20px;
      color: #333333;
      text-decoration: none;
      .nav-mask {
        position: absolute;
        top: 50px;
        left: 0px;
        z-index: -1;
        width: 100%;
        height: 50px;
        text-align: right;
        color: #333333;
        opacity: 0;
        background-color: rgba(255, 255, 255,  .5);
        transition: all .3s;
      }
      &:hover {
        color: #ffffff;
        background-color: #23c3d6;
        .nav-mask{
          opacity: 1;
          z-index: 1;
        }
      }
      &:first-child:hover .nav-mask{
        opacity: 0;
        z-index: -1;
      }
      .nav-child {

      }
    }
  }
</style>
