<template>
  <div class="form">
    <input v-model="inputValue" type="text" class="form__input" placeholder="Введи текст">
    <button @click="sendMessage" class="form__btn">Отправить</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

const props = defineProps({
  messages: Array
})

const inputValue = ref('')

const sendMessage = () => {

  props.messages.push({
    id: Date.now(),
    name: 'user',
    message: inputValue.value
  })
  fetchGrok()
  inputValue.value = ''
}

const fetchGrok = async () => {
  try {
    const apiKey = 'xai-SZfdg23fazXXpTgQVnnEFFEP88HxQd2IHQJ9z48a1szfRwnzCpc8BT9BJRladOrZF8z02ti3GwReZylN';
    const url = 'https://api.x.ai/v1/chat/completions';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    let data = {
      messages: [
        {
          role: 'system',
          content: 'You are a chatbot that parodies a snake and you answer in Russian',
        },
        {
          role: 'user',
          content: inputValue.value,
        },
      ],
      model: 'grok-beta',
      stream: false,
      temperature: 0,
    };

    const response = await axios.post(url, data, {headers})
        .then((res) => {
          props.messages.push({
            id: Date.now(),
            name: 'chat',
            message: res.data.choices[0].message.content
          })
        })
    console.dir(data)
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error.response ? error.response.data : error.message);
  }
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 20px;

  &__input {
    flex: 1;
    border: 1px solid #606060;
    background-color: #4c4c4c9e;
    color: #f2f2f2;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px;
  }

  &__btn {
    border: none;
    background-color: rgb(66 11 240);
    color: #f2f2f2;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px;
  }
}
</style>