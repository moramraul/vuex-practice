<template>
    <button @click="incr">Add 1</button>
    <button @click="inc({value: 33})">Add 33</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
       // addOne() {
       //     this.$store.dispatch('increment')
       // }
      // ...mapActions(['increment', 'increase'])
      ...mapActions({
        inc: 'increase',
        incr: 'increment'
      })
    }
}
</script>
