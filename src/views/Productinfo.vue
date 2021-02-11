<template>
  <div>
    {{ product.name }}
  </div>
</template>

<script>
export default {
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
