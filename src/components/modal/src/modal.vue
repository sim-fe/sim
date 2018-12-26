<template>
  <transition name="modal-fade">
    <div class="sim-modal__dimmer" v-show="isShow">
        <div class="sim-modal">dfdfdf</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
