module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/layout.scss";@import "@/styles/modules.scss";`
      }
    }
  }
}