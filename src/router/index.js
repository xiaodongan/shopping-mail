import  Vue from "vue"
import VueRouter from "vue-router"

const Home = ()=>import("../views/home/Home")
const Category = ()=>import("../views/category/Category")
const ShoppingCart = ()=>import("../views/shoppingCart/ShoppingCart")
const Profile = ()=>import("../views/profile/Profile")

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:ShoppingCart
  },
  {
    path:'/profile',
    component:Profile
  }
]


const router = new VueRouter({
  routes,
  mode:"history"
})

export default  router