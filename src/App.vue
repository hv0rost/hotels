<template>
  <v-app>
      <DrawerComponent />
    <v-main>
      <HotelList />
    </v-main>
  </v-app>
</template>

<script>
import DrawerComponent from "@/components/DrawerComponent.vue";
import HotelList from "@/components/HotelList.vue";
export default {
  name: 'App',
  components : {
    DrawerComponent,
    HotelList
  },
  data: () => ({
    //
  }),
};
</script>

<style>

</style>
