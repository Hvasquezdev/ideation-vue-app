<template>
  <label class="label--radio">
    <input type="radio" class="radio" :value="label" :name="name" v-model="radioButtonValue" >
  </label>
</template>

<script>
export default {
  name: 'base-radio-button',
  props: ['name', 'label', 'value'],
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label)
      }
    }
  }
}
</script>

<style lang="scss">
.label--radio {
  width: 20px;
  height: 20px;
}
.radio {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  
  cursor: pointer;
  
  &:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 1px;
    background: #FF7C7C;
    top: -2px;
    border-radius: 50%;
    z-index: 1;
    transition: transform .4s cubic-bezier(.45,1.8,.5,.75);
    transform: scale(0,0);
    
  }
  
  &:checked {
    &:before {
     transform: scale(1,1); 
    }
  }
  
  &:after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border: 1px solid #484848;
    left: -2px;
    top: -5px;
    background: #fff;
    border-radius: 50%;
  }
}
</style>
