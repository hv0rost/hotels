<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Тип</div>
    <v-select
        :items="items"
        label="Выберите тип"
        dense
        multiple
        hide-details
        v-model="value"
        item-color="green"
        color="green"
        outlined
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "TypeSelect",
  data () {
    return {
      items : [
        "Апартаменты",
        "Отель",
        "Хостел",
      ],
      selectedTypes : []
    }
  },
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