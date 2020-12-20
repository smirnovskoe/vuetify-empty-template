<template>
    <v-navigation-drawer app v-model="drawer">
    <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        links: [
            {title: 'Home', url: '/', icon: 'mdi-view-dashboard' },
            {title: 'About', url: '/about', icon: 'mdi-account-box' },
            {title: 'Help', url: '/help', icon: 'mdi-gavel'},
        ]
    })
}
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