<template>
    <div class="sim-input">
        <input
            class="sim-input__input"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
        />
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        beforeIcon: String,
        afterIcon: String
    },
    data() {
        return {}
    }
}
</script>
