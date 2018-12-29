<script>
    export default {
        methods: {
            
        }
    }
</script>

# input 输入框

## 常用

:::demo 使用`type`属性来定义 输入框类型, 用`readonly`,`disabled`属性 设置只读，禁用。

```html
<div style="width: 200px">
    <Input placeholder="请输入内容"></Input>
</div>
<br>
<div style="width: 200px">
    <Input type="password" placeholder="请输入密码"></Input>
</div>
<br>
<div style="width: 200px">
    <Input placeholder="只读" readonly></Input>
</div>
<br>
<div style="width: 200px">
    <Input placeholder="禁用" disabled />
</div>
```

:::

## 带 Icon 的输入框

:::demo 可以通过 before-icon 和 after-icon 属性在 input 组件首部和尾部增加显示图标

```html
<div>
    <Input before-icon="sim-icon-rili" placeholder="请输入内容"></Input>
    <Input after-icon="sim-icon-sousuo" placeholder="请输入内容"></Input>
</div>
```

:::

## 前置/后置 复合型输入框

:::demo 通过前置和后置的 slot 可以实现复合型的输入框

```html
<div>
    <Input placeholder="请输入内容">
        <template slot="prepend">Http://</template>
    </Input>
</div>
<br>
<div>
    <Input placeholder="请输入内容">
        <Button slot="append" icon="sim-icon-sousuo"></Button>
    </Input>
</div>
<br>
<div>
    <Input placeholder="请输入内容">
        <Button slot="prepend" icon="sim-icon-icon_on_the_bottom" icon-position="right">请选择</Button>
        <Button slot="append" icon="sim-icon-sousuo"></Button>
    </Input>
</div>
```

:::

### API 说明

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |

