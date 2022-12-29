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
          <ShowProduct
            v-if="the_product_index"
            :name="single_product.name"
            :price="single_product.price"
            :category="single_product.category"
            :imgSrc="single_product.imgSrc"
            :date="single_product.date"
            :description="single_product.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ShowProduct from "@/components/ShowSingleProduct.vue";
export default {
  name: "ShowProductView",
  components: { ShowProduct },
  data() {
    return {
      the_product_index: false,
      single_product: {
        name: "",
        price: "",
        date: "",
        imgSrc: "",
        description: "",
        category: "",
      },
      products: JSON.parse(localStorage.products),
    };
  },
  created() {
    if (localStorage.productToShow) {
      this.the_product_index = localStorage.getItem("productToShow");
      this.single_product = this.products[this.the_product_index];
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
    // if (localStorage.productToShow) {
    //   localStorage.removeItem("productToShow");
    //   console.log("removed product to show - view:show product");
    // }

    // console.log("Testing", this.single_product);

    // localStorage.removeItem("productToShow");
  },
};
</script>
