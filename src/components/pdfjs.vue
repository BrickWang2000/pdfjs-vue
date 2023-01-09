<template >
  <div id="app1" style="background-color: green">
    <iframe :src="'/pdfjs-3.2.146-dist/web/viewer.html?file='
            + encodeURIComponent('http://127.0.0.1:8080/pdfjs-3.2.146-dist/web/compressed.tracemonkey-pldi-09.pdf')"
    width="100%" height="100%"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PdfJs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
