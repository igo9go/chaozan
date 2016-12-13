import Login from 'pages/login';

import dashboardindex from 'pages/dashboard/index';
import goodslist from 'pages/goods/list';
import goodstags from 'pages/goods/tags';
import orderlist from 'pages/order/list';

import NotFoundView from 'pages/404';

const routes = [
  {path: '/login', component: Login},
  //{ path: '/main', component: Main },
  {
    path: '/dashboard',
    component: dashboardindex,
    name: '首页',
    // children: [
    //   {path: '/index', component: dashboardindex},
    // ]
  },
  {
    path: '/shop',
    component: goodslist,
    name: '店铺管理',
    children: [
      {path: '/dashboard', component: goodslist, name: '商品列表'},
      {path: '/feature', component: goodstags, name: '商品分类'},
      {path: '/category', component: goodstags, name: '商品分类'},
      {path: '/usercenter', component: goodstags, name: '会员主页'},
      {path: '/shopnav', component: goodstags, name: '店铺导航'},
      {path: '/ad', component: goodstags, name: '公告广告'},
    ]
  },
  {
    path: '/goods',
    component: goodslist,
    name: '商品管理',
    children: [
      {path: '/list', component: goodslist, name: '商品列表'},
      {path: '/tags', component: goodstags, name: '商品分类'},
      {path: '/goodstemplate', component: goodstags, name: '商品页模板'},
      {path: '/importgoods', component: goodstags, name: '商品导入'}
    ]
  },
  {
    path: '/order',
    component: orderlist,
    name: '订单',
    children: [
      {path: '/list', component: goodslist, name: '订单列表'}
    ]
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
];

export default routes;

