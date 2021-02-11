<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <span>{{ product.consumerPrice }}</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
div {
  width: 30%;
  padding: 1em;
}
span {
  color: red;
}
</style>
