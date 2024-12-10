<script>
import { socket } from '@/socket'

export default {
  name: 'HomeView',
  data() {
    return {
      message: null
    }
  },
  methods: {
    send() {
      socket.emit('message', this.message)
      console.log('Data sended: ' + this.message)
    }
  }
}
</script>

<template>
  <div class="home">
    <input type="text" v-model="message">
    <button class="btn" @click="send">Click</button>
  </div>
</template>
