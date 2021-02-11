<template>
  <div>
    <Product :product="product" />
  </div>
</template>

<script>
import Product from "../components/Product.vue";
export default {
  components: { Product },
  computed: {
    product() {
      let id = this.$route.params.id;
      let product = this.$store.getters.getProduct(id);
      return product;
    },
  },
};
</script>

<style></style>
