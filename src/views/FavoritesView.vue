<!-- eslint-disable vue/require-v-for-key -->
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>الأقسام</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="accessories.html">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="attention.html">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="makeup.html">مكياج</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="bags.html">شنط</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="perfumes.html">عطور</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="devices.html">اجهزه</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="women.html">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="men.html">رجال</a></h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">المنتجات المفضلة</h2>
            <!--product here-->
            <div class="col-sm-4" v-for="(item, index) in favorites">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img :src="item.imgSrc" alt="product image" />
                    <h2>${{ item.price }}</h2>
                    <p>{{ item.name }}</p>
                    <a href="#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>${{ item.price }}</h2>
                      <p>{{ item.name }}</p>
                      <a href="#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="#" @click="removeFromFavorites(index)"
                        ><i class="fa fa-plus-square"></i>حذف من المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end product-->
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FavoritesView",
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed product to show - view:favorites");
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
    if (localStorage.favorites) {
      this.favorites = JSON.parse(localStorage.favorites);
    }
  },
  methods: {
    removeFromFavorites(index) {
      this.favorites.splice(index, 1);
      localStorage.favorites = JSON.stringify(this.favorites);
    },
  },
};
</script>
