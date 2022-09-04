<template>
  <base-container title="Vuex">
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
    <the-counter></the-counter>
    <h3>{{counter}}</h3>
    <favourite-value></favourite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue'
import TheCounter from './components/TheCounter.vue'
import FavouriteValue from './components/FavouriteValue.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavouriteValue
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    addOne() {
      //this.$store.commit('increase', { value: 10})
      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>