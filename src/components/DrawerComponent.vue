<template>
  <div class="menu">
    <DropdownSearch :modelValue="storedFilter.countries" @update:modelValue="newValue => this.storedFilter.countries = newValue"/>
    <TypeSelect :modelValue="storedFilter.types" @update:modelValue="newValue => this.storedFilter.types = newValue"/>
    <RatingGroup :modelValue="storedFilter.stars" @update:modelValue="newValue => this.storedFilter.stars = newValue"/>
    <ReviewCount :modelValue="storedFilter.reviews" @update:modelValue="newValue => this.storedFilter.reviews = newValue"/>
    <CostInput :modelValue="storedFilter.cost" @update:modelValue="newValue => this.storedFilter.cost = newValue"/>

    <v-btn color="deep-purple" rounded class="white--text ma-4" height="45" width="400" @click="setFilter()">Применить фильтр</v-btn>
    <v-btn elevation="0" height="45" rounded class="ml-4 black--text" width="400" @click="resetFilter"> <v-icon>mdi-close</v-icon> Очистить фильтр</v-btn>
  </div>
</template>

<script>
import DropdownSearch from "@/components/UI/DropdownSearch.vue";
import TypeSelect from "@/components/UI/TypeSelect.vue";
import RatingGroup from "@/components/UI/StarsGroup.vue";
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
  methods : {
    setFilter() {
      this.$store.commit('setFilter', this.storedFilter)
    },
    resetFilter() {
        this.$store.commit('resetFilter', {
        countries : [],
        types : [],
        stars : [],
        reviews : '',
        cost : [0, 100500]
      })
    }
  },
  computed : {
    storedFilter : {
      get() {
        return this.$store.getters.getFilter
      },
      set(value) {
        this.$store.commit('setFilter', value)
      }
    }
  }
}
</script>

<style scoped>
.menu {
  width: 430px;
}
</style>
