<template>
  <div class="home-recommend">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(focusList, index) in productsShow.focusList"
            :key="index"
          >
            <img :src="focusList.picUrl" alt="" />
          </div>
        </div>
        小圆点
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>