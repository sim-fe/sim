<script>
    export default {
        methods: {
            test () {
                
            }
        }
    }
</script>

# input 输入框
## 常用
:::demo 使用`type`属性来定义 输入框类型, 用`disabled`属性 设置禁用。
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
    <Input placeholder="请输入" disabled></Input>
</div>
```
:::


### API说明
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |