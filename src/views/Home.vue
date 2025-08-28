
<template>
  <Header :store="store" />
  <section 
    class="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative bg-cover bg-center"
    :style="`background-image: url(${montImg});`"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 z-0"></div>
  <div class="relative z-10 bg-light bg-opacity-40 p-12 md:p-16 rounded-3xl shadow-3xl flex flex-col items-center animate-fade max-w-2xl w-full">
      <h1 class="font-title text-4xl md:text-5xl text-white mb-6 drop-shadow-2xl text-center tracking-tight">Bem-vindo à <span class='text-accent'>Agência de Viagens</span>!</h1>
      <p class="text-white text-lg md:text-xl mb-8 max-w-xl text-center leading-relaxed drop-shadow-2xl">Descubra destinos incríveis, promoções exclusivas e viva experiências inesquecíveis com a gente. Planeje sua próxima aventura com conforto, segurança e praticidade.</p>
      <button class="px-10 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:bg-secondary hover:text-dark transition-all duration-300 text-lg uppercase tracking-wide animate-bounce200">Ver Ofertas</button>
    </div>
  </section>
  <Footer :store="store" />
</template>

<script>
import { useMainStore } from '../store/mainStore.js'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import montImg from '../assets/mont.jpg'

export default {
  name: 'Home',
  components: { Header, Footer },
  setup() {
    const store = useMainStore()
  return { store, montImg }
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


