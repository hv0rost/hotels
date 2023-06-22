<template>
  <div class="ma-4">
    <div v-for="(hotel, index) in hotelList" v-bind:key="index">
      <v-card
          class="mx-auto my-12"
          elevation="0"
      >
        <v-card-title class="pa-2 pl-4">{{ hotel.name }}</v-card-title>
        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <v-col cols="8">
              <v-row >
                <v-rating
                    :value="hotel.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
                <div class="ml-2 mr-2">{{hotel.type}}</div>
                <div>•</div>
                <div class="ml-2">{{hotel.reviews_amount}} отзывов</div>
                <v-icon class="ml-3" small>mdi-map-marker-outline</v-icon>
                <div>{{hotel.country}}</div>
                <div class="my-4 font-weight-regular black--text">
                  {{ hotel.description }}
                </div>
              </v-row>
            </v-col>
            <v-col>
              <div class="ml-8">
                <div class="text-h5 font-weight-bold black--text"> {{ hotel.min_price }} ₽</div>
                <div class="caption">Цена за 1 ночь</div>

              </div>

              <v-btn elevation="0" color="lightgrey" v-if="!hotels[index].booked" @click="hotels[index].booked = !hotels[index].booked">
                <v-icon color="deep-purple lighten-1" small>mdi-credit-card</v-icon>
                <div class="text-button caption deep-purple--text text--lighten-1 ml-2">Забронировать</div>
              </v-btn>

              <v-btn elevation="0" color="lightgrey" v-if="hotels[index].booked" @click="hotels[index].booked = !hotels[index].booked">
                <v-icon color="green darken-1" small>mdi-check</v-icon>
                <div class="text-button  green--text text--darken-1 ml-2">Забронировано</div>
              </v-btn>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <div class="text-center" v-if="filteredHotels.length > 3">
      <v-pagination
          color="green"
          v-model="page"
          :length="Math.ceil(filteredHotels.length / 3)"
      ></v-pagination>
    </div>
    <div v-if="hotelList.length === 0">
      <v-card
          class="my-12"
          elevation="0"
      >
        <v-card-title class="justify-center pa-2 pl-4">
          <v-img
              max-width="500"
              src="https://cdn.dribbble.com/users/3873964/screenshots/10214427/media/d32901488e6f25968d28c3133b39a1a6.png?compress=1&resize=1000x750&vertical=center"
          >
          </v-img>
        </v-card-title>
        <v-card-text class="pa-2 pl-4">
          <v-row
              align="center"
              class="mx-0 flex-column"
          >
            <div class="text-h6 black--text"> По данным параметрам ничего не найдено </div>
            <div class="justify-center d-flex align-center"> Попробуйте изменить параметры фильтрации или вернутся в общий каталог </div>
            <v-btn elevation="0" class="mt-3 " @click="resetFilter()">
              <div class="deep-purple--text text--darken-1">Очистить фильтр</div>
            </v-btn>
          </v-row>

        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import json from '/hotels.json'
export default {
  name: "HotelList",
  data () {
    return {
      hotels : {},
      page : 1,
      hotelIndex : 0
    }
  },
  async created() {
    this.hotels = json.hotels
    this.$store.commit('setHotels', this.hotels)
  },
  computed : {
    hotelList () {
      if (this.filteredHotels.length > 0) {
        return this.filteredHotels.slice(this.hotelIndex, this.page * 3)
      }
      return []
    },
    filteredHotels() {
      return this.$store.getters.getHotels
    }
  },
  watch : {
    page() {
      this.hotelIndex = (this.page - 1) * 3;
    },
  },
  methods : {
    resetFilter() {
      this.$store.commit('resetFilter', {
        countries : [],
        types : [],
        ratings : [],
        reviews : '',
        cost : [0, 100500]
      })
    }
  }

}
</script>

<style scoped>

</style>