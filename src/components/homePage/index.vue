<template>
  <div id="index" class="home">
    <swipe />
    <!-- <pricing-enter id="pricing" />
    <mining-steps />
    <advantage />
    <famous-news />
    <partner /> -->
  </div>
</template>
<script>
import PricingEnter from "./PricingEnter";
import MiningSteps from "./MiningSteps";
import Advantage from "./advantage";
import FamousNews from "./FamousNews";
import partner from "./partner";
import Swipe from "./swipe";
export default {
  components: {
    PricingEnter,
    MiningSteps,
    Advantage,
    FamousNews,
    partner,
    Swipe
  },
  data() {
    return {};
  }
};
</script>
