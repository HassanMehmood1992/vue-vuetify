<template>
  <div>
    <nav>
      <Header></Header>
      <SideNav></SideNav>
    </nav>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld";
import Header from '../components/Header';
import SideNav from '../components/SideNav';
@Component({
  components: {
    HelloWorld,
    Header,
    SideNav
  }
})
export default class Main extends Vue {}
</script>

<style>
</style>
