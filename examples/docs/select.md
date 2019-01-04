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

:::demo 使用`type`属性来定义 输入框类型, 用`readonly`,`disabled`属性 设置只读，禁用。

```html
<div style="width: 200px">
    <Select placeholder="请输入内容" :maxlength="maxLen1"></Select>
</div>
<br>
<div style="width: 200px">
    <Select placeholder="请输入内容" :maxlength="maxLen1"></Select>
</div>
<script>
export default {
  data() {
        return {
            maxLen1: 10,
            value1: '只能看不能写'
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