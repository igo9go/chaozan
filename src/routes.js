import Login from 'components/login';

import dashboardindex from 'components/pages/dashboard/index';


import goodslist from 'components/pages/goods/list';

import goodstags from 'components/pages/goods/tags';

import NotFoundView from 'components/pages/404';

const routes = [
  {path: '/login', component: Login},
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: dashboardindex,
    name: '首页',
    children: [
      {path: '/index', component: dashboardindex},
    ]
  },
  {
    path: '/goods',
    component: goodslist,
    name: '商品页',
    children: [
      {path: '/list', component: goodslist, name: '商品列表'},
      {path: '/tags', component: goodstags, name: '商品分类'}
    ]
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
];

export default routes;

