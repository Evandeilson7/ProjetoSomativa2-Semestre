<template>
  <footer>
    <p>© 2025 Agência de Viagem. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer', // O nome do componente
  props: {        // As propriedades esperadas pelo componente
    store: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #eee;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
