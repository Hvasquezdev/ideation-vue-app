<template>
  <label class="label--radio">
    <input type="radio" class="radio" >
  </label>
</template>

<script>
export default {
  name: 'base-radio-button',
}
</script>

<style lang="scss">
.radio {
  position: relative;
  margin: 0 1rem 0 0 ;
  
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
