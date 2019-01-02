<template>
    <div
        :class="[
            'sim-input',
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
        return {}
    },
    computed: {

    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        }
    }
}
</script>
