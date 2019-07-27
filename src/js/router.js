// 这里只用来配置路由
import VueRouter from 'vue-router'

import login from '../components/login/login.vue'

import submitorder from '../components/submitorder/submitorder.vue'
import addAddress from '../components/submitorder/addAddress.vue'

import mine from '../components/mine/mine.vue'

import order from '../components/order/order.vue'

import entrance from '../components/entrance/entrance.vue'

import index from '../components/index/index.vue'
import totalsort from '../components/index/totalsort.vue'
import screen from '../components/index/screen.vue'

import flowerentrance from '../components/flowerEntrance/flowerEntrance.vue'
import flowerdowntab from '../components/flowerEntrance/flowerDownTab.vue'
import flowercontent from '../components/flowerEntrance/flowerEntranceContent.vue'

import shop from '../components/shop/shop.vue'

import addnewaddr from '../components/submitorder/addNewAddr.vue'

import axiosdemo from '../components/axiosdemo.vue'
import axiosparam from '../components/axiosparam.vue'



export default new VueRouter({
  routes:[
    {
      path:'/',
      component:entrance,

      redirect:'/entrance'
    },
    {
      path:'/shop',component:shop
    },
    {
      path:'/flowerEntrance',
      component:flowerentrance,
      children:[
        {
          path:'/flowerDownTab',component:flowerdowntab
        }
      ]

    },
    {
      path:'/index',
      component:index,
      // 因为indexContent是index里面的一个组件，也是index页面上的一部分，所以它的路由也是index的路由
      children:[
        {
          path:'/totalsort',component:totalsort
        },

        {
          path:'/screen',component:screen
        }
      ]
    },
    {
      path:'/entrance',component:entrance
    },
    {
      path:'/login',component:login
    },
    {
      path:'/submitorder',component:submitorder
    },
    {
      path:'/addAddress',component:addAddress
    },
    {
      path:'/mine',component:mine
    },
    {
      path:'/addNewAddr',component:addnewaddr
    },
    {
      path:'/order',component:order
    },
    {
        path:'/*',redirect:'/login'
    }
  ]
})

