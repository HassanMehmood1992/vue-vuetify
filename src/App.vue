<template>
  <v-app>
    <nav>
      <v-toolbar dark color="primary" flat app>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="pb-0" floating hide-overlay stateless width="380">
      <v-toolbar dark color="primary" flat>
       

        <v-toolbar-title class="white--text">Logs</v-toolbar-title>
      </v-toolbar>
      <v-layout >
               
        <v-list class="grow">
          <v-list-tile v-for="link in links" :key="link" @click>
            <v-list-tile-title v-text="link"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-layout>
    </v-navigation-drawer>

    </nav>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: false,
      right: null
    };
  }
};
</script>
