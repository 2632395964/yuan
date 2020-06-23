<template>
  <div>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="1">
          Tab 1
        </g-tabs-item>
        <g-tabs-item name="2">
          Tab 2
        </g-tabs-item>
        <g-tabs-item name="3">
          Tab 3
        </g-tabs-item>
        <template slot:actions>
          <button>按钮</button>
        </template>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">
          Content of Tab Pane 1
        </g-tabs-pane>
        <g-tabs-pane name="2">
          Content of Tab Pane 2
        </g-tabs-pane>
        <g-tabs-pane name="3">
          Content of Tab Pane 3
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
export default {
  components:{
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-body': TabsBody,
    'g-tabs-pane': TabsPane,
  },
  data(){
    return{
      selectedTab: '1',
    }
  }
}
</script>