<template>
  <div class="hello">
   <form method="post" @submit.prevent="submit">
                <input name="username" v-model="params.username" />
                <input name="password" v-model="params.password" />
                <input name="open_id"  v-model="params.id" />
                <input type="submit"  value="提交">
        </form>
  </div>
</template>

<script>
import DemoSsi   from '@/ssi/Demo_ssi'
export default {
         ...DemoSsi
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
