# Grid 栅格

Grid 网格，最多可分为24网格，可以设置gutter。

## 默认栅格

**浏览**

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

**代码演示**

``` html
<div>
     <g-row>
        <g-col span="8">8</g-col>
        <g-col span="8">8</g-col>
        <g-col span="8">8</g-col>
      </g-row>
      <g-row>
        <g-col span="6">6</g-col>
        <g-col span="6">6</g-col>
        <g-col span="6">6</g-col>
        <g-col span="6">6</g-col>
      </g-row>
      <g-row>
        <g-col span="4">4</g-col>
        <g-col span="4">4</g-col>
        <g-col span="4">4</g-col>
        <g-col span="4">4</g-col>
        <g-col span="4">4</g-col>
        <g-col span="4">4</g-col>
      </g-row>
      <g-row>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
        <g-col span="2">2</g-col>
      </g-row>
  </div>
```

## 设置gutter

**浏览**

<ClientOnly>
<grid-gutter-demo></grid-gutter-demo>
</ClientOnly>

**代码演示**

```html

<div>
  <g-row gutter="20">
    <g-col span="8">8</g-col>
    <g-col span="8">8</g-col>
    <g-col span="8">8</g-col>
  </g-row>
  <g-row gutter="10">
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
  </g-row>
</div>
```

## 设置offset

**浏览**

<ClientOnly>
<grid-offset-demo></grid-offset-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <g-row>
    
    <g-col span="8">8</g-col>
    <g-col span="6" offset="2">4</g-col>
    <g-col span="8">8</g-col>
  </g-row>
  <g-row>
    
    <g-col span="6">6</g-col>
    <g-col span="3" offset="3">3</g-col>
    <g-col span="6">6</g-col>
    <g-col span="6">6</g-col>
  </g-row>
</div>
```
## 设置响应式

适配不同尺寸屏幕


**浏览**

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

**代码演示**

```html
<div>
  <g-row>
    <g-col span="12"
    :phone="{span:12}"
    :ipad="{span:8}"
    :narrow-pc="{span:4}"
    :wide-pc="{span:1}"
    >1</g-col>
    <g-col span="12"
    :phone="{span:12}"
    :ipad="{span:16}"
    :narrow-pc="{span:20}"
    :wide-pc="{span:23}"
    >2</g-col>
  </g-row>
</div>
```