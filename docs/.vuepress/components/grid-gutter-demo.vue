<template>
<div>
  <g-row gutter="20" >
    <g-col span="8"style="margin: 0 10px;padding: 0">8</g-col>
    <g-col span="8"style="margin: 0 10px;padding: 0">8</g-col>
    <g-col span="8"style="margin: 0 10px;padding: 0">8</g-col>
  </g-row>
  <g-row gutter="10">
    <g-col span="6"style="margin: 0 5px;padding: 0">6</g-col>
    <g-col span="6"style="margin: 0 5px;padding: 0">6</g-col>
    <g-col span="6"style="margin: 0 5px;padding: 0">6</g-col>
    <g-col span="6"style="margin: 0 5px;padding: 0">6</g-col>
  </g-row>
</div>
</template>



<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'g-row': Row,
    'g-col': Col,

  },
  
}
</script>
/<style lang="scss" scoped>

</style>