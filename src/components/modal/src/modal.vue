<template>
    <transition
        name="modal-fade"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @after-leave="afterLeave"
    >
        <div
            :class="[
                'sim-modal__dimmer',
                showDimmer ? 'sim-modal__dimmer--visible' : 'sim-modal__dimmer--hide'
            ]"
            v-show="show"
        >
            <div :class="['sim-modal', 'sim-modal--' + size, className]" :style="style">
                <div :class="['sim-modal__header', center ? 'sim-modal__header--center' : '']">
                    <slot name="title">
                        <span class="sim-modal__title">{{ title }}</span>
                    </slot>
                    <button
                        type="button"
                        class="sim-modal__closebtn"
                        aria-label="Close"
                        @click="handleClose"
                        v-if="showClose"
                    >
                        <i class="sim-icon-error"></i>
                    </button>
                </div>
                <div class="sim-modal__content"><slot name="content"></slot></div>
                <div
                    :class="['sim-modal__footer', center ? 'sim-modal__footer--center' : '']"
                    v-if="$slots.footer"
                >
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal'
        },
        title: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        },
        center: {
            type: Boolean,
            default: false
        },
        showDimmer: {
            type: Boolean,
            default: true
        },
        showClose: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {}
    },
    methods: {
        handleClose() {
            this.$emit('update:show', false)
        },
        beforeEnter() {
            var body = document.getElementsByTagName('body')
            body[0].style.overflow = 'hidden'
            this.$emit('on-show')
        },
        afterEnter() {
            this.$emit('on-visible')
        },
        beforeLeave() {
            this.$emit('on-hide')
        },
        afterLeave() {
            var body = document.getElementsByTagName('body')
            body[0].style.overflow = 'auto'
            this.$emit('on-hidden')
        }
    },
    watch: {
        show: function() {}
    },
    computed: {
        style() {
            let style = {}
            style.marginTop = '100px'
            return style
        }
    }
}
</script>
