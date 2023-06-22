<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Тип</div>
    <v-select
        :items="items"
        label="Выберите тип"
        dense
        multiple
        hide-details
        v-model="selectedTypes"
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
        "Аппартаменты",
        "Отель",
        "Хостел",
      ],
      selectedTypes : []
    }
}
}
</script>

<style scoped>

</style>