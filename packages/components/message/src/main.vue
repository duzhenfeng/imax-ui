<template>
  <transition name="imax__message-fade">
    <div
      v-show="visible"
      class="imax__message"
      :class="[messageClassName]"
      @click="close"
    >
      <div class="imax__message__inner">
        <i
          class="imax-icon"
          :class="[iconClasName]"
        />
        <div class="imax__message__content">
          {{ message }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: '',
      icon: 'info',
      onClose: null,
      duration: 2000,
      timer: null,
      closed: false
    };
  },
  computed: {
    messageClassName() {
      return this.type !== '' ? `imax__message-${this.type}` : '';
    },
    iconClasName() {
      switch (this.type) {  
      case 'success':
        return 'icon-success';
      case 'error':
        return 'icon-error';
      default:
        return 'icon-warning';
      }
    },
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  }
};
</script>
