<template>
    <span
        @click="$emit('click')"
        class="sim-tag"
        :class="['sim-tag--' + type, size ? 'sim-tag--' + size : '']"
    >
        <slot></slot> <i v-if="closable" class="sim-icon-error" @click="$emit('on-close')"></i>
    </span>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        closable: Boolean,
        size: String,
        icon: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>
