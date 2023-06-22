<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Цена</div>
    <div class="costFields">
      <v-text-field
          outlined
          dense
          hide-details
          placeholder="От 0 ₽"
          class="pr-4"
          v-model="cost[0]">
      </v-text-field>

      <div style="color: lightgray"> — </div>

      <v-text-field
          outlined
          dense
          hide-details
          placeholder="До 100 500 ₽"
          class="pl-4"
          v-model="cost[1]">
      </v-text-field>
    </div>
    <v-range-slider
        v-model="cost"
        :min="0"
        :max="100500"
        color="green"
        class="mt-2"
        hide-details
        strict
    ></v-range-slider>
  </div>
</template>

<script>
export default {
  name: "CostInput",
  data() {
    return {
      cost: [0, 100500]
    }
  }
}
</script>

<style scoped>
.costFields {
  display: flex;
  align-items: center;
}
fieldset {
  color : lightgray;
}
</style>