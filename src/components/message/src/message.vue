<template>
    <transition name="message-fade">
        <div class="sim-message">
            <div class="sim-message__content">
                这是消息弹出框
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
        showClose: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
        }
    }
}
</script>

