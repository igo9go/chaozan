<template>
  <div id="app">
    <!--Main sidebar-->
    <sidebar></sidebar>
    <!--Main sidebar-->

    <!--Maini container-->
    <div id="container">
      <router-view></router-view>
    </div>
    <!--Maini container-->

    <div id="help-container">
      <help-container></help-container>
    </div>

    <div id="footer">
      <a href="//igo9go.cn/" class="logo" target="_blank"></a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import sidebar from 'components/sidebar'
  import helpContainer from 'components/help'

  export default{
    components: {
      "sidebar": sidebar,
      "help-container": helpContainer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
