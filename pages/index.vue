<template>
  <section class="container">
    <!--<el-carousel>-->
      <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <!--<div class="banner-bg"></div>-->
        <!--<h3>{{ item }}</h3>-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    <Carousel loop>
      <CarouselItem>
        <div class="carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="carousel">4</div>
      </CarouselItem>
    </Carousel>
    <div class="w1200">
      <app-logo/>
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link class="button--green" to="/list">{{$store.state.counter}}</nuxt-link>
        <nuxt-link class="button--grey" target="_blank" to="/list">{{$store.state.counter}}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
