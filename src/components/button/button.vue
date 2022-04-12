<template>
  <button
      class="jr-button"
      :class="[`jr-button --${type}`, {'is-plain': plain} ]"
      :disabled="disabled"
      @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"> <slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'jr-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  created() {
    console.log(this.$slots)
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="less">
.jr-button .is-plain {

}

</style>
