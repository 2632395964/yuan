<template>
  <div>
    <g-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>点击</g-button>
      </g-popover>
    <g-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>上边</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>下边</g-button>
      </g-popover>
      <g-popover position="left">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>左边</g-button>
      </g-popover>
      <g-popover position="right">
        <template slot="content">
          <div>
            Content of popover
          </div>
        </template>
        <g-button>右边</g-button>
      </g-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button';
export default {
  components:{
    'g-popover': Popover,
    'g-button': Button,
  },
  
}
</script>