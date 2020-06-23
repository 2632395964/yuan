# Collapse 折叠面板

可以折叠/展开的区域，可以设置单个内容区域展开。

## 设置默认开启内容

**浏览**

设置默认展开第一个，可在 `selectedItem` 数组中设置默认展开多个。

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

**代码演示**

```html
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
```

```js
data(){
    return{
      selectedItem: ['1'],
    }
  }
```

## 设置single

手风琴，每次只打开一个

**浏览**

<ClientOnly>
<collapse-single-demo></collapse-single-demo>
</ClientOnly>

**代码演示**

```html
<g-collapse :selected.sync="selectedItem" single>
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
```

```js
data(){
    return{
      selectedItem: ['1'],
    }
  }
```