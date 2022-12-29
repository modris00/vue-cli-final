<template>
  <div class="product-details">
    <!--product-details-->
    <div class="col-sm-5">
      <div class="view-product">
        <img :src="imgSrc" alt="" />
        <!--<h3>ZOOM</h3>-->
      </div>
      <div id="similar-product" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <a href=""
              ><img src="images/product-details/similar1.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar2.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar3.jpg" alt=""
            /></a>
          </div>
          <div class="item">
            <a href=""
              ><img src="images/product-details/similar1.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar2.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar3.jpg" alt=""
            /></a>
          </div>
          <div class="item">
            <a href=""
              ><img src="images/product-details/similar1.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar2.jpg" alt=""
            /></a>
            <a href=""
              ><img src="images/product-details/similar3.jpg" alt=""
            /></a>
          </div>
        </div>

        <!-- Controls -->
        <a class="left item-control" href="#similar-product" data-slide="prev">
          <i class="fa fa-angle-right"></i>
        </a>
        <a class="right item-control" href="#similar-product" data-slide="next">
          <i class="fa fa-angle-left"></i>
        </a>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="product-information">
        <!--/product-information-->
        <img src="images/product-details/new.jpg" class="newarrival" alt="" />
        <!-- <h2>بلوزة أديداس حرارية</h2> -->
        <h2>{{ name }}</h2>
        <img src="images/product-details/rating.png" alt="" />
        <span>
          <span> ${{ price }}</span>
          <label>عدد القطع:</label>
          <input type="text" value="3" />
          <button type="button" class="btn btn-fefault cart">
            <i class="fa fa-shopping-cart"></i>
            أضف الى العربة
          </button>
        </span>
        <p><b>التوفر:</b> في المتجر</p>
        <p><b>الماركة:</b> أديداس</p>
        <!-- <p><b>الصنف:</b> اكسسوريز</p> -->
        <p><b>الصنف:</b> {{ category }}</p>
      </div>
      <!--/product-information-->
    </div>
  </div>
  <!--/product-details-->

  <div class="category-tab shop-details-tab">
    <!--category-tab-->
    <div class="col-sm-12">
      <ul class="nav nav-tabs">
        <li><a href="#details" data-toggle="tab">تفاصيل أخرى</a></li>
        <li class="active">
          <a href="#reviews" data-toggle="tab">الآراء (5)</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane fade" id="details">
        <div class="col-sm-12">
          <p style="margin-right: 25px">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="tab-pane fade active in" id="reviews">
        <div class="col-sm-12">
          <ul>
            <li>
              <a href=""><i class="fa fa-user"></i>ناصر</a>
            </li>
            <li>
              <a href=""><i class="fa fa-clock-o"></i>{{ date }}</a>
            </li>
          </ul>
          <p><b>أكتب رأيك</b></p>

          <form action="#">
            <span>
              <input type="text" placeholder="الاسم" />
              <input type="email" placeholder="عنوان البريد الالكتروني" />
            </span>
            <textarea name=""></textarea>
            <b>التقييم: </b>
            <img src="images/product-details/rating.png" alt="" />
            <button type="button" class="btn btn-default pull-right">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--/category-tab-->
</template>
<script>
export default {
  props: ["imgSrc", "name", "price", "category", "description", "date"],
};
</script>
