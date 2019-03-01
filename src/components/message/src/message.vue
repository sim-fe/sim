<template>
    <transition name="message-fade" @enter="handleEnter">
        <div class="sim-message">
            <div class="sim-message__content">这是消息弹出框
                <slot name="content"></slot>
            </div>
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
        handleEnter (el) {
            el.style.height = el.scrollHeight + 'px';
            console.log(el);
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

