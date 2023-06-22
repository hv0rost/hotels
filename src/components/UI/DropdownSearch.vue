<template>
  <div class="ma-4">
    <div class="subtitle-1 mb-1 font-weight-bold">Страна</div>
    <v-menu
        offset-y
        :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            outlined
            dense
            color="green"
            hide-details
            v-bind="attrs"
            v-on="on"
            full-width
            placeholder="Поиск страны"
            v-model="search"
        ></v-text-field>
      </template>

      <v-list height="500" class="overflow-auto">
        <v-list-item
            v-for="item in filteredItems"
            :key="item"
            dense
        >
          <v-checkbox color="green" hide-details :label="item" :value="item" v-model="value"></v-checkbox>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

</template>

<script>
export default {
  name: "DropdownSearch",
  data ()  {
    return {
      countries : [
        "Австрия",
        "Азербайджан",
        "Австралия",
        "Греция",
        "Россия",
        "Украина",
        "Америка",
        "Франция",
        "Египет",
        "Турция",
        "Шри-Ланка",
        "Бали",
        "Германия",
        "Швеция",
        "Грузия",
        "Китай",
        "Япония",
        "Чехия",
        "Испания",
        "Бразилия",
        "Канада",
      ],
      search : '',
      selectedCountries : [],
    }
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed : {
    filteredItems() {
      return this.countries.filter(items => items.toLowerCase().includes(this.search.toLowerCase()))
    },
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
}
</script>

<style scoped>

</style>
