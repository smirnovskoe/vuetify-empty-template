<template>
  <v-navigation-drawer app v-model="value" absolute temporary right width="55%">
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "rightChartBar",
  props: ["value"],
};
</script>