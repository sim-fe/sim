<template>
  <button
    @click="$emit('click')"
    class="sim-button"
    :disabled="disabled"
    :class="[
      'sim-button--' + type,
      size ? 'sim-button--' + size : ''
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
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
      round: Boolean
    },
    data () {
      return {
        
      }
    }
  }
</script>
