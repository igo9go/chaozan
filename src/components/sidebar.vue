<template>
  <div id="sidebar">
    <div id="first-sidebar">
      <div>
        <a class="team-logo-wrap" href="//koudaitong.com/v2/setting/store#index">
          <div class="team-logo" style="background-image: url(https://img.yzcdn.cn/upload_files/2016/05/28/cda0a33e9c2a59a75872397fece8edaf.png?imageView2/2/w/60/h/60/q/75/format/webp)">
          </div>
        </a>

        <nav>
          <ul class="clearfix">
            <li class="active">
              <a href="//koudaitong.com/v2/dashboard/index">
                <i class="sidebar-icon sidebar-icon-dashboard"></i>
                概况
              </a>
            </li>
            <li>
              <a href="//koudaitong.com/v2/showcase/dashboard">
                <i class="sidebar-icon sidebar-icon-shop"></i>
                店铺
              </a>
            </li>
            <li class="js-guide-goods ">
              <a href="//koudaitong.com/v2/showcase/goods#list">
                <i class="sidebar-icon sidebar-icon-goods"></i>
                商品
              </a>
            </li>
            <li class="js-guide-trade ">
              <a href="//koudaitong.com/v2/trade/dashboard">
                <i class="sidebar-icon sidebar-icon-order"></i>
                订单
              </a>
            </li>
            <li class="js-guide-fans ">
              <a href="//koudaitong.com/v2/fans/dashboard">
                <i class="sidebar-icon sidebar-icon-fans"></i>
                客户
              </a>
            </li>
            <li>
              <a href="//koudaitong.com/v2/statcenter/dashboard">
                <i class="sidebar-icon sidebar-icon-stat"></i>
                数据
              </a>
            </li>
            <li>
              <a href="//koudaitong.com/v2/trade/newsettlement">
                <i class="sidebar-icon sidebar-icon-asset"></i>
                资产
              </a>
            </li>

            <li style="margin-top: 44px;">
              <a href="//koudaitong.com/v2/ump/dashboard">
                <i class="sidebar-icon sidebar-icon-app"></i>
                营销
              </a>
            </li>
            <li class="js-guide-setting ">
              <a href="//koudaitong.com/v2/setting/store">
                <i class="sidebar-icon sidebar-icon-setting"></i>
                设置
              </a>
            </li>
            <li style="margin-top: 44px;">
              <a href="//youzan.com/" target="_blank">
                <i class="sidebar-icon sidebar-icon-youzan"></i>
                有赞
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="user-info">
      <span class="user-name">周强_zq</span>
      <span class="user-arrow"></span>
      <div class="user-dropdown">
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

    <second-sidebar></second-sidebar>
  </div>
</template>

<script type="text/ecmascript-6">
  import secondSidebar from 'components/secondsidebar'

  export default{
    components: {
      "second-sidebar": secondSidebar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #sidebar
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 200px;
    -webkit-box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.2);
    z-index: 99;
    #first-sidebar
      position: fixed;
      top: 0px;
      bottom: 0;
      left: 0;
      width: 90px;
      box-sizing: border-box;
      background: #444;
</style>
