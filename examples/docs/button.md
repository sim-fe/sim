# Button 按钮

<div class="demo-block">
    <Button @click="test">test</Button>
    <Button size="small">test</Button>
</div>

<script>
    export default {
        methods: {
            test () {
                alert(1111111)
            }
        }
    }
</script>