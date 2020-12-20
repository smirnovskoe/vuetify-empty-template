<template>
  <v-app class="">

    <Navbar @click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />
    
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/app/Navbar';
import Sidebar from './components/app/Sidebar';

export default {
  name: 'App',

  components: {
    Navbar, Sidebar
  },

  data: () => ({
    isOpen: true
  }),
};
</script>
