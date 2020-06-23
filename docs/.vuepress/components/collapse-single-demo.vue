<template>
  <div>
    <g-collapse :selected.sync="selectedItem" single>
        <g-collapse-item title="This is panel header 1" name="1">
          <div>Orange is a kind of fruit</div>
        </g-collapse-item>
        <g-collapse-item title="This is panel header 2" name="2">
          <div>Orange is a kind of fruit</div>
        </g-collapse-item>
        <g-collapse-item title="This is panel header 3" name="3">
          <div>Orange is a kind of fruit</div>
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
