<template>
  <div id="clear">
    <button @click="clearMyStorage()">Click to clear localStorage</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearMyStorage() {
      localStorage.clear();
      alert("localStorage cleared - Removed all products ");
    },
  },
  created() {
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
    }
  },
};
</script>
<style scoped>
#clear {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
}
</style>
