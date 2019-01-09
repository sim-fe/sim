<template>
    <div
        :class="[
            'sim-select',
            {'sim-select--show': visible}
        ]"
        @click.stop="toggleMenu"
        v-clickoutside="handleClose"
        :placeholder="placeholder"
    >
        <div class="sim-input">
            <i class="sim-icon-icon_on_the_bottom sim-input__icon sim-input__icon--right"></i>
            <input ref="input" type="text" v-model="query" :disabled="disabled" readonly :placeholder="placeholder" class="sim-input__input">
        </div>
        <transition name="sim-fade">
            <div class="sim-select__dropdown" v-show="visible">
            <ul class="sim-select__list">
                <slot></slot>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
import Option from './option'
import clickoutside from '@/directives/clickoutside'
import { t } from '@/locale'

export default {
    name: 'Select',
    directives: { clickoutside },
    provide() {
        return {
            'select': this
        }
    },
    components: {
      /* eslint-disable-next-line */
      Option
    },
    props: {
         multiple: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Array],
            default: ''
        },
        label: [String, Number, Array],
        placeholder: {
            type: String,
            default: t('sim.select.placeholder')
        },
        name: {
            type: String
        },
        disabled: Boolean,
        readonly: Boolean,
        size: String
    },
    data() {
        return {
            options: [],
            sels: [],
            query: '',
            visible: false
        }
    },
    created() {
        if (this.value && !this.multiple) {
            this.sels = this.value;
        }
    },
    mounted () {
        /* eslint-disable-next-line */
        this.$on('on-select-selected', (option) => {
            if (!this.multiple) {
                this.query = option.label;
                this.sels = option.value;
                this.visible = false;
            }
        });
    },
    computed: {

    },
    watch: {
        sels (value) {
            this.options.forEach(item => {
                if (item.value === value) {
                    this.query = item.label;
                }
            })
        }
    },
    methods: {
        toggleMenu() {
            if (!this.disabled) {
                this.visible = !this.visible;
                if (this.visible) {
                    this.$refs.input.focus();
                }
            }
        },
        handleClose() {
            this.visible = false;
        },
        hideMenu () {
            this.visible = false;
        },
    }
}
</script>
