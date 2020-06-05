<template>
  <div>{{chicken.chicken_name}}</div>
</template>

<script>
export default {
  beforeCreate() {},
  data() {
    return {
      chicken: "",
      timer: null
    };
  },

  mounted() {
    this.loadingChicken();
    this.timer = setInterval(() => {
      this.loadingChicken();
    }, 4000);
  },
  beforeRouterLeave(to, from, next) {
    clearInterval(this.timer);
    next();
  },
  methods: {
    loadingChicken() {
      this.$API
        .chicken()
        .then(res => {
          console.log(res);
          this.chicken = res;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
</style>