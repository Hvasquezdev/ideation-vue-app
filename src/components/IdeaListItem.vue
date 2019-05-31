<template functional>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'idea-list-item',
}
</script>

<style lang="scss" scoped>
  li {
    font-family: 'Montserrat', sans-serif !important;
    color: rgba(64, 64, 64, .33);
    font-size: 20px;
    position: relative;
    word-break: break-all;

    &:before {
      content: '';
      position: absolute;
      width: 11px;
      height: 11px;
      background-color: rgba(255, 255, 255, 0.51);
      border-radius: 50%;
      border: 1px solid #FF7C7C;
      left: -20px;
      top: 10px;
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
</style>
