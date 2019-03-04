<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            basic() {
                this.$Message.info({content: '这是一条普通的提示', duration: 2});
            },
            info() {
                this.$Message.info({content: '这是一条普通的提示', duration: 2});
            },
            success() {
                this.$Message.success({content: '这是一条普通的提示', duration: 2});
            },
            warn() {
                this.$Message.warn({content: '这是一条普通的提示', duration: 2});
            },
            error() {
                this.$Message.error({content: '这是一条普通的提示', duration: 2});
            },
        }
    }
</script>

# Message 消息提示框

## 常用

:::demo 最基本的提示，默认在1.5秒后消失。

```html
<div>
    <Button @click="basic">basic</Button>
</div>
```

:::

## 各种类型

:::demo 最基本的提示，默认在1.5秒后消失。

```html
<div>
    <Button @click="info">info</Button>
    <Button @click="success">success</Button>
    <Button @click="warn">warn</Button>
    <Button @click="error">error</Button>
</div>
```

:::
