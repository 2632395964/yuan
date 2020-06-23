<template>
  <div>
    <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>鼠标悬停</g-button>
      </g-popover>
    <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>上边</g-button>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>下边</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <g-button>左边</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
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