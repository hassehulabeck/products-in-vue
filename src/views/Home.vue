<template>
  <div class="home">
    <h1>Välkommen till min butik</h1>
    <Product />
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
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
