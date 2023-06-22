<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Количество отзывов(от)</div>
    <v-text-field
        outlined
        dense
        hide-details
        full-width
        color="green"
        placeholder="Например, от 10"
        v-model="value">
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "ReviewCount",
  props: ['modelValue'],
  emits: ['update:modelValue'],
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