<template>
  <v-app class="">
    <Navbar />
    <v-main>
      <v-container>
      Hello World
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/app/Navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
