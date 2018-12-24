<script>
    export default {
        methods: {
            test () {
                
            }
        }
    }
</script>

# Button 按钮
## 常用颜色
:::demo 使用`type`属性来定义 Button 的颜色。
```html
<div>
    <Button>默认按钮</Button>
    <Button type="primary">蓝色按钮</Button>
    <Button type="success">绿色按钮</Button>
    <Button type="warning">橙色按钮</Button>
    <Button type="danger">红色按钮</Button>
</div>
```
:::

## 图标
:::demo 使用`icon`属性来定义 Button 的图标。
```html
<div>
    <Button icon="sim-icon-bianji">编辑</Button>
    <Button icon="sim-icon-sousuo" type="primary">搜索</Button>
    <Button icon="sim-icon-shanchu" type="danger">删除</Button>
    <Button icon="sim-icon-set">设置</Button>
</div>
```
:::

## 大小
:::demo 使用`size`属性来定义 Button 的大小。
```html
<div>
    <Button size="mini">迷你</Button>
    <Button size="small">小点</Button>
    <Button size="">正常</Button>
    <Button size="big">大点</Button>
</div>
```
:::