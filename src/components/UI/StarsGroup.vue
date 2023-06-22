<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Количество звезд</div>
    <div class="starGroup rounded-lg">
      <v-checkbox color="green" value="1" label="1 звезда" v-model="value" hide-details></v-checkbox>
      <v-checkbox color="green" value="2" label="2 звезды" v-model="value" hide-details></v-checkbox>
      <v-checkbox color="green" value="3" label="3 звезды" v-model="value" hide-details></v-checkbox>
      <v-checkbox color="green" value="4" label="4 звезды" v-model="value" hide-details></v-checkbox>
      <v-checkbox color="green" value="5" label="5 звезд" v-model="value" hide-details></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingGroup",
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
.starGroup {
  border : 1px solid lightgray;

}
.v-input {
  margin: 10px;
}
</style>