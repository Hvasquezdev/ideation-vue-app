<template functional>
  <div class="mdc-base-chip__item">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'base-chip',
}
</script>

<style lang="scss">
.mdc-base-chip__item {
  position: relative;
  font-family: 'Montserrat', sans-serif !important;
  display: inline-flex;
  padding: 3px 14px;
  font-size: 12px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  background: #fff;
}
</style>
