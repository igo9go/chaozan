<template>
  <div id="sidebar" v-bind:style="{width: sideBarWidth}">
    <div id="first-sidebar">
      <div class="wrapper">
        <a class="team-logo-wrap" href="//koudaitong.com/v2/setting/store#index">
          <div class="team-logo"
               style="background-image: url(https://img.yzcdn.cn/upload_files/2016/05/28/cda0a33e9c2a59a75872397fece8edaf.png?imageView2/2/w/60/h/60/q/75/format/webp)">
          </div>
        </a>
        <nav>
          <ul class="clearfix">
            <li>
              <router-link to="/dashboard">
                <i class="sidebar-icon sidebar-icon-dashboard" style="background-position:0 0"></i>
                概况
              </router-link>
            </li>
            <li>
              <router-link to="/shop">
                <i class="sidebar-icon sidebar-icon-shop" style="background-position: 0px -18px;"></i>
                店铺
              </router-link>
            </li >
            <li class="js-guide-goods ">
              <router-link to="/goods">
                <i class="sidebar-icon sidebar-icon-goods" style="background-position: 0px -36px;"></i>
                商品
              </router-link>
            </li>
            <li class="js-guide-trade ">
              <router-link to="/order">
                <i class="sidebar-icon sidebar-icon-order" style="background-position: 0px -54px;"></i>
                订单
              </router-link>
            </li>
            <li class="js-guide-fans ">
              <router-link to="/fans">
                <i class="sidebar-icon sidebar-icon-fans" style="background-position: 0px -72px;"></i>
                客户
              </router-link>
            </li>
            <li>
              <router-link to="/data">
                <i class="sidebar-icon sidebar-icon-stat" style="background-position: 0px -90px;"></i>
                数据
              </router-link>
            </li>
            <li>
              <router-link to="/finance">
                <i class="sidebar-icon sidebar-icon-asset" style="background-position: 0px -108px;"></i>
                资产
              </router-link>
            </li>

            <li style="margin-top: 44px;">
              <router-link to="/ump">
                <i class="sidebar-icon sidebar-icon-app" style="background-position: 0px -126px;"></i>
                营销
              </router-link>
            </li>
            <li class="js-guide-setting ">
              <router-link to="/settig">
                <i class="sidebar-icon sidebar-icon-setting" style="background-position: 0px -144px;"></i>
                设置
              </router-link>
            </li>
            <li style="margin-top: 44px;">
              <a href="">
                <i class="sidebar-icon sidebar-icon-youzan" style="background-position: 0px -162px;"></i>
                超赞
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="user-info" @click="showInfo">
      <span class="user-name">周强_zq</span>
      <span class="user-arrow"></span>
      <div class="user-dropdown" v-show="showInfoFlag">
        <div class="user-dropdown-meta">
          <div>周强_zq</div>
          <div>15869172921</div>
        </div>
        <div class="user-dropdown-select">
          <a class="new-select" href="//koudaitong.com/v2/account/personal/invitecode">个人邀请奖励</a>
          <a href="//koudaitong.com/v2/account/personal">帐号设置</a>
          <a href="//koudaitong.com/v2/account/team#select">切换店铺</a>
          <a href="//koudaitong.com/v2/account/user/logout">退出</a>
        </div>
      </div>
    </div>

    <second-sidebar v-show="showSecondRoute" :secondRoute="secondRoute"
                    :currentPathNameParent="currentPathNameParent"></second-sidebar>
  </div>
</template>

<script type="text/ecmascript-6">
  import secondSidebar from 'components/secondsidebar';
  import routes from '../routes';

  export default{
    data () {
      return {
        showInfoFlag: false,
      };
    },
    computed: {
      currentPathNameParent() {
        return this.$route.matched[0].name;
      },
      secondRoute() {
        let currentPath = this.$route.path
        let secondRoute = [];
        routes.map(function (item) {
          if (currentPath === item.path) {
            secondRoute = item.children
          }
        })
        return secondRoute
      },
      showSecondRoute() {
        return this.secondRoute ? true : false
      },
      sideBarWidth() {
        let width = '200px'
        if (!this.showSecondRoute) {
          width = '90px'
        }
        return width
      }
    },
    components: {
      "second-sidebar": secondSidebar
    },

    watch: {
      '$route' (to, from) {//监听路由改变
        this.currentPathName = to.name;
        this.currentPathNameParent = to.matched[0].name;
      },
    },
    created() {

//      let currentPath = this.$route.path
//      routes.map(function (item) {
//        if (currentPath === item.path) {
//          console.log(item.children);
//        }
//      })
    },
    methods: {
      fetchData () {
        console.log($route);
      },
      showInfo() {
        this.showInfoFlag = !this.showInfoFlag;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #sidebar
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    z-index: 99;
    #first-sidebar
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 90px;
      box-sizing: border-box;
      background: #444;
      .wrapper
        width: 90px
        a
          color: #38f;
          cursor: pointer;
          text-decoration: none;
        .team-logo-wrap
          display: block;
          width: 90px;
          height: 63px;
          overflow: hidden;
          .team-logo
            margin: 15px auto 0;
            width: 32px;
            height: 32px;
            border-radius: 16px;
            background-size: cover;
            background-position: 50% 50%;
            background-color: #fff;
            background-image: "https://img.yzcdn.cn/upload_files/2016/05/28/cda0a33e9c2a59a75872397fece8edaf.png?imageView2/2/w/60/h/60/q/75/format/webp"

        nav
          padding: 0 0 60px 0;
          width: 90px;
          li
            font-size: 14px;
            height: 36px;
            line-height: 36px;
            margin-bottom: 14px;
            cursor: pointer;
            & > a
              cursor: pointer
              color: #CACACA;
              display: block;
              padding-left: 18px;
              .sidebar-icon
                position: relative;
                top: -1px;
                display: inline-block;
                width: 18px;
                height: 18px;
                vertical-align: middle;
                background: url("https://b.yzcdn.cn/v2/image/www/sidebar/sidebar-icon-20160530.png") no-repeat;
              &.active
                background: #F8F8F8;
    #user-info
      position: fixed;
      bottom: 0px;
      color: #e5e5e5;
      height: 30px;
      padding: 10px 0;
      word-break: break-word;
      background: #535353;
      z-index: 100;
      border: 0;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
      .user-name
        width: 66px;
        display: block;
        line-height: 30px;
        padding: 0 12px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      .user-dropdown
        content: ' ';
        width: 0;
        height: 0;
        position: absolute;
        left: 28px;
        border: 6px solid #fff;
        border-color: #fff transparent transparent transparent;

</style>
