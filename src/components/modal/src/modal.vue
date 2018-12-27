<template>
  <transition name="modal-fade" @before-enter="beforeEnter" @after-leave="afterLeave">
    <div class="sim-modal__dimmer" v-show="show">
      <div :class="['sim-modal', 'sim-modal--' + size, className]" :style="style">
        <div class="sim-modal__header">
          <slot name="title">
            <span class="sim-modal__title">{{ title }}</span>
          </slot>
          <button type="button" class="sim-modal__closebtn" aria-label="Close" @click="handleClose">
            <i class="sim-icon-error"></i>
          </button>
        </div>
        <div class="sim-modal__content">
          <slot name="content"></slot>
        </div>
        <div class="sim-modal__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:show', false);
    },
    beforeEnter() {
      var body = document.getElementsByTagName('body');
      body[0].style.overflow = 'hidden';
    },
    afterLeave() {
      var body = document.getElementsByTagName('body');
      body[0].style.overflow = 'auto';
    }
  },
  watch: {
    show: function () {
    }
  },
  computed: {
    style() {
      let style = {};
      style.marginTop = '100px';
      return style;
    }
  },
};
</script>
