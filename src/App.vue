<template>
  <div class="container grok">
    <Chat :messages="messages"/>
    <Form :messages="messages"/>
  </div>
</template>

<script setup>
import { reactive} from "vue";

import Chat from "./components/Chat.vue";
import Form from "./components/Form.vue";

const messages = reactive([]);
</script>

<style scoped>
.grok {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  padding: 40px 0 20px;
  gap: 20px;
}
@media (min-width: 1200px) {
  .container{
    max-width: 960px;
  }
}
</style>
