<template>
  <div class="chat">
    <div class="chat__list">
      <div
          v-for="item in messages"
          :key="item.id"
          class="chat__item"
          :class="`chat__item__${item.name}`"
      >
        <div class="chat__avatar">
          <i :class="item.name === 'chat' ? 'bi bi-chat-text' : 'bi bi-person'"></i>
        </div>

        <div class="chat__text">
          <div class="chat__name">{{ item.name }}</div>
          <div class="chat__message">{{ item.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: Array
})
</script>

<style scoped lang="scss">
.chat {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  * {
    scrollbar-width: auto;
    scrollbar-color: rgb(66, 11, 240) transparent;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
  }

  &__item {
    display: grid;
    gap: 20px;
    border-radius: 15px;
    padding: 10px;
    background-color: #e7e7e70d;
    max-width: 50%;

    &__user{
      grid-template-areas: 'text avatar';
      grid-template-columns: auto 40px;
      align-self: flex-end;

      .chat__name{
        text-align: end;
      }
    }

    &__chat{
      grid-template-areas: 'avatar text';
      grid-template-columns: 40px auto;
      align-self: flex-start;
    }
  }

  &__avatar{
    display: grid;
    place-items: center;
    border-radius: 50%;
    grid-area: avatar;
    width: 100%;
    aspect-ratio: 1/1;

    border: 1px solid #606060;
    background-color: rgba(76, 76, 76, 0.6196078431);
    color: #f2f2f2;
  }

  &__text{
    grid-area: text;
  }

  &__name {
    font-weight: bold;
  }

  &__message {
    margin-top: 5px;
  }
}
</style>