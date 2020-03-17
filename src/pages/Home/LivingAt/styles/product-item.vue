<template>
  <div class="product-list">
    <div class="list-title">
      <div class="title">热销爆款</div>
      <div class="text">人气好物放心购</div>
    </div>
    <div class="conter">
      <div class="list-content" v-for="item in 4" :key="item">
        <div class="content">
          <img src="../../../images/01.jpg" alt="" />
          <div class="essential">出行必备</div>
        </div>
        <div class="name">5条装 男式纯棉女内裤</div>
        <div class="price">￥19.9</div>
        <span>满88顺丰包邮</span>
        <span>满99减10</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
