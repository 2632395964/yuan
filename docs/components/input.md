# Input 输入框

## 常用示例

**浏览**

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

**代码演示**

```html
<div>
    <g-input value="正常"></g-input>
    <g-input value="只读" readonly></g-input>
    <g-input value="不可输入" disabled></g-input>
    <g-input value="错误" error="错误信息"></g-input>
  </div>
```

## 支持 `v-model` 进行数据双向绑定

<br>

**浏览**

<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

**代码演示**

```html
  <div>
    <g-input v-model="message"></g-input>
    <p style="margin-top: 5px;">message: {{message}} </p>
  </div>
```
```js
data(){
  return {
    message: 'hello world',
  }
},
```