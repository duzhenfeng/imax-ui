<template>
  <i
    class="iconfont"
    :class="[`icon-${type}`]"
    :style="{fontSize, color}"
  />
</template>

<script>
export default {
  name: 'ImIcon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 12
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    fontSize() {
      const type = Object.prototype.toString.call(this.size);
      if (type === "[object Number]") {
        return `${this.size}px`;
      }
      else {
        return this.size;
      }
    }
  }
};
</script>
