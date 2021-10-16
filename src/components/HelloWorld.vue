<template>
  <div class="hello">
    <h1>Contador: {{ $store.state.count }} veces, la cuenta es {{ evenOrOdd }}.</h1>
    <button class="btn btn-success" @click="increment">+</button>
    <button class="btn btn-danger" @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "HelloWorld",
  computed: mapGetters([
    'evenOrOdd'
  ]),
  props: {
    msg: String,
  },
  methods: mapActions([
    'increment',
    'decrement'
  ])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
