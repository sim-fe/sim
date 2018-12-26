<script>
    export default {
        methods: {
            test () {
                
            }
        }
    }
</script>

# Button 按钮
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

## 图标
:::demo 使用`icon`属性来定义 Button 的图标。
```html
<div>
    <Button icon="sim-icon-bianji">编辑</Button>
    <Button icon="sim-icon-sousuo" type="primary">搜索</Button>
    <Button icon="sim-icon-shanchu" type="danger">删除</Button>
    <Button icon="sim-icon-loading" type="primary">加载中</Button>
    <Button icon="sim-icon-loading1" type="success">加载中</Button>
    <Button icon="sim-icon-loading1" disabled type="primary">加载中</Button>
</div>
<br>
<div>
    <Button icon="sim-icon-arrowleft"></Button>
    <Button icon="sim-icon-arrowright"></Button>
    <Button icon="sim-icon-set" type="warning"></Button>
    <Button icon="sim-icon-error" type="danger"></Button>
</div>
```
:::

## 大小
:::demo 使用`size`属性来定义 Button 的大小。
```html
<div>
    <Button size="mini">迷你</Button>
    <Button size="small" type="primary">小点</Button>
    <Button size="" type="success">正常</Button>
    <Button size="big" type="danger">大点</Button>
</div>
```
:::