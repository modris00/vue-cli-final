<template>
  <tr>
    <td class="cart_product">
      <a href=""><img :src="imgSrc" id="product_img" alt="product image" /></a>
    </td>
    <td class="cart_description">
      <h4>
        <a href="">{{ name }}</a>
      </h4>
    </td>
    <td class="cart_description">
      <h4>
        <a href="">{{ category }}</a>
      </h4>
    </td>
    <td class="cart_price">
      <p>${{ price }}</p>
    </td>
    <td class="cart_description">
      <p>{{ date }}</p>
    </td>
    <td class="cart_delete">
      <a href="" @click="DeleteProduct()" class="cart_quantity_delete"
        ><i class="fa fa-times"></i
      ></a>

      <a href="" @click="EditProduct()" class="cart_quantity_delete">
        <i class="fa fa-pencil-square-o"></i>
      </a>

      <a href="" @click="ShowProduct()" class="cart_quantity_delete">
        <i class="fa fa-info-circle"></i>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ProductRow",
  props: ["name", "price", "imgSrc", "category", "date"],
};
</script>

<style scoped>
#product_img {
  width: 70px;
}
</style>
