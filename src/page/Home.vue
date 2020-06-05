<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-menu mode="horizontal">
          <a-menu-item v-for=" (item , index) in menu" :key="index">
            <!-- <a-icon type="mail" /> -->
            {{item.name}}
          </a-menu-item>
        </a-menu>
      </a-layout-header>

      <a-layout>
        <!--<a-layout-sider>
            <a-menu >
          <a-menu-item v-for=" (item , index) in menu" :key="index">
            {{item.name}}
          </a-menu-item>
        </a-menu> 
        </a-layout-sider>-->
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
     
      </a-layout>
         <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import API from "@/api";
export default {
  name: "App",
  data() {
    return {
      menu: []
    };
  },
  created() {
    this.loadingMenu();
  },
  methods: {
    loadingMenu() {
      API.menu()
        .then(res => {
          console.log(res);
          this.menu = res;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
.ant-layout-header{
  background-color: transparent;
}
</style>
