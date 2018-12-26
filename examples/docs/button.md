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
:::demo 使用`icon`属性来定义 Button 的图标, 使用`icon-position`属性来设置图标相对于文字的位置。
```html
<div>
    <Button icon="sim-icon-bianji">编辑</Button>
    <Button icon="sim-icon-shanchu" type="danger">删除</Button>
    <Button icon="sim-icon-loading" type="primary">加载中</Button>
    <Button icon="sim-icon-loading1" disabled type="primary">加载中</Button>
    <Button icon="sim-icon-sousuo" icon-position="right" type="primary">搜索</Button>
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

## 大小,宽度自适应
:::demo 使用`size`属性来定义 Button 的大小， 使用`width-auto`属性来定义 Button 的宽度自适应。
```html
<div>
    <Button size="mini">迷你</Button>
    <Button size="small" type="primary">小点</Button>
    <Button size="" type="success">正常</Button>
    <Button size="big" type="danger">大点</Button>
</div>
<br>
<div>
    <Button width-auto type="primary">正常</Button>
</div>
<br>
<div>
    <Button icon="sim-icon-loading1" type="primary" size="big" width-auto disabled>加载</Button>
</div>
```
:::

## 按钮组
:::demo
```html
<div>
    <button-group>
        <Button type="primary" icon="sim-icon-arrowleft">上一页</Button>
        <Button type="primary" icon="sim-icon-arrowright" icon-position="right">下一页</Button>
    </button-group>
</div>
<br>
<div>
    <button-group>
        <Button icon="sim-icon-arrowleft"></Button>
        <Button icon="sim-icon-arrowright"></Button>
        <Button icon="sim-icon-set"></Button>
        <Button icon="sim-icon-error"></Button>
    </button-group>
</div>
```
:::

### API说明
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   mini / small / big            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger  |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| icon-position  | 图标位置 | string   |  left/right  |  left |
| width-auto  | 是否宽度自适应    | boolean   | —   | false   |