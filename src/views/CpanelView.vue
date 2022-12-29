<!-- eslint-disable vue/require-v-for-key -->
<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><a href="#">الرئيسية</a></li>
          <li class="active">لوحة التحكم</li>
        </ol>
      </div>

      <h4 style="margin-bottom: 3rem">
        <router-link to="/add">اضافة منتج جديد</router-link>
      </h4>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">المنتج</td>
              <td class="description"></td>
              <td class="description">الصنف</td>
              <td class="price">السعر</td>
              <td class="price">تاريخ الاضافة</td>
              <td class="total">العمليات</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products">
              <td class="cart_product">
                <a href=""
                  ><img :src="item.imgSrc" id="product_img" alt="product image"
                /></a>
              </td>
              <td class="cart_description">
                <h4>
                  <a href="">{{ item.name }}</a>
                </h4>
              </td>
              <td class="cart_description">
                <h4>
                  <a href="">{{ item.category }}</a>
                </h4>
              </td>
              <td class="cart_price">
                <p>${{ item.price }}</p>
              </td>
              <td class="cart_description">
                <p>{{ item.date }}</p>
              </td>
              <td class="cart_delete">
                <a
                  href=""
                  @click.prevent="DeleteProduct(index)"
                  class="cart_quantity_delete"
                  ><i class="fa fa-times"></i
                ></a>

                <a
                  href=""
                  @click.prevent="EditProduct(index)"
                  class="cart_quantity_delete"
                >
                  <i class="fa fa-pencil-square-o"></i>
                </a>

                <a
                  href=""
                  @click.prevent="ShowProduct(index)"
                  class="cart_quantity_delete"
                >
                  <i class="fa fa-info-circle"></i>
                </a>
              </td>
            </tr>
            <!-- <ProductRow
              v-for="item in products"
              :name="item.name"
              :price="item.price"
              :imgSrc="item.imgSrc"
              category="my_category"
              date="my_date"
            /> -->
            <!-- <tr>
              <td class="cart_product">
                <a href=""
                  ><img src="images/products/8.jpeg" width="70px" alt=""
                /></a>
              </td>
              <td class="cart_description">
                <h4><a href="">منتج 2</a></h4>
              </td>
              <td class="cart_description">
                <h4><a href="">الصنف</a></h4>
              </td>
              <td class="cart_price">
                <p>$59</p>
              </td>
              <td class="cart_description">
                <p>date</p>
              </td>
              <td class="cart_delete">
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-times"></i
                ></a>
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-pencil-square-o"></i
                ></a>
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-info-circle"></i
                ></a>
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
</template>
<script>
// import ProductRow from "@/components/ProductRow.vue";
export default {
  name: "CpanelView",
  data() {
    return {
      products: [],
    };
  },
  created() {
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed productToShow - view:cpanel");
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
  },
  methods: {
    DeleteProduct(index) {
      // alert(index);
      this.products.splice(index, 1);
      localStorage.products = JSON.stringify(this.products);
    },
    ShowProduct(index) {
      localStorage.productToShow = index;
      this.$router.push("/show-product");
    },
    EditProduct(index) {
      // alert(index);
      localStorage.productToUpdate = index;
      this.$router.push("/update");
    },
  },
};
</script>

<style scoped>
#product_img {
  width: 70px;
}
</style>
