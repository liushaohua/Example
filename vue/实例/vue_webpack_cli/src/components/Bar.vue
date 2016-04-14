<template>
  <div class="bar">
    <h1>{{ msg }}</h1>gaga
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>
.bar{
	width:200px;
	height:600px;
	background:red;
}

h1 {
  color: #42b983;
}
</style>
