
<template>
  <!-- <v-navigation-drawer   :mini-variant.sync="mini" app v-model="drawer" class="pb-0" floating  > -->
      <v-navigation-drawer v-model="drawer" app :mini-variant.sync="mini">
        <v-toolbar flat class="transparent" color="primary">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="../assets/test.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title class="white--text">Hassan Mehmood</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon @click.stop="mini = !mini">
                  <v-icon class="white--text">chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile v-for="item in items" :key="item.title" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Header from './components/Header';
// import SideNav from './components/SideNav';
export default {
  name: "App",
  components: {
  
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

<style>

</style>

