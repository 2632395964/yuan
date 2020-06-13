<template>
  <div class="clo" :class="[`clo-${span}`]" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type:[Number,String]
    } 
  }
}
</script>
<style lang="scss" scoped>
  .clo{
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    $class-prefix: clo-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
  }

</style>