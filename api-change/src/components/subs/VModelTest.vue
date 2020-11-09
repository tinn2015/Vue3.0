<template>
  <div class="mt10" @click="increase">
    counter: {{modelValue}}
  </div>
  <div class="mt10" @click="double">
    counterDouble: {{counterDouble}}
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    counterDouble: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increase () {
      console.log(this.modelValue)
      this.$emit('update:modelValue', this.modelValue + 1)
    },
    double () {
      this.$emit('update:counterDouble', this.modelValue * 2)
    }
  }
}
</script>