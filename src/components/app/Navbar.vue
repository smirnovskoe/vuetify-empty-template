<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span>Vuetify template</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn>
                <span>Sign Out</span>
            </v-btn>
        </v-app-bar>

        <Sidebar />


        
    </nav>
</template>

<script>
import Sidebar from '@/components/app/Sidebar';

export default {
    components: {
        Sidebar,
    }
    
}
</script>