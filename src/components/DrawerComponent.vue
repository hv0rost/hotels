<template>
  <v-navigation-drawer width="400">
    <DropdownSearch />
    <TypeSelect />
    <RatingGroup />
    <ReviewCount />
    <CostInput />

    <v-btn outlined color="blue" class="ml-4 mb-4 mt-4" width="365">Применить фильтр</v-btn>
    <v-btn outlined color="black" class="ml-4" width="365">Очистить фильтр</v-btn>
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
    }
  },
}
</script>

<style scoped>

</style>