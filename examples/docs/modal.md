<script>
    export default {
        data() {
            return {
                showUsual: false,
                showSmall: false,
                showMiddle: false,
                showBig: false,
                showLog: false
            };
        },
        methods: {
        }
    }
</script>

# Modal 对话框
## 常用
:::demo 使用`type`属性来定义 Button 的颜色, 用`disabled`属性 设置禁用。
```html
<div>
    <Button type="primary" @click="showUsual = true">点击弹窗</Button>
    <Modal :show.sync="showUsual">
        <span slot="title">标题</span>
        <div slot="content">
            <img src="../assets/images/paragraph.png">
        </div>
        <div slot="footer">
             <Button @click="showUsual=false">关闭</Button>
             <Button @click="showUsual=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```
:::

## 改变窗口大小
:::demo 使用`type`属性来定义 Button 的颜色, 用`disabled`属性 设置禁用。
```html
<div>
    <Button type="primary" @click="show = true">small</Button>
    <Modal :show.sync="show">
        <span slot="title">标题</span>
        <div slot="content">
            <img src="../assets/images/paragraph.png">
        </div>
        <div slot="footer">
             <Button @click="show=false">关闭</Button>
             <Button @click="show=false" type="success">确定</Button>
        </div>
    </Modal>
</div>
```
:::

# props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show|是否显示 Modal, 支持.sync修饰符|Boolean|true/false|false|
|class-name|对话框样式|String|-|-|
|size|对话框大小|String|small/normal/big/large/long|normal|
|title|标题。优先级小于slot。|String|-|-|
|show-dimmer|是否显示遮罩层|Boolean|true/false|true|
|show-close|是否显示关闭按钮|Boolean|true/false|true|
|center|是否对头部和底部采用居中布局|Boolean|true/false|false|

# slot

|名称|说明
|---|---|
|title|头部内容|
|content|主体内容|
|footer|底部内容|

# envents

|名称|说明|
|---|---|
|on-show|当modal打开时触发|
|on-visible|当modal打开动画结束后触发|
|on-hide|当modal关闭时触发|
|on-hidden|当modal关闭动画结束后触发|
