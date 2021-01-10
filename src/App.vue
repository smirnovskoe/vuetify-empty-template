<template>
  <v-app class="">
    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/app/Navbar";
import Sidebar from "./components/app/Sidebar";
import Footer from "./components/app/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Sidebar,
    Footer,
  },

  data: () => ({
    isOpen: true,
  }),
};
</script>
