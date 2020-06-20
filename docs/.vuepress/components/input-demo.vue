<template>
  <div>
    <g-input value="正常"></g-input>
    <g-input value="只读" readonly></g-input>
    <g-input value="不可输入" disabled></g-input>
    <g-input value="错误" error="错误信息"></g-input>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{
    'g-input': Input
  }
}
</script>