<template>
  <div>
    <g-collapse :selected.sync="selectedItem">
        <g-collapse-item title="标题1" name="1">
          <div>内容1</div>
        </g-collapse-item>
        <g-collapse-item title="标题2" name="2">
          <div>内容2</div>
        </g-collapse-item>
        <g-collapse-item title="标题3" name="3">
          <div>内容3</div>
        </g-collapse-item>
      </g-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem,
  },
  data(){
    return{
      selectedItem: ['1'],
    }
  }
  
}
</script>
