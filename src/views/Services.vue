<template>
 <Header :store="store" />
  <section>
    <h2>Nossos Serviços</h2>
    <h1>Olá , {{ store.nome }}</h1>
    <ul>
      <li>Pacotes de viagens personalizados</li>
      <li>Suporte 24h durante a viagem</li>
      <li>Reservas de hotéis e passeios</li>
    </ul>
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
  name: 'Services',
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


