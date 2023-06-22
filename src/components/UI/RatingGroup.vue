<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Количество звезд</div>
    <div class="starGroup rounded-lg">
      <v-checkbox value="1" label="1 звезда" hide-details></v-checkbox>
      <v-checkbox value="2" label="2 звезды" hide-details></v-checkbox>
      <v-checkbox value="3" label="3 звезды" hide-details></v-checkbox>
      <v-checkbox value="4" label="4 звезды" hide-details></v-checkbox>
      <v-checkbox value="5" label="5 звезд" hide-details></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingGroup"
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