<template>
  <div class="container text-center">
    <div class="logo-404">
      <router-link to="/"
        ><img src="images/home/logo.png" alt=""
      /></router-link>
    </div>
    <div class="content-404">
      <img
        src="images/404/404.png"
        id="error_img1"
        class="img-responsive"
        alt="error big image in the content div"
      />
      <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
      <p>
        Uh... So it looks like you brock something. The page you are looking for
        has up and Vanished.
      </p>
      <h2><router-link to="/">Bring me back Home</router-link></h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Error404View",
  created() {
    if (localStorage.productToShow) {
      localStorage.removeItem("productToShow");
      console.log("removed product to show - view:Error 404 page");
    }
    if (localStorage.productToUpdate) {
      localStorage.removeItem("productToUpdate");
      console.log("removed productToUpdate - view:show");
    }
  },
};
</script>
<style scoped>
#error_img1 {
  width: 30%;
}
</style>
