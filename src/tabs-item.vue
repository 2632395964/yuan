<template>
  <div class="tabs-item" @click="onclick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
  inject:['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props:{
    disabled: {
      type:Boolean,
      default:false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
         active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected',(name)=>{
      this.active =name ===this.name;
    })
  },
  methods: {
    onclick() {
      this.eventBus.$emit('update:selected',this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
   .tabs-item{
      flex-shrink: 0;
      padding: 0 2em;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover{
         color: #448ef7;
      }
      &.active{
         font-weight: bold;
         color: #448ef7;
      }
   }
</style>