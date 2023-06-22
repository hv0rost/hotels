<template>
  <v-app>
    <div class="d-flex flex-row">
      <DrawerComponent />
      <HotelList />
    </div>
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
