<template>
  <div class="about">
    <h1>This is a product list page</h1>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        @click="$router.push(`products/${product.id}`)"
      >
        {{ product.name }}
        {{ product.consumerPrice }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
