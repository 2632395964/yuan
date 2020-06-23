<template>
  <div>
    <g-button @click="showToast">Click me</g-button>
    <g-button @click="showToast1">top</g-button>
    <g-button @click="showToast2">middle</g-button>
    <g-button @click="showToast3">bottom</g-button>

  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import tabsItemVue from '../../../src/tabs-item.vue'
Vue.use(plugin)
export default {
  components: {
    'g-toast': Toast,
    'g-button': Button
  },
  methods:{
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`这里是弹出信息`, {
        // position: 'bottom',
        position,
        enableHtml: false,
        closeButton: {
          text: '关闭',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: false,
        autoCloseDelay: 3
      })
    }
  }
}
</script>