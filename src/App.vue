<template>
  <!-- <Header v-show="$route.path !== '/error-404'" :active_link="active_link" /> -->
  <!-- <Header v-show="$route.path !== '/error-404'" /> -->
  <header id="header" v-show="$route.path !== '/error-404'">
    <!--header-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <router-link
                to="/"
                :class="{ active: active_link == 6 }"
                @click="setActiveLink(6)"
              >
                <img src="images/home/logo-2.png" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link
                    to="/account"
                    :class="{ active: active_link == 1 }"
                    @click="setActiveLink(1)"
                  >
                    <i class="fa fa-user"></i> الحساب</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/favorites"
                    :class="{ active: active_link == 2 }"
                    @click="setActiveLink(2)"
                    ><i class="fa fa-star"></i> المفضلة</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/checkout"
                    :class="{ active: active_link == 3 }"
                    @click="setActiveLink(3)"
                  >
                    <i class="fa fa-crosshairs"></i> الدفع</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/cart"
                    :class="{ active: active_link == 4 }"
                    @click="setActiveLink(4)"
                  >
                    <i class="fa fa-shopping-cart"></i> عربة التسوق</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/login"
                    :class="{ active: active_link == 5 }"
                    @click="setActiveLink(5)"
                  >
                    <i class="fa fa-lock"></i> تسجيل الدخول</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link
                    to="/"
                    :class="{ active: active_link == 6 }"
                    @click="setActiveLink(6)"
                    >الرئيسية</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/shop"
                    :class="{ active: active_link == 7 }"
                    @click="setActiveLink(7)"
                    >المنتجات</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/contact-us"
                    :class="{ active: active_link == 8 }"
                    @click="setActiveLink(8)"
                    >تواصل معنا</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/cpanel"
                    :class="{ active: active_link == 9 }"
                    @click="setActiveLink(9)"
                    >لوحة التحكم</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="بحث" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
  <router-view />
  <Footer v-show="$route.path !== '/error-404'" />
</template>

<script>
// import Header from "./components/HeaderComp.vue";
import Footer from "./components/FooterComp.vue";
export default {
  data() {
    return {
      msg: "test",
      active_link: 6,
    };
  },
  // components: { Header, Footer },
  components: { Footer },
  created() {
    console.log("App.vue CREATED");
  },
  methods: {
    setActiveLink(val) {
      this.active_link = val;
    },
  },
  computed: {
    getActiveLink() {
      return "";
    },
  },
};
</script>
