
<template>
    <v-toolbar dark color="primary" flat app>
        <v-toolbar-side-icon class="hidden-md-and-up ml-0" @click="drawer = !drawer"></v-toolbar-side-icon>

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
</template>

<script>
export default {

}
</script>

<style>

</style>

