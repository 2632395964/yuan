<template>
  <div>
    <g-input v-model="message"></g-input>
    <p style="margin-top: 5px;">{{message}} </p>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components:{
    'g-input': Input,
  },
  data(){
    return {
      message: 'Hello World',
    }
  },
}
</script>