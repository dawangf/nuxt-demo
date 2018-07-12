<!--
 - @author: dawangf.
 - @createDate: 2018/7/6.
 - @file: Footer.name: Drop Down Menu
 -->

<template>
    <footer>
        <div class="w1200">
            <div class="copyright">
              Copyright © 2014 Fujian Hongda Electronic Technology Development Co.,LTD. All Rights Reserved　　版权所有：福建省鸿达电子技术开发有限公司
              <br/>地 址：福建省福州市闽侯县上街镇高新区海西园创业路6号山亚国际中心19楼　　E-Mail： fjhd@fjhongda.net　　闽ICP备：05023194
            </div>
        </div>
    </footer>
</template>

<script>
    //import OtherComponent from './components/other.vue'
    export default {
        data() {
            return {
                msg: 'hello vue compoent!'
            }
        }
    }
</script>

<style scoped>
    footer {
      border-top: 3px solid #818181;
    }
    .copyright {
      font-size: 12px;
      color: #828282;
      padding: 15px 0;
      line-height: 23px;
      text-align: center;
    }
</style>
