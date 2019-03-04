<template>
    <li
        class="sim-select__option"
        :class="{
            'sim-select__option--selected': isSelected,
        }"
        :disabled = "disabled"
        @click.stop="doSelect"
        ref="option"
    >
        <div><slot>{{defaultLabel}}</slot></div>
    </li>
</template>
<script>
import Emitter from '@/mixins/emitter'
export default {
    name: 'Option',
    props: {
        value: {
            required: true
        },
        label: {
            type: [String, Number]
        },
        disabled: Boolean
    },
     mixins: [ Emitter ],
    inject: ['select'],
    data() {
        return {

        }
    },
    computed: {
        defaultLabel () {
            let label = this.label ? this.label : this.value;
            return label;
        },
        isSelected () {
            return this.select.sels === this.value;
        }
    },
    watch: {

    },
    methods: {
        doSelect () {
            if (this.disabled) return;
            this.dispatch('Select', 'on-select-selected', {
                value: this.value,
                label: this.label || (this.$el && this.$el.textContent)
            });
        }
    },
    created() {

    },
    mounted() {
        this.select.options.push({
            context: this,
            value: this.value,
            label: this.label || (this.$el && this.$el.textContent)
        })
    }
}
</script>
