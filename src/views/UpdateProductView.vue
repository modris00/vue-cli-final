<template>
  <div id="contact-page" class="container">
    <div class="bg">
      <div class="row" style="margin-bottom: 50px">
        <div class="col-sm-12">
          <h2 class="title text-center">تعديل بيانات منتج</h2>
          <!--<div id="gmap" class="contact-map">
					</div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8" v-if="the_product">
          <div class="contact-form">
            <div class="status alert alert-success" style="display: none"></div>
            <form
              id="main-contact-form"
              class="contact-form row"
              name="contact-form"
              method="post"
            >
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  required="required"
                  placeholder="اسم المنتج"
                  v-model="name"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required="required"
                  v-model="price"
                  placeholder="السعر"
                />
              </div>
              <div class="form-group col-md-6">
                <select name="subject" class="form-control" v-model="category">
                  <option>اكسسوريز</option>
                  <option>عنايه</option>
                  <option>مكياج</option>
                  <option>شنط</option>
                  <option>عطور</option>
                  <option>اجهزه</option>
                  <option>ملابس نساء</option>
                  <option>رجال</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <input
                  type="file"
                  name="image"
                  class="form-control"
                  required="required"
                  placeholder="اختر صورة المنتج"
                />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name="message"
                  id="message"
                  required="required"
                  class="form-control"
                  rows="8"
                  placeholder="وصف المنتج أو نبذة عنه"
                  v-model="description"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="button"
                  name="submit"
                  class="btn btn-primary pull-right"
                  value="حفظ التعديلات"
                  @click="UpdateProdcut()"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/#contact-page-->
  <!-- {{ UpdateProdcut() }} -->
</template>
<script>
export default {
  name: "UpdateProductView",
  data() {
    return {
      // the_product: localStorage.getItem("productToUpdate"),
      the_product: false,
      products: JSON.parse(localStorage.products),
      name: "",
      price: "",
      category: "",
      imgSrc: "",
      description: "",
      // t: this.products,
      // name: "",
      // name: this.products[this.the_product].name,
      // price: this.products[this.the_product].price,
      // category: this.products[this.the_product].category,
      // imgSrc: "images/products/1.jpeg",
      // date: this.products[this.the_product].date,
      // description: this.products[this.the_product].description,
    };
  },
  created() {
    if (localStorage.productToUpdate) {
      this.the_product = localStorage.getItem("productToUpdate");

      this.name = this.products[this.the_product].name;
      this.price = this.products[this.the_product].price;
      this.category = this.products[this.the_product].category;
      this.imgSrc = "images/products/8.jpeg";
      // this.date = this.products[this.the_product].date;
      this.description = this.products[this.the_product].description;
    }
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed productToShow - view:update");
    }
  },
  methods: {
    UpdateProdcut() {
      // alert(this.description);
      this.products[this.the_product].name = this.name;
      this.products[this.the_product].price = this.price;
      this.products[this.the_product].category = this.category;
      this.products[this.the_product].description = this.description;
      this.products[this.the_product].imgSrc = this.imgSrc;
      this.products[this.the_product].date = new Date().toLocaleString();
      localStorage.products = JSON.stringify(this.products);

      this.$router.push("/cpanel");
    },
  },
};
// new Date().toLocaleString(),
</script>
