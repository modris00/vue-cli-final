import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/HomepageView.vue";
import Account from "../views/AccountView.vue";
import Checkout from "../views/CheckoutView.vue";
import Cart from "../views/CartView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import ContactUs from "../views/ContactUsView.vue";
import Favorites from "../views/FavoritesView.vue";
import Shop from "../views/ShopView.vue";
import Cpanel from "../views/CpanelView.vue";
import Error from "../views/Error404View.vue";
import AddProductView from "../views/AddProductView.vue";
import UpdateProductView from "../views/UpdateProductView.vue";
import ShowProductView from "../views/ShowProductView.vue";
import ClearStorage from "../views/ClearStorage.vue";
import Categories from "../views/CategoriesView.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Homepage,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/cpanel",
    name: "cpanel",
    component: Cpanel,
  },
  {
    path: "/error-404",
    name: "error-404",
    component: Error,
  },
  {
    path: "/add",
    name: "add",
    component: AddProductView,
  },
  {
    path: "/update",
    name: "update",
    component: UpdateProductView,
  },
  {
    path: "/show-product",
    name: "show-product",
    component: ShowProductView,
  },
  {
    path: "/clear",
    name: "clear",
    component: ClearStorage,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
