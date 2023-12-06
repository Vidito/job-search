<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  // eslint-disable-next-line vue/require-prop-types
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      // setting the default class of type props to primary
      default: 'primary',
      // section 114
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  computed: {
    buttonClass() {
      return {
        //  the following is old
        // primary: this.type === 'primary',
        // secondary: this.type === 'secondary',
        // the following is new and the same as above (section) 111
        [this.type]: true // { error: true}
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 text-white bg-brand-blue-1  hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1  hover:bg-brand-blue-2 hover:text-white;
}
</style>
