<template>
  <footer id="footer">
    <!--Footer-->

    <div class="footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="companyinfo" style="margin-top: 5px">
              <h2 style="font-size: 38px"><span>e</span>-mall</h2>
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>-->
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>روابط</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="/">الرئيسية</router-link></li>
                <li><router-link to="/account">الحساب</router-link></li>
                <li><router-link to="/favorites">المفضلة</router-link></li>
                <li><router-link to="/cart">عربة التسوق</router-link></li>
                <li><router-link to="/register">التسجيل</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>تسوق سريع</h2>
              <ul class="nav nav-pills nav-stacked">
                <li><router-link to="/error-404">تي شيرت</router-link></li>
                <li><router-link to="/error-404">رجالي</router-link></li>
                <li><router-link to="/error-404">حريمي</router-link></li>
                <li>
                  <router-link to="/error-404">بطاقات الهدايا</router-link>
                </li>
                <li><router-link to="/error-404">أحذية</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="single-widget">
              <h2>عن المتجر</h2>
              <ul class="nav nav-pills nav-stacked">
                <li>
                  <router-link to="/error-404">معلومات الشركة</router-link>
                </li>
                <li><router-link to="/error-404">الوظائف</router-link></li>
                <li><router-link to="/error-404">موقع المتجر</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <p style="text-align: center">
            Copyright ©
            {{ my_year }}
            E-MALL Inc. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!--/Footer-->
</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      my_year: new Date().getFullYear(),
    };
  },
};
</script>
