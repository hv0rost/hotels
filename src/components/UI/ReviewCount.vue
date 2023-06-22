<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Количество отзывов(от)</div>
    <v-text-field
        outlined
        dense
        hide-details
        full-width
        placeholder="Например, от 10"
        v-model="reviews">
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "RewiewCount",
  data() {
    return {
      reviews : ''
    }
  }
}
</script>

<style scoped>

</style>