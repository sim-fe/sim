<template>
    <div
        :class="[
            'sim-select',
            {'sim-select--show': visible}
        ]"
        @click.stop="toggleMenu"
        v-clickoutside="handleClose"
    >
        <Input ref="input" placeholder="请选择" readonly after-icon="sim-icon-icon_on_the_bottom"></Input>
        <transition name="sim-fade">
            <div class="sim-select__dropdown" v-show="visible">
            <ul class="sim-select__list">
                <li class="sim-select__option">我是大家都放假附加费</li>
                <li class="sim-select__option">我是大家都放假附加费</li>
                <li class="sim-select__option">我是大家都放假附加费</li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
import Input from 'components/input'
import clickoutside from '@/directives/clickoutside'
export default {
    name: 'Select',
    directives: { clickoutside },
    components: {
      Input
    },
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
        return {
            visible: false
        }
    },
    computed: {

    },
    methods: {
        toggleMenu() {
            this.visible = !this.visible;
            if (this.visible) {
                this.$refs.input.focus();
            }
        },
        handleClose() {
            this.visible = false;
        }
    }
}
</script>
