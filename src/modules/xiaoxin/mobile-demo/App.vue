<template>
  <div id="app">
    <html-header></html-header>
    <html-content></html-content>
    <html-footer></html-footer>
  </div>
</template>

<script>
  import HtmlHeader from 'components/mobile/header'
  import HtmlContent from 'components/mobile/content'
  import HtmlFooter from 'components/mobile/footer'
  export default {
    components: {
      HtmlHeader,
      HtmlContent,
      HtmlFooter
    }
  }
</script>

<style>

</style>
