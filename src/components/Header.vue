<template>
  <header class="Header">
    <div class="container">
      <div class="content">
        <div class="branding">
          Website.com
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.Header {
  text-align: center;
  background-color: $base-bg-color;
}

.content {
  padding: 12px 0;
  display: flex;
  align-items: center;
}

.branding {
  font-size: 24px;
  color: #fff;
}
</style>