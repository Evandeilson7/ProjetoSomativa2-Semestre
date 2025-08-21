<template>
  <header>
    <h1>Agência de Viagem</h1>
    <nav>
      <a href="/">Início</a> |
      <a href="/about">Sobre</a> |
      <a href="/services">Serviços</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header', // O nome do componente
  props: {        // As propriedades esperadas pelo componente
    store: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
header {
  background-color: #eee;
  padding: 1rem;
  text-align: center;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
