<template>
  <div class="home">
    <Nav />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  padding-top: 72px;
}
.main-content.hasNotice {
  padding-top: 112px;
}
</style>
