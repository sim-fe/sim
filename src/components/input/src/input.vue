<template>
  <div class="sim-input">
    <input 
      class="sim-input__input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
    >
  </div>
</template>
<script>
  export default{
    name: 'Input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      disabled: Boolean
    },
    data () {
      return {
        
      }
    }
  }
</script>
