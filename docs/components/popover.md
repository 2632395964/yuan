# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## Click触发

**浏览**

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <g-popover position="top">
      <template slot="content">
        <div>Content of popover</div>
      </template>
      <g-button>点击</g-button>
    </g-popover>
  <g-popover position="top">
      <template slot="content">
        <div>Content of popover</div>
      </template>
      <g-button>上边</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>Content of popover</div>
      </template>
      <g-button>下边</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>Content of popover</div>
      </template>
      <g-button>左边</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>
          Content of popover
        </div>
      </template>
      <g-button>右边</g-button>
    </g-popover>
  </div>
```


## Hover触发

**浏览**

<ClientOnly>
<popover-hover-demo></popover-hover-demo>
</ClientOnly>

**代码演示**

```html
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
```