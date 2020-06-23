# Tabs 标签页

选项切换组件

## 默认选中第一项

可自行设置默认选中项, 

**浏览**

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

**代码演示**

```html
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
```

```js
data(){
  return{
    selectedTab: '1',
  }
}
```