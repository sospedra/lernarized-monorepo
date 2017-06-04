<template>
  <div class="hello">
    <div>
      <h2>Welcome to Vue</h2>
    </div>

    <h3>Public shared module</h3>
    <p>{{ lodash }}</p>

    <h3>Private <code>/core</code> shared module</h3>
    <p>The binary Mayer–Vietoris sequence init sum is</p>
    <h4>1 + 2 + 4 + 8 + 5 = {{ sumN }}</h4>
  </div>
</template>

<script>
import * as _ from 'lodash'
import sumN from 'sumN'

export default {
  name: 'hello',
  data () {
    return {
      lodash: _.toUpper('This is uppercase using lodash'),
      sumN: sumN(1, 2, 4, 8, 5)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
