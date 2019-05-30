<template>
  <div class="chips-container">
    <base-chip>finished</base-chip>
    <div class="chip-separator"></div>
    <base-chip>1 mn</base-chip>
    <div class="chip-separator"></div>
    <base-chip>2 mn</base-chip>
    <div class="chip-separator"></div>
    <base-chip>3 mn</base-chip>
    <div class="chip-separator"></div>
    <base-chip>4 mn</base-chip>
  </div>
</template>

<script>
import BaseChip from "@/components/base-components/BaseChip.vue";

export default {
  name: "idea-chips-time-container",
  components: {
    BaseChip
  }
};
</script>

<style lang="scss">
.chips-container {
  position: absolute;
  left: 28px;
  padding-left: 20px;
  border-left: 2px solid #fff;
  top: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  bottom: 15px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  z-index: 10;

  .chip-separator {
    width: 10px;
    height: 1px;
    background: #fff;
    margin-left: -20px;
  }

  .mdc-base-chip__item {
    &:before {
      content: "";
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: #fff;
      left: -22px;
      top: 11px;
    }

    &:first-child {
      margin-top: -11px;
    }

    &:last-child {
      margin-bottom: -11px;
    }
  }
}
</style>
