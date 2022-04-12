<template>
  <div v-if="visible" @click.self="handleClose">
    <div :style="{width, marginTop: top}">
      <div>
        <slot name="title"></slot>
        <span>{{title}}</span>
        <button>
          <i></i>
        </button>
      </div>
      <div>
        <slot></slot>
      </div>
      <div v-if="$slots.footer" @click.self="handleClose">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '50%'
    },
    visible: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    handleClose() {
      this.$emit('update: close', false)
    }
  },
}
</script>

<style scoped>

</style>
