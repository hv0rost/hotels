<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Количество отзывов(от)</div>
    <v-text-field
        outlined
        dense
        full-width
        color="green"
        placeholder="Например, от 10"
        :rules="[rules.numbers]"
        v-model="value">
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "ReviewCount",
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data () {
    return {
      rules: {
        numbers: value => {
          if (value.length > 0) {
            const pattern = /^\d+$/
            return pattern.test(value)
          }
          return true
        },
      }
    }
  },
  computed : {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style scoped>

</style>