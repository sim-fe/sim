<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            onChange (value) {
                console.log(value)
            }
        },
        mounted() {

        }
    }
</script>

# Select 选择器

## 常用

:::demo 使用`value`设置选中值 使用`disabled` 属性禁用选择器, 或者禁用某个选项

```html
<div>
    <Select value="1" style="width: 200px;">
        <Option value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>

    <Select value="" placeholder="请选择城市" style="width: 200px; margin-left: 20px;">
        <Option disabled value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>

    <Select disabled value="2" style="width: 200px; margin-left: 20px;">
        <Option value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>
</div>
<script>
export default {
  data() {
        return {

        }
    }
}
</script>
```

:::

## 可清空选择

:::demo

```html
<div>
    <Select value="1" clearable style="width: 200px;" @on-change="onChange">
        <Option value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>
</div>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onChange (value) {
            console.log(value)
        }
    }
}
</script>
```

:::


## 多选

:::demo

```html
<div>
    <Select multiple style="width: 200px;" @on-change="onChange">
        <Option value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>
</div>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onChange (value) {
            console.log(value)
        }
    }
}
</script>
```

:::




## API 说明

### props

| 参数        | 说明                   | 类型            | 可选值 | 默认值 |
| ----------- | ---------------------- | --------------- | ------ | ------ |
| value       | 绑定的值               | String / Number | -      | -      |
| placeholder | 选择框占位文本         | String          | -      | -      |
| disabled    | 禁用             | Boolean         | -      | false  |

### slots

| 名称        | 说明                   |
| ----------- | ---------------------- |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

### events

| 事件名称        | 说明                   | 返回参数  |
| ----------- | ---------------------- | ------------------ |
| on-change | 值改变时触发 | event |
