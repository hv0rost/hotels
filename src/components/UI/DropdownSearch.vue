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
            hide-details
            v-bind="attrs"
            v-on="on"
            full-width
            placeholder="Поиск страны"
            v-model="search"
        ></v-text-field>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in filteredItems"
            :key="index"
        >
          <v-checkbox :value="{item}" :label="item" v-model="selectedCountries"></v-checkbox>
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
      items : [
        "Австрия",
        "Азербайджан",
        "Австралия",
        "Армения",
      ],
      search : '',
      selectedCountries : [],
    }
  },
  computed : {
    filteredItems() {
      return this.items.filter(items => items.includes(this.search))
    }
  }
}
</script>

<style scoped>

</style>