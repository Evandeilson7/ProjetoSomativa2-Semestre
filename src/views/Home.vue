<template>
    <Header :store="store" />
  <section>
    <h2>Bem-vindo à nossa agência!</h2>
    <h1>Olá , {{ store.nome }}</h1>
      <div class="cards">
      <div class="card">Destino 1</div>
      <div class="card">Destino 2</div>
      <div class="card">Destino 3</div>
    </div>
  </section>
  <Footer :store="store" />
</template>

 <script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// Importa a função do Pinia para usar o store
import { useMainStore } from '../store/mainStore.js'

export default {
  // Define o nome do componente
  name: 'Home',
  // Declara os componentes que serão usados no template
  components: { Header, Footer },
  // A função setup é onde você cria o store
  setup() {
    // Cria uma instância do store
    const store = useMainStore()
    // Retorna o store para que ele possa ser usado na template
    return { store }
  }
}
</script>


<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
}
.card {
  background-color: #f2f2f2;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 30%;
  text-align: center;
}
</style>


