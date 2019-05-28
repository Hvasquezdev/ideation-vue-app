<template>
  <button ref="button" v-on="$listeners" class="button mdc-button--raised mdc-button" v-bind="$attrs">
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';

export default {
  inheritAttrs: false,
  mounted() {
    this.ripple = new MDCRipple(this.$refs.button);
  },
  destroyed() {
    this.ripple.destroy();
  }
}
</script>

<style lang="scss" scoped>
@import "@material/button/mdc-button";

.button {
  font-family: 'Libre Baskerville', serif;
  font-size: 17px;
  text-transform: capitalize;
  height: 61px;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 35px;
}

.is-success {
  @include mdc-button-container-fill-color(#23d160);
}

.is-white {
  @include mdc-button-container-fill-color(#fff);
  @include mdc-button-ink-color(#353535);
}

.is-dark {
 @include mdc-button-container-fill-color(#404040);
}

    // padding: 20px 37px;
    // height: 61px;
    // border-radius: 35px;
</style>
