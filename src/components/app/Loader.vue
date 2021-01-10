<template>
  <div class="text-center">
    <v-progress-circular
      :size="70"
      :width="7"
      :color="color"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  computed: {
    color() {
      const colors = ["amber", "green", "purple", "red", "primary"];
      return colors[Math.floor(Math.random() * 5)];
    },
  },
  props: {
    loading: Boolean,
  },
};
</script>