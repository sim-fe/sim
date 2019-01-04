<template>
  <div :class="['sim-progress', size ? 'sim-progress--' + size : '']">
    <div
      :class="['sim-progress__bar','sim-progress--' + type, size ? 'sim-progress--' + size : '']"
      :style="width"
    ></div>
    <div
      class="sim-progress__indicator"
      v-html="indicator"
    ></div>
  </div>
</template>

<script>
export default {
    name: 'Progress',
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        type: {
            type: String,
            default: 'primary'
        },
        percents: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            indicator: '',
            width: ''
        }
    },
    watch: {
        percents: {
            handler: function(val) {
                if ((val + '').includes('%')) {
                    val.splice('%')
                }
                val = parseInt(val)
                if (val > 100 || val === 100) {
                    val = 100
                    this.width = 'width: 100%'
                    this.indicator = '<i class="icon sim-icon-dagou"></i>'
                } else {
                    this.width = `width: ${this.percents}%`
                    this.indicator = val + '%'
                }
            },
            immediate: true
        }
    },
    methods: {}
}
</script>
