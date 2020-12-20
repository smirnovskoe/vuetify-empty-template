<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="$emit('click')"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span>Vuetify template</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn>
                <span>Sign Out</span>
            </v-btn>
        </v-app-bar>      
    </nav>
</template>

<script>

export default {
    name: 'navbar',
    components: {

    }
    
}
</script>