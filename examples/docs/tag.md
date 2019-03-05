<script>
    export default {
        methods: {
            close () {
                alert('你点我！！！')
            }
        }
    }
</script>

# Tag 标签
## 常用
:::demo 使用`type`属性来定义 Tag 的颜色
```html
<div>
    <Tag>默认标签</Tag>
    <Tag style="margin-left: 10px" type="primary">蓝色标签</Tag>
    <Tag style="margin-left: 10px" type="success">绿色标签</Tag>
    <Tag style="margin-left: 10px" type="warning">橙色标签</Tag>
    <Tag style="margin-left: 10px" type="danger">红色标签</Tag>
</div>
```
:::

## 尺寸
:::demo 使用`size`属性来定义 Tag 的大小
```html
<div>
    <Tag size="mini">mini标签</Tag>
    <Tag size="small" style="margin-left: 10px" type="primary">small标签</Tag>
    <Tag style="margin-left: 10px" type="success">正常大小标签</Tag>
    <Tag size="big" style="margin-left: 10px" type="warning">大标签</Tag>
</div>
```
:::

## 可移除标签
:::demo 使用`closable`属性来定义 Tag 的大小
```html
<div>
    <Tag size="mini" closable @on-close="close">mini标签</Tag>
    <Tag size="small" style="margin-left: 10px" type="primary" closable @on-close="close">small标签</Tag>
    <Tag style="margin-left: 10px" type="success" closable @on-close="close">正常大小标签</Tag>
    <Tag size="big" style="margin-left: 10px" type="warning" closable @on-close="close">大标签</Tag>
</div>
<script>
    export default {
        methods: {
            close () {
                alert('你点我！！！')
            }
        }
    }
</script>
```
:::


### API说明

### props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   mini / small / big            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger  |     —    |

### events

| 事件名称        | 说明                   | 返回参数  |
| ----------- | ---------------------- | ------------------ |
| click | 原生事件点击标签触发 | event |
| on-close | 点击关闭触发 | event |
