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
                this.$Message.info();
            }
        }
    }
</script>

# Message 消息提示框

## 常用

:::demo 一个常用的 Message。

```html
<div>
    <Button type="primary" @click="onClick">点击</Button>
</div>
```

:::
