<template>
  <div id="second-sidebar">
    <div>
      <div class="title">
        {{currentPathNameParent}}
      </div>
      <nav>
        <ul>
          <li v-show="secondRoute" v-for="item in secondRoute"  :class="{active: 1 === index}">
            <router-link :to="{ name: item.name}">{{item.name}}</router-link>-
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      secondRoute: {
        type: Array,
        default() {
          return [];
        }
      },
      currentPathNameParent : {
        type: String,
        default() {
          return '';
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #second-sidebar
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 90px;
    width: 110px;
    box-sizing: border-box;
    background: #fff;
    .title
      padding-left: 20px;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;
    nav
      padding: 13px 10px;
      width: 90px;
      li
        font-size: 14px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 14px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 2px;
        a
          color: #666;
          display: block;
          padding: 0 10px;
        &.active
          background: #f8f8f8;


</style>
