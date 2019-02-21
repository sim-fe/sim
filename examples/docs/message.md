<script>
    export default {
        data() {
            return {
                showFirst: false,
                showSecond: false,
                showThird: false,
                showFourth: false,
                size: ''
            };
        },
        methods: {
            onClick() {
                console.log('dfdffd')
                this.$Message.info();
            }
        }
    }
</script>

# Modal 对话框

## 常用

:::demo 一个常用的 Modal。

```html
<div>
    <Button type="primary" @click="onClick">点击弹窗</Button>
</div>
```

:::
