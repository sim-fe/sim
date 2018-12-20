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
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```html
<div>
    <Button @click="test">点我试一试</Button>
    <Button size="small">test</Button>
</div>
<script>
    export default {
        methods: {
            test () {
                alert('test')
            }
        }
    }
</script>
```