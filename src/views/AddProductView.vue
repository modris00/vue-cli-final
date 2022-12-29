<template>
  <div id="contact-page" class="container">
    <div class="bg">
      <div class="row" style="margin-bottom: 50px">
        <div class="col-sm-12">
          <h2 class="title text-center">إضافة منتج جديد</h2>
          <!--<div id="gmap" class="contact-map">
					</div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
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
                  type="number"
                  name="email"
                  class="form-control"
                  required="required"
                  placeholder="السعر"
                  v-model="price"
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
                  v-model="description"
                  placeholder="وصف المنتج أو نبذة عنه"
                ></textarea>
              </div>
              <div class="form-group col-md-12">
                <input
                  type="button"
                  name="submit"
                  class="btn btn-primary pull-right"
                  value="اضافة"
                  @click="addProduct()"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/#contact-page-->
</template>
<script>
export default {
  name: "AddProductView",
  data() {
    return {
      products: [],
      name: "",
      price: "",
      category: "اكسسوريز",
      description: "",
      // id: this.products.length + 1,
    };
  },
  created() {
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed productToShow - view:add product");
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
    if (localStorage.products) {
      this.products = JSON.parse(localStorage.products);
    }
  },
  methods: {
    addProduct() {
      this.products.push({
        name: this.name,
        price: this.price,
        description: this.description,
        imgSrc: "images/products/8.jpeg",
        date: new Date().toLocaleString(),
        category: this.category,
      });
      localStorage.products = JSON.stringify(this.products);
      this.$router.push("/cpanel");
      // alert("added 1 product");
      // $route.path.push("");
    },
  },
};
</script>
