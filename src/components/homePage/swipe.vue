<template>
  <div data-v-de0e5946 class="swipe thumbnail" style="height: 720px;">
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 5,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 5,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>
<style lang="scss" scoped>
.swipe[data-v-de0e5946] {
  width: 100%;
  overflow-x: hidden;
  height: 620px;
  position: relative;
}
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("https://oss.bitdeer.com/6Ogo39OOwPp3orKrOpkE.jpg");
    background-size: 100% 100%;
  }
  &.slide-2 {
    background-image: url("https://oss.bitdeer.com/gwuHh3ffcm9BwXY07L0x.jpg");
  }
  &.slide-3 {
    background-image: url("https://oss.bitdeer.com/miRVksvevFosJVTzZL5y.jpg");
  }
  &.slide-4 {
    background-image: url("https://oss.bitdeer.com/MqY2O2ouCDR6iD0813B7.jpg");
  }
  &.slide-5 {
    background-image: url("https://oss.bitdeer.com/Vus1LCoRWSjyn9L5lCoo.jpg");
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
