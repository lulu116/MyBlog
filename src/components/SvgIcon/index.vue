<template>
  <svg
    :class="svgClass"
    @click="toggleHamburger"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  methods: {
    toggleHamburger () {
      this.$emit('toggleHamburger')
    }
  }
}
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    font-size: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
