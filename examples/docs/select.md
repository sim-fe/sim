<script>
    export default {
        data() {
            return {
                maxLen1: 10,
                value1: '只能看不能写'
            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

# Select 选择器

## 常用

:::demo

```html
<div>
    <Select value="1" style="width: 200px;">
        <Option value="1">福州</Option>
        <Option value="2">厦门</Option>
        <Option value="3">泉州</Option>
        <Option value="4">宁德</Option>
    </Select>

    <Select value="" style="width: 200px; margin-left: 20px;">
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



## API 说明

### props

| 参数        | 说明                   | 类型            | 可选值 | 默认值 |
| ----------- | ---------------------- | --------------- | ------ | ------ |
| type        | 输入框类型，原生属性   | String          | -      | text   |
| name        | 输入框类型，原生属性   | String          | -      | -      |
| value       | 绑定的值               | String / Number | -      | -      |
| maxlength   | 原生属性，最大输入长度 | Number          | -      | -      |
| minlength   | 原生属性，最小输入长度 | Number          | -      | -      |
| placeholder | 输入框占位文本         | String          | -      | -      |
| disabled    | 输入框禁用             | Boolean         | -      | false  |
| readonly    | 输入框只读             | Boolean         | -      | false  |
| before-icon | 输入框前面带 icon      | String          | -      | -      |
| after-icon  | 输入框后面带 icon      | String          | -      | -      |

### slots

| 名称        | 说明                   |
| ----------- | ---------------------- |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

### events

| 事件名称        | 说明                   | 返回参数  |
| ----------- | ---------------------- | ------------------ |
| focus | 获得焦点时触发 | event |
| blur | 失去焦点时触发 | event |
| change | 在 Input 值改变时触发 | event |
