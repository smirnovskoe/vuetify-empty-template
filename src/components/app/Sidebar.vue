<template>
  <v-navigation-drawer
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    app
    absolute
    temporary
    v-model="value"
  >
    <v-list>
      <v-list-item v-for="item in links" :key="item.title" :to="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="white--text">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sidebar",
  props: ["value"],
  data: () => ({
    drawer: false,
    links: [
      { title: "Администратор", url: "/", icon: "mdi-view-dashboard" },
      { title: "Кредиты", url: "/physical", icon: "mdi-credit-card" },
      { title: "О программе", url: "/help", icon: "mdi-help" },
    ],
  }),
};
</script>


<router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      >
        <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
      </router-link>