<template>
  <div class="dashboard-index">
    <div id="app-container-top">
      <div class="dashboard-top-alert zent-alert zent-alert-size-large zent-alert-style-danger">
        <div class="zent-alert-content-wrapper">
          <div class="zent-alert-content">
            <table>
              <tbody>
              <tr>
                <td>
                  <p class="warning-text">您的有赞微商城服务已到期，将影响交易提现，建议尽快订购有赞微商城。</p>
                </td>
                <td rowspan="2" style="min-width: 300px;">
                  <a class="zent-btn zent-btn-large zent-btn-danger-outline zent-btn-border-transparent"
                     href="//koudaitong.com/v2/member#chooseService">
                    立即订购 </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="hotline">
                    <a href="//youzan.com/dashboard/index/laoshangjia" class="why-youzan-left danger" target="_blank">为什么选择有赞</a>
                    官方咨询电话：
                    0571-85225188
                  </p>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="app">
      <div class="app-inner clearfix">
        <div class="app-init-container">
          <input type="hidden" name="bad_code_team" value="0">
          <div id="js-page-content" class="page-content">

            <div id="js-page-content-inner">
              <div class="flex-container shop-basic-info-container">
                <div class="dashboard-center">
                  <div class="shop-basic-info">
                    <h2 class="shop-name">
                      <span>杭城电摩俱乐部</span>
                      <i class="shop-badge active">
                        个人
                        <div class="shop-badge-tip">
                          <div class="ui-popover top-left">
                            <div class="ui-popover-inner">
                              店铺已通过个人认证
                            </div>
                            <div class="arrow"></div>
                          </div>
                        </div>
                      </i>

                      <i class="shop-badge">
                        微商城
                        <div class="shop-badge-tip">
                          <div class="ui-popover top-left">
                            <div class="ui-popover-inner">
                              有赞微商城服务已到期，影响交易提现，建议尽快订购。 <a href="//koudaitong.com/v2/member#chooseService"
                                                           class="zent-btn zent-btn-danger zent-btn-small">立即订购</a>
                              <div class="hotline">
                                官方咨询电话：<span class="telephone">0571-85225188</span>
                                <a href="//youzan.com/dashboard/index/laoshangjia" class="why-youzan" target="_blank">为什么选择有赞</a>
                              </div>
                            </div>
                            <div class="arrow"></div>
                          </div>
                        </div>
                      </i>
                      <i class="shop-badge">
                        VIP
                        <div class="shop-badge-tip">
                          <div class="ui-popover top-left">
                            <div class="ui-popover-inner">
                              立即开通有赞VIP会员，享受会员特权
                              <a href="https://vip.youzan.com" target="_blank"
                                 class="zent-btn zent-btn-danger-outline zent-btn-small">查看权益</a>
                              <a href="https://koudaitong.com/v2/member#pay&amp;app_id=874&amp;id=33&amp;gift_ids=28"
                                 class="zent-btn zent-btn-danger zent-btn-small">立即开通</a>
                            </div>
                            <div class="arrow"></div>
                          </div>
                        </div>
                      </i>
                    </h2>
                  </div>
                </div>
                <div class="dashboard-right">
                  <div class="contact-waiter">
                    <a href="http://bbs.youzan.com/forum.php?gid=57" target="_blank" class="">
                      <i class="ico-contact-waiter"></i><span>联系客服</span>
                    </a>
                    <!-- <a href="//fuwu.youzan.com/" target="_blank" class="js-show-glod-provider">
                        <i class="ico-contact-partner"></i><span>联系到店服务</span>
                    </a> -->
                  </div>
                </div>
              </div>

              <div class="flex-container">
                <div class="dashboard-center">
                  <div class="js-new-task new-task" style="display: block;">
                    <div class="widget-box widget-box-task">
                      <div class="widget-box-header">
                        <h3 class="widget-box-title">
                          新手任务
                          <div class="widget-box-opts">
                            <a target="_blank" href="//koudaitong.com/v2/task/team">更多任务</a>
                          </div>
                        </h3>
                      </div>
                      <div class="widget-box-content">

                        <div class="task-info">
                          <h4 class="task-title">完善店铺信息</h4>
                          <p class="task-detail">需要您补充一些相关信息，以便我们提供更有针对性的店铺诊断和运营服务。填写商家信息登记表并提交即可完成任务。</p>
                          <p class="reward">奖励： <em>+5</em> 有赞币</p>
                          <div class="task-opts">


                            <!-- 完善信息问卷在本页打开 -->
                            <a href="http://koudaitong.com/v2/apps/newuservote" class="zent-btn">完善信息</a>


                            <button class="zent-btn zent-btn-primary zent-btn-disabled" disabled="">领取奖励</button>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div id="js-overview" class="widget-box-overview js-overview-overview">
                    <ul>
                      <li>
                        <h5>
                          <a
                            href="//koudaitong.com/v2/trade/order#list&amp;type=all&amp;state=tosend&amp;time_type=pay_time">
                            <span class="data-highlight" data-bind="wait_ship_order">2</span>
                          </a>
                        </h5>
                        <h6 class="info-description">待发货订单</h6>
                      </li>
                      <li>
                        <h5>
                          <a
                            href="//koudaitong.com/v2/trade/order#list&amp;type=feedback&amp;state=all&amp;time_type=feedback_time">
                            <span class="" data-bind="safeguard_order">0</span>
                          </a>
                        </h5>
                        <h6 class="info-description">维权订单</h6>
                      </li>
                      <li>
                        <h5 class="js-weixin-unread"><a
                          href="//koudaitong.com/v2/weixin/message/realtime#my&amp;type=unread">0</a></h5>
                        <h6>未读消息</h6>
                      </li>
                      <li>
                        <h5>
                          <a
                            href="//koudaitong.com/v2/trade/order#list&amp;type=all&amp;keyword[start_time]=2016-12-08 00:00:00&amp;keyword[end_time]=2016-12-08 23:59:59">
                            <span data-bind="order_count">0</span>
                          </a>
                        </h5>
                        <h6>昨日订单</h6>
                      </li>

                      <li>
                        <h5>
                          <a href="//koudaitong.com/v2/statcenter/order">
                            <span data-bind="pay_amount" data-unit="￥"><i class="unit">￥</i>0.00</span>
                          </a>
                        </h5>
                        <h6>昨日交易额</h6>
                      </li>

                      <li>
                        <h5>
                          <a href="//koudaitong.com/v2/trade/newsettlement#income">
                            <span data-bind="total_can_withdraw" data-unit="￥"><i class="unit">￥</i>0.00</span>
                          </a>
                        </h5>
                        <h6>可提现余额</h6>
                      </li>

                    </ul>
                  </div>
                  <div class="ui-box widget-box usefull-links">
                    <div class="widget-box-header">
                      <h3 class="widget-box-title">
                        常用功能
                      </h3>
                    </div>
                    <div class="widget-box-content">
                      <ul style="margin-bottom: 2px;">
                        <li>
                          <a href="//koudaitong.com/v2/weixin/dashboard">
                            <i class="ico-usefull-link ico-usefull-link4"></i>
                            <span>微信</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/showcase/goods/create">
                            <i class="ico-usefull-link ico-usefull-link1"></i>
                            <span>发布商品</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/showcase/feature#list">
                            <i class="ico-usefull-link ico-usefull-link2"></i>
                            <span>页面管理</span>
                          </a>
                        </li>
                        <li>
                          <a href="http://b.im.koudaitong.com/" target="_blank">
                            <i class="ico-usefull-link ico-usefull-link3"></i>
                            <span>客服系统</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/ump/tradeincard">
                            <i class="ico-usefull-link ico-usefull-link5"></i>
                            <span>优惠券</span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="//koudaitong.com/v2/apps/cashier">
                            <i class="ico-usefull-link ico-usefull-link7"></i>
                            <span>微商城收款</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/apps/directseller">
                            <i class="ico-usefull-link ico-usefull-link6"></i>
                            <span>销售员</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/trade/newsettlement#income">
                            <i class="ico-usefull-link ico-usefull-link8"></i>
                            <span>收入/提现</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/statcenter/order">
                            <i class="ico-usefull-link ico-usefull-link9"></i>
                            <span>交易分析</span>
                          </a>
                        </li>
                        <li>
                          <a href="//koudaitong.com/v2/service" target="_blank">
                            <i class="ico-usefull-link ico-usefull-link10"></i>
                            <span>帮助中心</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget-box recommended-apps">
                    <div class="widget-box-header">
                      <h3 class="widget-box-title">
                        营销应用
                        <div class="widget-box-opts">
                          <a href="//koudaitong.com/v2/ump/dashboard">营销中心</a>
                        </div>
                      </h3>
                    </div>
                    <div class="widget-box-content">
                      <div class="tofu-container">
                        <a class="tofu tofu-green" href="//koudaitong.com/v2/ump/groupon">
                          <h4>多人拼团</h4>
                          <p>裂变式营销玩法</p>
                        </a>
                        <a class="tofu tofu-cyan" href="//koudaitong.com/v2/ump/pointsstore" target="_blank">
                          <h4>积分商城</h4>
                          <p>用积分提升粉丝黏性</p>
                        </a>
                        <a class="tofu tofu-blue" href="//koudaitong.com/v2/apps/directseller">
                          <h4>销售员</h4>
                          <p>让客户帮忙推广店铺赚佣金</p>
                        </a>
                        <a class="tofu tofu-purple" href="//koudaitong.com/v2/appmarket/appdesc?id=1092">
                          <h4>营销主题模版</h4>
                          <p>帮助商家快速吸引消费者</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="dashboard-row">
                    <div class="dashboard-col">
                      <div class="ui-box widget-box cms-suggest">
                        <div class="widget-box-header">
                          <h4 class="widget-box-title">
                            经营建议
                            <div class="widget-box-opts">
                              <a href="http://bbs.youzan.com/forum.php?mod=forumdisplay&amp;fid=56"
                                 target="_blank">更多</a>
                            </div>
                          </h4>
                        </div>
                        <div class="widget-box-content">
                          <ul>
                            <li>
                              <a
                                href="https://open.koudaitong.com/oauth/authorize?client_id=dcfd0f9914ef4d6e06&amp;response_type=code&amp;state=teststate&amp;redirect_uri=http%3a%2f%2fwww.jinritemai.com%2fmedia%2fregister%2findex%3frefer_code%3da8215f61a07e3dcfa464aff2ee988de8%26sig%3d1479107853420.2495"
                                target="_blank">
                                <h4 title="入驻今日头条">
                                  入驻今日头条 </h4>
                                <p>有赞商家绿色入驻通道</p>
                              </a>
                            </li>
                            <li>
                              <a href="https://koudaitong.com/v2/ump/softbanana" target="_blank">
                                <h4 title="快速打单">
                                  快速打单 </h4>
                                <p>打印快递单、发货单</p>
                              </a>
                            </li>


                          </ul>
                          <ul>


                            <li>
                              <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=484119" target="_blank">
                                <h4 title="多门店系统">
                                  多门店系统 </h4>
                                <p>门店O2O整体解决方案</p>
                              </a>
                            </li>
                            <li>
                              <a href="https://wap.koudaitong.com/v2/showcase/feature?alias=5g1wq3d1" target="_blank">
                                <h4 title="硬件插件">
                                  硬件插件 </h4>
                                <p>通过第三方硬件/插件让玩法更多</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="dashboard-col">
                      <div class="ui-box widget-box widget-gray-box cms-learn">
                        <div class="widget-box-header">
                          <h4 class="widget-box-title">
                            学习交流
                            <div class="widget-box-opts">
                              <a href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=443751&amp;extra=page%3D1"
                                 target="_blank">更多渠道</a>
                            </div>
                          </h4>
                        </div>
                        <div class="widget-box-content">
                          <ul>
                            <li>
                              <a href="http://bbs.youzan.com/forum.php" target="_blank">
                                <i style="background-position: -40px 0;"></i>
                                <h4>在线论坛</h4>
                                <p>百万商家互通互助</p>
                              </a>
                            </li>
                            <li>
                              <a href="//sm.youzan.com" target="_blank">
                                <i style="background-position: -40px -40px;"></i>
                                <h4>本地商盟</h4>
                                <p>加入本地商家联盟</p>
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="http://xuetang.youzan.com/" target="_blank">
                                <i style="background-position: -40px -80px;"></i>
                                <h4>在线课堂</h4>
                                <p>资深专家视频授课</p>
                              </a>
                            </li>
                            <li>
                              <a href="//fuwu.youzan.com/" target="_blank">
                                <i style="background-position: -40px -120px;"></i>
                                <h4>服务市场</h4>
                                <p>有赞拍档帮你经营</p>
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=405975" target="_blank">
                                <i style="background-position: -40px -160px;"></i>
                                <h4>线下培训</h4>
                                <p>专业讲师当面教学</p>
                              </a>
                            </li>
                            <li>
                              <a href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=406316" target="_blank">
                                <i style="background-position: -40px -200px;"></i>
                                <h4>官方定制</h4>
                                <p>定制开发专享功能</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-box widget-box more-service" style="margin-bottom: 0;">
                    <div class="widget-box-header">
                      <h4 class="widget-box-title">
                        更多服务
                      </h4>
                    </div>
                    <div class="widget-box-content">
                      <ul class="more-service-list">
                        <li>
                          <a href="//fx.youzan.com/" target="_blank">
                            <i class="ico-more-service ico-more-fx"></i>
                            <p>供货商</p>
                          </a>
                        </li>
                        <li>
                          <a href="//fx.youzan.com/intro/enterprise" target="_blank">
                            <i class="ico-more-service ico-more-enterprise"></i>
                            <p>全员开店</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://h5.koudaitong.com/v2/index/wxdpc" target="_blank">
                            <i class="ico-more-service ico-more-wxd"></i>
                            <p>微小店</p>
                          </a>
                        </li>
                        <li>
                          <a href="//go.youzan.com/" target="_blank">
                            <i class="ico-more-service ico-more-go"></i>
                            <p>买家版</p>
                          </a>
                        </li>
                        <li>
                          <a href="//open.youzan.com/" target="_blank">
                            <i class="ico-more-service ico-more-open"></i>
                            <p>开放平台</p>
                          </a>
                        </li>
                        <li>
                          <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=5g1wq3d1" target="_blank">
                            <i class="ico-more-service ico-more-peripheral"></i>
                            <p>有赞周边</p>
                          </a>
                        </li>
                        <li>
                          <a href="//open.youzan.com/sdk/home" target="_blank">
                            <i class="ico-more-service ico-more-app"></i>
                            <p>APP开店</p>
                          </a>
                        </li>
                        <li>
                          <a href="//media.youzan.com/" target="_blank">
                            <i class="ico-more-service ico-more-media"></i>
                            <p>媒体服务</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="dashboard-right">

                  <div class="dashboard-popover-item" style="margin-bottom: 2px;">
                    <a href="javascript:;">
                      <i class="service-avatar"
                         style="background-image: url(https://img.yzcdn.cn/public_files/2016/12/02/075b206426e9ea2387bd31e8da65666c.jpg?imageView2/2/w/90/h/90/q/75/format/webp)"></i>
                      <h4>维西</h4>
                      <p>服务经理</p>
                    </a>
                    <div class="ui-popover left-center dashboard-service-info-popover">
                      <div class="ui-popover-inner clearfix">
                        <div class="pull-left service-info">
                          <h4>维西</h4>
                          <p>微信：</p>
                          <p>youzanweixi1 </p>
                        </div>
                        <div class="pull-right">
                          <img class="qc-code"
                               src="https://img.yzcdn.cn/public_files/2016/01/15/834bfcf970e4366c1345f3f773d0477a.jpg?imageView2/2/w/200/h/0/q/75/format/webp">
                        </div>
                      </div>
                      <div class="arrow"></div>
                    </div>
                  </div>

                  <div class="dashboard-popover-item" style="margin-bottom: 2px;">
                    <a href="javascript:;" class="">
                      <i class="ico-mobile-app"></i>
                      <h4>微商城手机客户端</h4>
                      <p>用手机随时随地管理店铺</p>
                    </a>
                    <div class="ui-popover left-center dashboard-app-download-popover">
                      <div class="ui-popover-inner clearfix">
                        <div class="pull-left app-download-info">
                          <h5>扫码下载</h5>
                          <h5>微商城手机客户端</h5>
                        </div>
                        <div class="pull-right">
                          <img class="qc-code"
                               src="https://img.yzcdn.cn/public_files/2016/12/05/7f31d72ebf49d412657cb77527d597c6.png?imageView2/2/w/200/h/0/q/75/format/webp">
                        </div>
                      </div>
                      <div class="arrow"></div>
                    </div>
                  </div>

                  <div class="dashboard-popover-item">
                    <a href="javascript:;" class="">
                      <i class="ico-im-app"></i>
                      <h4>桌面在线客服</h4>
                      <p>即时应答客户在线咨询</p>
                    </a>
                    <div class="ui-popover left-center dashboard-im-download-popover">
                      <div class="ui-popover-inner">
                        <div class="clearfix">
                          <div class="pull-left im-app-item">
                            <a href="http://dl.koudaitong.com/kdt_mac.zip" target="_blank">
                              <i class="im-app-icon"
                                 style="background-image: url(https://img.yzcdn.cn/public_files/2016/12/05/27d8252079bbb6696318c0dd6454a825.png)"></i>
                              <div>Mac 版本</div>
                            </a>
                          </div>
                          <div class="pull-right im-app-item">
                            <a href="http://dl.koudaitong.com/kdt_windows.zip" target="_blank">
                              <i class="im-app-icon"
                                 style="background-image: url(https://img.yzcdn.cn/public_files/2016/12/05/0f371f9127596d146b356ebe31a4c9a7.png)"></i>
                              <div>Windows 版本</div>
                            </a>
                          </div>
                        </div>
                        <div class="dashboard-im-download-popover-footer clearfix">
                          <a href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=410434&amp;page=1&amp;extra="
                             target="_blank">新手必读：客服系统使用指南</a>
                          <a href="http://b.im.koudaitong.com/" target="_blank">进入网页版 <span>&gt;</span></a>
                        </div>
                      </div>
                      <div class="arrow"></div>
                    </div>
                  </div>

                  <div class="ui-box widget-box widget-cms-list">
                    <div class="widget-box-header">
                      <h4 class="widget-box-title">有赞神厨</h4>
                    </div>
                    <div class="widget-box-content">
                      <ul>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=590284&amp;extra=page%3D1"
                             target="_blank">
                            [下载]86张PPT告诉你四周年都说了啥？ </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=584898&amp;extra=page%3D1"
                             target="_blank">
                            [久盼]会员储值功能发布，让大家久等了 </a>
                        </li>
                        <li class="">
                          <a href="http://xuetang.youzan.com/cv-884877.html" target="_blank">
                            [学堂]经营有赞必备的六脉神剑 </a>
                        </li>
                        <li class="">
                          <a href="http://xuetang.youzan.com/cv-076345.html" target="_blank">
                            [学堂]幸福西饼月销从0到1500W的秘诀 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=295784" target="_blank">
                            [费率]10月1日起有赞微商城不加收手续费 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="ui-box widget-box widget-cms-list">
                    <div class="widget-box-header">
                      <h4 class="widget-box-title">近期活动</h4>
                    </div>
                    <div class="widget-box-content">
                      <ul>
                        <li class="red">
                          <a href="http://kdt.im/JLd-yr" target="_blank">
                            12/14 深圳 微电商沙龙深圳站 </a>
                        </li>
                        <li class="">
                          <a href="https://kdt.im/Ux6xcr" target="_blank">
                            12/22 广州 移动电商运营实操班 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=585262&amp;extra=page%3D1"
                             target="_blank">
                            11/27 九张图记录有赞四周年 </a>
                        </li>
                        <li class="">
                          <a
                            href="http://mp.weixin.qq.com/s?__biz=MjM5NDQ5MjUyMA==&amp;mid=2651340765&amp;idx=1&amp;sn=bf6c7cfa2a2533abf0bdd0cf10401703&amp;chksm=bd7a66da8a0defccd5c81a50c949438ea4848ea0ffb8d4678eb35dce3da536ff91c0f799579c#rd"
                            target="_blank">
                            11/19 石家庄 微电商沙龙现场实录 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=560108&amp;extra=page%3D1"
                             target="_blank">
                            10/18 成都 微电商沙龙现场实录 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="ui-box widget-box widget-cms-list">
                    <div class="widget-box-header">
                      <h4 class="widget-box-title">
                        有赞数读
                        <div class="widget-box-opts">
                          <a target="_blank"
                             href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=441356&amp;extra=">更多</a>
                        </div>
                      </h4>

                    </div>
                    <div class="widget-box-content">
                      <section class="youzan-reading">
                        <h1>20000+</h1>
                        <p>全国知名品牌“鲜丰水果”500多家门店开展多人拼团。利用有赞多门店系统设置商品仅支持到店自提，增加门店客流，并通过附加消费优惠，引导到店再消费，当日拼团订单量达2万多单。</p>
                        <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=587160" target="_blank">
                          参观店铺
                        </a>
                      </section>
                    </div>
                  </div>
                  <div class="ui-box widget-box widget-cms-list">
                    <div class="widget-box-header">
                      <h4 class="widget-box-title">
                        产品动态
                        <div class="widget-box-opts">
                          <a target="_blank"
                             href="http://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=3410&amp;extra=page&amp;3D1">更多</a>
                        </div>
                      </h4>
                    </div>
                    <div class="widget-box-content">
                      <ul>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=590206" target="_blank">
                            12/6 营销中心新增“水果机”小游戏 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=591984&amp;extra=page%3D1"
                             target="_blank">
                            12/2 商品分析数据支持导出表格 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=590038&amp;extra=page%3D1"
                             target="_blank">
                            12/1 多门店支持批量设库存 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=591216&amp;extra=page%3D1"
                             target="_blank">
                            11/30 有赞币调整，服务期结束30天后清零 </a>
                        </li>
                        <li class="">
                          <a href="https://bbs.youzan.com/forum.php?mod=viewthread&amp;tid=590528&amp;extra=page%3D1"
                             target="_blank">
                            11/29 新版客户系统一键升级，不再等待 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="notify-bar js-notify animated hinge hide">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dashboard-index
    margin-left: 90px;
    margin-bottom: 0;
    background: #f2f2f2;
    width: auto;
    padding-bottom: 50px;
    transition: margin-right 0.5s;
    #app-container-top
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
      .dashboard-top-alert
        min-height: 63px !important;
        box-sizing: border-box;
        width: 100%;
        font-size: 12px;
        height: 1px;
        padding: 0 15px 0 30px;
        background: #FF4343;
        border: 1px solid #E8393A;
        color: #fff;
        vertical-align: baseline;
    .app
      width: 100%;
      float: left;
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
      .app-inner
        padding: 20px;
        min-width: 750px;
        min-height: 500px;
        box-shadow: none;
        .flex-container
          display: flex;
        .shop-basic-info-container
          padding-top: 5px;
          margin-bottom: 17px;
          .dashboard-center
            padding-right: 25px;
            transition: all 0.2s linear;
            padding-right: 60px;
            flex: 1;
            box-flex: 1;
            .shop-basic-info
              position: relative;
              .shop-basic-info .shop-name
                display: inline-block;
                font-size: 20px;
                line-height: 1em;
                color: #333333;
                .shop-badge
                  position: relative;
                  padding: 0 5px;
                  border-radius: 1px;
                  font-size: 10px;
                  color: #FFFFFF;
                  background-color: #bbb;
                  &.active
                    background: #F8F8F8;
                  .shop-badge-tip
                    display: none;
                    position: absolute;
                    left: 50%;
                    width: 600px;
                    height: 10px;
                    -webkit-transform: translateX(-59px);
                    -moz-transform: translateX(-59px);
                    -ms-transform: translateX(-59px);
                    transform: translateX(-59px);
                    z-index: 10;
                    .ui-popover
                      position: absolute;
                      z-index: 1010;
                      border-radius: 2px;
                      -webkit-box-shadow: 0px 1px 6px rgba(0,0,0,0.2);
                      box-shadow: 0px 1px 6px rgba(0,0,0,0.2);
                      .ui-popover-inner
                        position: relative;
                        background: #fff;
                        border-radius: 2px;
                        padding: 10px 20px;
                        z-index: 2;
                      .arrow
                        left 55px
                    .ui-popover.top-left, .ui-popover.top-center, .ui-popover.top-right
                      margin-top: 10px;





</style>
