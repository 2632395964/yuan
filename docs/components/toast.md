# Toast 吐司

类似吐司机一样弹出消息/通知

## 默认三个位置

**浏览**

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

**代码演示**

```html
<div>
    <g-button @click="showToast">Click me</g-button>
    <g-button @click="showToast1">top</g-button>
    <g-button @click="showToast2">middle</g-button>
    <g-button @click="showToast3">bottom</g-button>

  </div>
```
```js
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
```