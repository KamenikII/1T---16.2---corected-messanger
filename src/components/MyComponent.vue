<script>
import { socket } from '@/socket'

export default {
  name: 'MyComponent',

  data() {
    return {
      fooEvents: [],
    }
  },

  mounted() {
    // BAD
    socket.on('foo', (...args) => {
      this.fooEvents.push(args)
    })
  },
}
</script>
