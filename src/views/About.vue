<template>
  <div class="about-page">
    <Header :store="store" />
    
    <main class="main-content">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="greeting">Olá, {{ store.nome || 'Viajante' }}!</h1>
          <h2 class="hero-title">Sobre Nós</h2>
          <p class="hero-description">
            Transformamos sonhos em realidade através de experiências de viagem únicas e inesquecíveis.
          </p>
        </div>
      </section>

      <!-- About Content -->
      <section class="about-content">
        <div class="container">
          <div class="content-grid">
            <div class="text-content">
              <h3>Nossa Missão</h3>
              <p>
                Somos uma agência especializada em criar jornadas personalizadas que conectam
                você aos destinos mais incríveis do mundo. Com anos de experiência e paixão
                por viagens, cuidamos de cada detalhe para que sua única preocupação seja
                aproveitar cada momento.
              </p>
              
              <h3>O que Oferecemos</h3>
              <ul class="services-list">
                <li>Roteiros personalizados</li>
                <li>Hospedagem premium</li>
                <li>Guias especializados</li>
                <li>Suporte 24/7</li>
                <li>Experiências exclusivas</li>
              </ul>
            </div>
            
            <div class="stats-content">
              <div class="stat-item">
                <span class="stat-number">5000+</span>
                <span class="stat-label">Clientes Satisfeitos</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Destinos Atendidos</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <h3>Nossa Equipe</h3>
          <p class="section-description">
            Profissionais apaixonados por viagens, prontos para tornar seus sonhos realidade.
          </p>
        </div>
      </section>
    </main>
    
    <Footer :store="store" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { useMainStore } from '../store/mainStore.js'

export default {
  name: 'About',
  components: { 
    Header, 
    Footer 
  },
  setup() {
    const store = useMainStore()
    
    return { 
      store
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 800px;
}

.greeting {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

/* About Content */
.about-content {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.text-content h3 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.text-content h3:first-of-type {
  margin-top: 0;
}

.text-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list li {
  color: #555;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  padding-left: 2rem;
}

.services-list li::before {
  content: '✓';
  color: #28a745;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Stats */
.stats-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  height: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

.stat-item:last-child {
  margin-bottom: 0;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Team Section */
.team-section {
  padding: 4rem 2rem;
  background: white;
  text-align: center;
}

.team-section h3 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .greeting {
    font-size: 1.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .about-content,
  .team-section {
    padding: 2rem 1rem;
  }
}
</style>
