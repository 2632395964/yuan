<template>
<div>
  <g-row>
    <g-col span="12"
    :phone="{span:12}"
    :ipad="{span:8}"
    :narrow-pc="{span:4}"
    :wide-pc="{span:1}"
    >1</g-col>
    <g-col span="12"
    :phone="{span:12}"
    :ipad="{span:16}"
    :narrow-pc="{span:20}"
    :wide-pc="{span:23}"
    >2</g-col>
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