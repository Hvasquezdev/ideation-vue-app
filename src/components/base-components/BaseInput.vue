<template>
  <div class="control base-input__container" :class="controlClass">
    <label class="base-input__label" v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners" class="base-input__field" :class="className" />
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js';

export default {
  mixins: [formFieldMixin],
  name: 'base-input',
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    }, 
  }
}
</script>

<style lang="scss" scoped>
.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.base-input {

  &__container {
    padding: 15px;
  }

  &__field {
    border: none;
    border-bottom: 3px solid #404040;
    font-size: 25px;
    color: #404040;
    padding: 0 0 10px 0;
    width: 100%;
    font-family: 'Montserrat', sans-serif !important; 
    
    &:active,
    &:focus,
    &:hover {
      outline: none;
    }
  }

  &__label {
    position: absolute;
    left: 15px;
    bottom: -15px;
    color: #404040;
    opacity: .42;
    font-size: 14px;
    height: 18px;
    font-family: 'Montserrat', sans-serif !important;
  }
}
</style>
