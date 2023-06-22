<template>
  <v-navigation-drawer app width="400">
    <DropdownSearch :modelValue="filter.countries" @update:modelValue="newValue => this.filter.countries = newValue"/>
    <TypeSelect :modelValue="filter.types" @update:modelValue="newValue => this.filter.types = newValue"/>
    <RatingGroup :modelValue="filter.ratings" @update:modelValue="newValue => this.filter.ratings = newValue"/>
    <ReviewCount :modelValue="filter.reviews" @update:modelValue="newValue => this.filter.reviews = newValue"/>
    <CostInput :modelValue="filter.cost" @update:modelValue="newValue => this.filter.cost = newValue"/>

    <v-btn color="deep-purple" rounded class="white--text ml-4 mb-4 mt-4" height="45" width="365" @click="setFilter()">Применить фильтр</v-btn>
    <v-btn elevation="0" height="45" rounded class="ml-4 black--text" width="365" @click="resetFilter"> <v-icon>mdi-close</v-icon> Очистить фильтр</v-btn>
  </v-navigation-drawer>
</template>

<script>
import DropdownSearch from "@/components/UI/DropdownSearch.vue";
import TypeSelect from "@/components/UI/TypeSelect.vue";
import RatingGroup from "@/components/UI/RatingGroup.vue";
import ReviewCount from "@/components/UI/ReviewCount.vue";
import CostInput from "@/components/UI/CostInput.vue";
export default {
  name: "DrawerComponent",
  components : {
    DropdownSearch,
    TypeSelect,
    RatingGroup,
    ReviewCount,
    CostInput
  },
  data () {
    return {
      filter : {
        countries : [],
        types : [],
        ratings : [],
        reviews : '',
        cost : [0, 100500]
      }
    }
  },
  methods : {
    setFilter() {
      this.$store.commit('setFilter', this.filter)
    },
    resetFilter() {
      this.filter.countries = [];
      this.filter.types = [];
      this.filter.ratings = [];
      this.filter.reviews = '';
      this.filter.cost = [0, 100500];

      this.$store.commit('setFilter', this.filter)
    }
  }
}
</script>

<style scoped>

</style>