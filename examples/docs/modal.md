<script>
    export default {
        data() {
            return {
                show: false
            };
        },
        methods: {
            click1: function() {
                this.show = true;
            }
        }
    }
</script>

# Modal 对话框
## 常用
:::demo 使用`type`属性来定义 Button 的颜色, 用`disabled`属性 设置禁用。
```html
<div>
    <Button type="primary" @click="show = true">点击弹窗</Button>
    <Modal :isShow="show"></Modal>
</div>
<br>
<div>
    
</div>
```
:::