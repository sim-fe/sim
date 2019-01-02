<!-- prettier-ignore -->
<script>
    export default {
        data() {
            return {
                showFirst: false,
                showSecond: false,
                showThird: false,
                showFourth: false,
                size: ''
            };
        },
        methods: {
        }
    }
</script>

# Modal 对话框

## 常用

:::demo 一个常用的 Modal。

```html
<div>
    <Button type="primary" @click="showFirst = true">点击弹窗</Button>
    <Modal :show.sync="showFirst">
        <span slot="title">标题</span>
        <div slot="content"><img src="../assets/images/paragraph.png" /></div>
        <div slot="footer">
            <Button @click="showFirst=false">关闭</Button>
            <Button @click="showFirst=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```

:::

## 改变窗口大小

:::demo 使用`size`属性来定义 Modal 的大小。

```html
<div>
    <Button type="primary" @click="showSecond=true;size='mini';">mini</Button>
    <Button type="warning" @click="showSecond=true;size='small';">small</Button>
    <Button type="primary" @click="showSecond=true;size='normal';">normal</Button>
    <Button type="warning" @click="showSecond=true;size='big';">big</Button>
    <Button type="primary" @click="showSecond=true;size='full';">full</Button>
    <Modal :show.sync="showSecond" :size="size">
        <span slot="title">标题</span>
        <div slot="content">
            <img src="../assets/images/paragraph.png" style="max-width:100%" />
        </div>
        <div slot="footer">
            <Button @click="showSecond=false">关闭</Button>
            <Button @click="showSecond=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```

:::

## 居中样式

:::demo 使用`center`属性来决定 Modal 头部和底部的内容是否居中。

```html
<div>
    <Button type="primary" @click="showThird=true;">点我弹窗</Button>
    <Modal :show.sync="showThird" :center="true">
        <span slot="title">标题</span>
        <div slot="content">
            <img src="../assets/images/paragraph.png" style="max-width:100%" />
        </div>
        <div slot="footer">
            <Button @click="showThird=false">关闭</Button>
            <Button @click="showThird=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```

:::

## 隐藏遮罩层

:::demo 使用`show-dimmer`属性来决定是否显示 Modal 的遮罩层。

```html
<div>
    <Button type="primary" @click="showFourth=true;">点我弹窗</Button>
    <Modal :show.sync="showFourth" :show-dimmer="false">
        <span slot="title">标题</span>
        <div slot="content">
            <img src="../assets/images/paragraph.png" style="max-width:100%" />
        </div>
        <div slot="footer">
            <Button @click="showFourth=false">关闭</Button>
            <Button @click="showFourth=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```

:::

# props

| 参数        | 说明                             | 类型    | 可选值                      | 默认值 |
| ----------- | -------------------------------- | ------- | --------------------------- | ------ |
| show        | 是否显示 Modal, 支持.sync 修饰符 | Boolean | true/false                  | false  |
| class-name  | 对话框样式                       | String  | -                           | -      |
| size        | 对话框大小                       | String  | small/normal/big/large/long | normal |
| title       | 标题。优先级小于 slot。          | String  | -                           | -      |
| show-dimmer | 是否显示遮罩层                   | Boolean | true/false                  | true   |
| show-close  | 是否显示关闭按钮                 | Boolean | true/false                  | true   |
| center      | 是否对头部和底部采用居中布局     | Boolean | true/false                  | false  |

# slot

| 名称    | 说明     |
| ------- | -------- |
| title   | 头部内容 |
| content | 主体内容 |
| footer  | 底部内容 |

# envents

| 名称       | 说明                        |
| ---------- | --------------------------- |
| on-show    | 当 modal 打开时触发         |
| on-visible | 当 modal 打开动画结束后触发 |
| on-hide    | 当 modal 关闭时触发         |
| on-hidden  | 当 modal 关闭动画结束后触发 |
