import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>
    import ('../views/home/Home')
const Cart = () =>
    import ('../views/cart/Cart')
const CateGory = () =>
    import ('../views/category/CateGory')
const ProFile = () =>
    import ('../views/profile/ProFile')
Vue.use(VueRouter)


Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: CateGory
    },
    {
        path: '/profile',
        component: ProFile
    },

]

const router = new VueRouter({
    mode: 'history',

    routes
})

export default router