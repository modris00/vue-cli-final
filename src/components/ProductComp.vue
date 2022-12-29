<template>
  <div class="col-sm-4">
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="imgSrc" alt="product image" />
          <h2>${{ price }}</h2>
          <p>{{ name }}</p>
          <a href="#" class="btn btn-default add-to-cart"
            ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
          >
        </div>
        <div class="product-overlay">
          <div class="overlay-content">
            <h2>${{ price }}</h2>
            <p>{{ name }}</p>
            <a href="#" class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
            >
          </div>
        </div>
      </div>
      <div class="choose">
        <ul class="nav nav-pills nav-justified">
          <li>
            <a href="#" @click="toFavorites(index)"
              ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductComp",
  props: [
    "id",
    "name",
    "price",
    "imgSrc",
    "category",
    "description",
    "toFavorites",
  ],
};
</script>
