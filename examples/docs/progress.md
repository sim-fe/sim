<script>
    export default {
        data() {
            return {percents: '0'}
        },
        mounted() {
            this.percents = '1';
            },
        watch: {
            percents(val) {
                setTimeout(() => {
                    let _num = parseInt(val) + 1
                    this.percents = '' + _num
                }, 100);
            }
        },
        methods: {
            test () {
                
            }
        }
    }
</script>

# Progress 进度条
## 常用
:::demo 使用`type`属性来定义 Progress 的颜色, 用`size`属性设置大小，用`percents`属性设置百分比进度。
```html
<div style="width: 500px">
    <p>Size: default (可省略)</p>
    <div>
        <Progress :percents="percents"></Progress>
        <Progress type="primary" percents="100"></Progress>
        <Progress type="success" percents="28"></Progress>
        <Progress type="warning" percents="90"></Progress>
        <Progress type="danger" percents="67"></Progress>
    </div>
    <br>
    <p>Size: large</p>
    <div>
        <Progress percents="37" size="large"></Progress>
        <Progress type="primary" percents="45" size="large"></Progress>
        <Progress type="success" percents="28" size="large"></Progress>
        <Progress type="warning" percents="90" size="large"></Progress>
        <Progress type="danger" percents="67" size="large"></Progress>
    </div>
    <br>
    <p>Size: big</p>
    <div>
        <Progress percents="37" size="big"></Progress>
        <Progress type="primary" percents="45" size="big"></Progress>
        <Progress type="success" percents="28" size="big"></Progress>
        <Progress type="warning" percents="90" size="big"></Progress>
        <Progress type="danger" percents="67" size="big"></Progress>
    </div>
    <br>
    <p>Size: small</p>
    <div>
        <Progress percents="37" size="small"></Progress>
        <Progress type="primary" percents="45" size="small"></Progress>
        <Progress type="success" percents="28" size="small"></Progress>
        <Progress type="warning" percents="90" size="small"></Progress>
        <Progress type="danger" percents="67" size="small"></Progress>
    </div>
    <br>
    <p>Size: mini</p>
    <div>
        <Progress percents="37" size="mini"></Progress>
        <Progress type="primary" percents="45" size="mini"></Progress>
        <Progress type="success" percents="28" size="mini"></Progress>
        <Progress type="warning" percents="90" size="mini"></Progress>
        <Progress type="danger" percents="67" size="mini"></Progress>
</div>
</div>
```
:::

### API说明
| 参数       | 说明           | 类型    | 可选值                               | 默认值 |
| ---------- | -------------- | ------- | ------------------------------------ | ------ |
| size       | 尺寸           | string  | mini / small / big / large           | —     |
| type       | 类型           | string  | primary / success / warning / danger | —     |
| width-auto | 是否宽度自适应 | boolean | —                                   | false  |