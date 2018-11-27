import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    // 账户资料模块
    {
      path: '/',
      name: '首页',
      component:() =>import(/* webpackChunkName: "home" */ "./views/Home.vue"),
      children: [
        {path: 'index',name: '页面首页',component: () =>import(/* webpackChunkName: "home" */ "./views/Index.vue")},
        {path: 'order',name: '订单记录',component: () =>import(/* webpackChunkName: "home" */ "./views/Order.vue")},
        {
          path: 'assets',
          name: '资产',
          component: () =>import(/* webpackChunkName: "home" */ "./views/assets/Assets.vue"),
          children:[
            {path: 'index',name: '资产首页',component: () =>import(/* webpackChunkName: "home" */ "./views/assets/Index.vue")},
            {path: 'withdrawal',name: '提现',component: () =>import(/* webpackChunkName: "home" */ "./views/assets/Withdrawal.vue")},
            {path: 'record',name: '提现记录',component: () =>import(/* webpackChunkName: "home" */ "./views/assets/Record.vue")},
            {path: 'details',name: '账单明细',component: () =>import(/* webpackChunkName: "home" */ "./views/assets/Details.vue")},
            {path: 'recordDetails',name: '提现详情',component: () =>import(/* webpackChunkName: "home" */ "./views/assets/RecordDetails.vue")},
          ]
        },
        {
          path: 'account',
          name: '账户中心',
          component: () =>import(/* webpackChunkName: "home" */ "./views/account/Account.vue"),
          children:[
            {path: 'index',name: '账户中心首页',component: () =>import(/* webpackChunkName: "home" */ "./views/account/Index.vue")},
          ]
        },
      ]
    },
    // {path: "/about",name: "about",component: () =>import(/* webpackChunkName: "about" */ "./views/About.vue")}
  ]
});
