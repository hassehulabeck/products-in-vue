<template>
  <div class="home">
    <h1>Välkommen till min butik</h1>
    <Product :product="product" />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Product,
  },
  computed: {
    product() {
      let productId = Math.floor(Math.random(0, 1) * 10);
      let product = this.$store.getters.getProduct(productId);
      return product;
    },
  },
};
</script>
