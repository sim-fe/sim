<script>
    export default {
        methods: {
            test () {
                
            }
        }
    }
</script>

# Upload 上传控件
## 常用
:::demo 使用`type`属性来定义 Button 的颜色, 用`disabled`属性 设置禁用。
```html
<div>
    <Button>默认按钮</Button>
    <Button type="primary">蓝色按钮</Button>
    <Button type="success">绿色按钮</Button>
    <Button type="warning">橙色按钮</Button>
    <Button type="danger">红色按钮</Button>
</div>
<br>
<div>
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>蓝色按钮</Button>
    <Button type="success" disabled>绿色按钮</Button>
    <Button type="warning" disabled>橙色按钮</Button>
    <Button type="danger" disabled>红色按钮</Button>
</div>
```
:::

### API说明
| 参数          | 说明           | 类型    | 可选值                               | 默认值 |
| ------------- | -------------- | ------- | ------------------------------------ | ------ |
| size          | 尺寸           | string  | mini / small / big                   | —     |
| type          | 类型           | string  | primary / success / warning / danger | —     |
| disabled      | 是否禁用状态   | boolean | —                                   | false  |
| icon          | 图标类名       | string  | —                                   | —     |
| icon-position | 图标位置       | string  | left/right                           | left   |
| width-auto    | 是否宽度自适应 | boolean | —                                   | false  |