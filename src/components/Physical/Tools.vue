<template>
  <v-list rounded>
    <v-subheader>ИНСТРУМЕНТЫ</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="clickHandler(item)"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "tools",
  data: () => ({
    items: [
      {
        title: "Отчёт",
        icon: "mdi-book",
      },
      {
        title: "Something",
        icon: "mdi-logout",
      },
    ],
  }),
  methods: {
    // TODO: исправить костыль (через item.action)
    clickHandler(item) {
      if (item.title === "Отчёт") {
        return;
      }
    },
  },
};
</script>