<template>
    <div
        :class="[
            'sim-input',
            {
                'sim-input-group': $slots.prepend || $slots.append
            }
        ]"
    >
        <span
            v-if="beforeIcon || afterIcon || $slots.before || $slots.after"
            :class="[
                'sim-input__icon',
                beforeIcon || $slots.before ? 'sim-input__icon--left' : '',
                afterIcon || $slots.after ? 'sim-input__icon--right' : ''
            ]"
        >
            <i v-if="beforeIcon || afterIcon" :class="[beforeIcon || afterIcon]"> </i>
            <slot name="before"></slot> <slot name="after"></slot>
        </span>
        <!-- 前置元素 -->
        <div class="sim-input-group__prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <input
            ref="input"
            class="sim-input__input"
            v-bind="$attrs"
            v-on="$listeners"
            :type="type"
            :disabled="disabled"
            :readonly="readonly"
            :value="value"
        />
        <!-- 后置元素 -->
        <div class="sim-input-group__append" v-if="$slots.append"><slot name="append"></slot></div>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        value: [String, Number],
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
        return {};
    },
    computed: {},
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        }
    }
};
</script>
