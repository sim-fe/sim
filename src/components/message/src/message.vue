<template>
    <transition name="message-fade" @enter="handleEnter">
        <div class="sim-message">
            <div ref="content" class="sim-message__content">
                <i class="sim-message__content-icon sim-icon-info_circular"></i>
                <div class="sim-message__content-text" v-html="content"></div>
                <button
                    type="button"
                    class="sim-message__closebtn"
                    aria-label="Close"
                    @click="handleClose"
                    v-if="showClose"
                >
                    <i class="sim-icon-error"></i>
                </button>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Message',
    props: {
        // id
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        },
        // 显示时间 单位s 值为0时不自动关闭
        duration: {
            type: Number,
            default: 1.5
        },
        showClose: {
            type: Boolean,
            default: false
        },
        // 关闭回调函数
        onClose: {
            type: Function
        }
    },
    methods: {
        handleClose() {
        },
        handleEnter(el) {
            el.style.height = el.scrollHeight + 'px'; // scrollHeight 包括了content padding border 和 未滚动到的区域
        },
        clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        },
        close() {
            this.clearCloseTimer();
            /* this.onClose(); */
            this.$parent.close(this.name);
        }
    },
    mounted() {
        if (this.duration !== 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.duration * 1000);
        }
    }
}
</script>

