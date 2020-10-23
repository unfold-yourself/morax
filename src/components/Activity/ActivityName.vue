<template>
  <div class="activityName">
    <div class="name">
      <div class="title">
        {{ title }}
      </div>
      <div class="subtitle">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityName',
  props: {
    title: String,
    subtitle: String,
  },
}
</script>

<style lang="scss" scoped>
.activityName {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    background-image: url('~@/assets/images/domain.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    flex-shrink: 0;
  }
}

.title {
  @include Heading--h2;
  padding-right: 60px;
}

.subtitle {
  @include Text--small;
  letter-spacing: 0.2px;
  font-family: $font-family-secondary;
}
</style>