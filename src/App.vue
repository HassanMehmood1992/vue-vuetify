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
      <v-layout fill-height>
        <v-navigation-drawer dark mini-variant stateless value="true">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon @click.native.stop="mini = !mini">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile app v-for="item in items" :key="item.title" @click>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>

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
