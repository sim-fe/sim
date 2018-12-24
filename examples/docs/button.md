<script>
    export default {
        methods: {
            test () {
                alert('test')
            }
        }
    }
</script>

# Button 按钮
## 常用按钮
:::demo 使用`type`属性来定义 Button 的样式。
```html
<div>
    <Button>默认按钮</Button>
    <Button type="primary">蓝色按钮</Button>
    <Button type="success">绿色按钮</Button>
    <Button type="warning">橙色按钮</Button>
    <Button type="danger">红色按钮</Button>
</div>
```