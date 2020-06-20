# Button 按钮

## 单个按钮

**浏览**

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

**代码演示**

```html
<div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">图标按钮</g-button>
    <g-button icon="settings" iconPosition="right">图标按钮</g-button>
    <g-button :loading="true">加载中按钮</g-button>
    <g-button disabled>不可选按钮</g-button>
  </div>
```

## 按钮组合

多个按钮组合

**浏览**

<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

**代码演示**

```html
<div>
     <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
  </div>
```