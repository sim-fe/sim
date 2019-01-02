<template>
    <div
        :class="[
            type === 'textarea' ? 'sim-textarea' : 'sim-input',
            {
                'sim-input-group': $slots.prepend || $slots.append
            }
        ]"
    >
        <i
            v-if="beforeIcon || afterIcon"
            :class="[
                beforeIcon || afterIcon,
                'sim-input__icon',
                beforeIcon ? 'sim-input__icon--left' : '',
                afterIcon ? 'sim-input__icon--right' : ''
            ]"
        >
        </i>
        <!-- 前置元素 -->
        <div class="sim-input-group__prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <input
            class="sim-input__input"
            v-bind="$attrs"
            :type="type"
            :disabled="disabled"
            :readonly="readonly"
        />
        <!-- 后置元素 -->
        <div class="sim-input-group__append" v-if="$slots.append"><slot name="append"></slot></div>
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
        disabled: Boolean,
        readonly: Boolean,
        beforeIcon: String,
        afterIcon: String,
        size: String
    },
    data() {
        return {}
    }
}
</script>
