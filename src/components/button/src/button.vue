<template>
  <button
    @click="$emit('click')"
    class="sim-button"
    :disabled="disabled"
    :class="[
      'sim-button--' + type,
      size ? 'sim-button--' + size : '',
      widthAuto ? 'sim-button--auto' : ''
    ]"
  >
    <template v-if="iconPosition === 'left'">
      <i v-if="icon !== ''" :class="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </template>
    <template v-if="iconPosition === 'right'">
      <span v-if="$slots.default"><slot></slot></span>
      <i v-if="icon !== ''" :class="icon"></i>
    </template>
  </button>
</template>
<script>
  export default{
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
      widthAuto: Boolean,
      iconPosition: {
        type: String,
        default: 'left'
      }
    },
    data () {
      return {
        
      }
    }
  }
</script>
