<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">图标按钮</g-button>
    <g-button icon="settings" iconPosition="right">图标按钮</g-button>
    <g-button :loading="true">加载中按钮</g-button>
    <g-button disabled>不可选按钮</g-button>
    
  </div>
</template>
<script>
import Button from '../../../src/button'
export default {
  components:{
    'g-button': Button
  }
}
</script>