<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/valid-v-for -->
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
                    <a href="" @click.prevent="GoToCat('accessories')"
                      >اكسسوريز</a
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('care')">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="makeup.html" @click.prevent="GoToCat('makeup')"
                      >مكياج</a
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('bags')">شنط</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('perfumes')">عطور</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('devices')">اجهزه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('women')">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="" @click.prevent="GoToCat('men')">رجال</a>
                  </h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">
              {{ title }}
            </h2>

            <!--comm-->
            <!-- <Product
              v-for="item in products"
              :name="item.name"
              :imgSrc="item.imgSrc"
              :price="item.price"
              :toFavorites="toFavorites(index)"
            /> -->
            <!--comm-->

            <!--to show items that belong to category-->
            <div class="col-sm-4" v-for="(item, index) in myObj">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img :src="item.imgSrc" alt="" />
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
                      <a href="#" class="btn btn-default add-to-cart">
                        <i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="#" @click.prevent="toFavorites(index)"
                        ><i class="fa fa-plus-square"></i>أضف إلى المفضلة</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- <ul v-if="myObj">
              <li v-for="(key, value) in myObj" :key="key">
                {{ key }} | {{ value }}
              </li>
            </ul> -->

            <!--End v-for -->
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import Product from "@/components/ProductComp.vue";
export default {
  name: "ShopView",
  data() {
    return {
      products: [],
      favorites: [],
      // DisplayAll: false,
      title: "title..",
      belongsToCurrentCategory: [],
      category: "",
      myObj: [],
      cats: {
        accessories: "اكسسوريز",
        care: "عنايه",
        bags: "شنط",
        perfumes: "عطور",
        devices: "اجهزه",
        makeup: "مكياج",
        women: "ملابس نساء",
        men: "رجال",
      },
    };
  },
  // components: { Product },
  created() {
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed productToShow - view:Shop");
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
    if (localStorage.favorites) {
      this.favorites = JSON.parse(localStorage.favorites);
    }
    if (localStorage.category) {
      this.category = JSON.parse(localStorage.category);
    }
    // this.DisplayAll = true;
  },
  methods: {
    toFavorites(index) {
      this.favorites.push(this.products[index]);
      localStorage.favorites = JSON.stringify(this.favorites);
    },
    GoToCat(single_cat) {
      // this.DisplayAll = false;
      // localStorage.DisplayAll = JSON.stringify(this.DisplayAll);
      this.title = this.cats[single_cat];
      this.myObj = [];
      // this.belongsToCurrentCategory = [];
      // for (let i = 0; i < this.products.length; i++) {
      //   for (let c = 0; c < this.cats.length; c++) {
      //     if (this.products[i].category == this.cats[single_cat]) {
      //       this.belongsToCurrentCategory.push(this.products[i]);
      //     }
      //   }
      //   // this.product[i].category = this.
      // }
      let x = this.cats;
      const foundObjects = this.products.filter(function (object) {
        return object.category == x[single_cat];
      });
      this.myObj = foundObjects;
      // this.belongsToCurrentCategory.push(foundObjects);
      // console.log(foundObjects);
      // alert(foundObjects);
      // console.log(this.cats[single_cat]);
      // alert(this.cats[single_cat]);
      // console.log(this.belongsToCurrentCategory);
    },
  },
};
</script>
