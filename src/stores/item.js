import { defineStore } from 'pinia'
import { socket } from '@/socket'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: [],
  }),

  actions: {
    bindEvents() {
      // sync the list of items upon connection
      socket.on('connect', () => {
        socket.emit('item:list', (res) => {
          this.items = res.data
        })
      })

      // update the store when an item was created
      socket.on('item:created', (item) => {
        this.items.push(item)
      })
    },

    createItem(label) {
      const item = {
        id: Date.now(), // temporary ID for v-for key
        label,
      }
      this.items.push(item)

      socket.emit('item:create', { label }, (res) => {
        item.id = res.data
      })
    },
  },
})
