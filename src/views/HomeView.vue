<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowUpRight, Microscope, Trophy, Lightbulb, Users, Presentation, Network, UtensilsCrossed, Route, CalendarDays, MapPin } from 'lucide-vue-next'
import adamsonLogo from '../assets/Adamson_Logo.png'
import dostLogo from '../assets/DOST_logo.webp'
import ucLogo from '../assets/UC_Logo.png'
import { partners } from '../data/partners'

const highlights = [
  { icon: Presentation, title: 'Research-to-Impact Presentations', text: 'Move promising findings toward practical, measurable solutions.', link: '/event-components' },
  { icon: Trophy, title: 'Startup Business Pitching', text: 'Pitch breakthrough ventures to mentors, investors and industry leaders.', link: '/event-components' },
  { icon: Lightbulb, title: 'Ideation Sprint', text: 'Turn research and lived problems into incubation-ready concepts.', link: '/event-components' },
  { icon: Microscope, title: 'Signature Plenary Talks', text: 'Hear two high-level perspectives on innovation and scale.', link: '/event-components' },
  { icon: Network, title: 'Innovation Matchmaking', text: 'Connect research teams with experts, partners and commercialization pathways.', link: '/mentors' },
  { icon: UtensilsCrossed, title: 'Delegation Fellowship', text: 'Build lasting collaborations through a Cordillera-hosted dinner.', link: '/program' },
]
const pipeline = ['Research','Problem validation','Solution','Prototype','Business model','Startup','Incubation','Impact']

const hero = ref<HTMLElement | null>(null)

function moveInnovationLight(event: MouseEvent) {
  if (!hero.value) return
  const bounds = hero.value.getBoundingClientRect()
  hero.value.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  hero.value.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}
</script>

<template>
  <section ref="hero" class="hero" @mousemove="moveInnovationLight">
    <div class="hero-grid"></div>
    <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
    <div class="container hero-inner">
      <div class="hero-copy">
        <div class="eyebrow"><span></span> April 26–28, 2027 · Philippines</div>
        <h1><span>UNIIC</span> RISE 2027</h1>
        <p class="hero-subtitle">Research-to-Startup<br />Impact Summit &amp; Ideation Sprint</p>
        <p class="hero-theme">“From Research to Venture: Co-Creating Scalable Solutions for Sustainable Impact”</p>
        <p class="tagline">Discover. Transform. Venture. Impact.</p>
        <div class="innovation-status"><span class="signal"></span><span>Innovation in motion</span><strong>2027</strong></div>
        <div class="hero-actions"><a class="button primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdsWrFh4gs-pbSWvJy3fJuvEgBxh4pSn588ByAEA3sY0l6_gw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Register Now <ArrowUpRight :size="18" /></a></div>
      </div>
      <div class="hero-visual" aria-label="Innovation journey graphic">
        <div class="core-ring"><div class="core"><span>2027</span><small>RISE</small></div></div>
        <div class="node n1"><Microscope /><span>Research</span></div><div class="node n2"><Lightbulb /><span>Ideate</span></div><div class="node n3"><Trophy /><span>Venture</span></div><div class="node n4"><Users /><span>Impact</span></div>
      </div>
    </div>
    <div class="container hero-meta"><div><CalendarDays /><span><small>Dates</small>APR 26—28, 2027</span></div><div><MapPin /><span><small>Locations</small>Manila &amp; Baguio City</span></div><RouterLink to="/program">Explore the program <ArrowRight /></RouterLink></div>
  </section>

  <section class="section intro">
    <div class="container">
      <div class="section-heading split"><div><span class="kicker">THE SUMMIT</span><h2>Where knowledge meets<br /><em>real-world impact.</em></h2></div><p>UNIIC RISE 2027 brings universities, researchers, innovators, entrepreneurs, government, industry and investors together to transform academic knowledge into practical and scalable solutions.</p></div>
      <div class="pipeline"><div v-for="(step,index) in pipeline" :key="step" class="pipeline-step"><span>{{ String(index+1).padStart(2,'0') }}</span><strong>{{ step }}</strong></div></div>
    </div>
  </section>

  <section class="section highlights-section"><div class="container"><div class="section-heading"><span class="kicker">EXPERIENCE THE SUMMIT</span><h2>Built for discovery.<br />Designed for momentum.</h2></div><div class="highlight-grid"><RouterLink v-for="(item,index) in highlights" :key="item.title" :to="item.link" class="highlight-card"><div class="card-index">0{{ index+1 }}</div><component :is="item.icon" :size="28" /><h3>{{ item.title }}</h3><p>{{ item.text }}</p><span class="card-link">Explore <ArrowUpRight :size="16" /></span></RouterLink></div></div></section>

  <section class="section program-preview"><div class="container"><div class="section-heading split"><div><span class="kicker">THREE DAYS · TWO CITIES</span><h2>The journey ahead.</h2></div><RouterLink class="text-link" to="/program">View full program <ArrowRight /></RouterLink></div><div class="day-grid">
    <article class="day-card featured"><div class="day-number">01</div><span>APRIL 26 · MANILA</span><h3>Connect &amp; Discover</h3><p>Opening ceremony, plenaries, innovation showcase and delegation journey to Baguio.</p><div class="day-venue">Adamson University</div></article>
    <article class="day-card"><div class="day-number">02</div><span>APRIL 27 · BAGUIO</span><h3>Present, Pitch &amp; Connect</h3><p>Research presentations, startup arena, mentorship, exhibits and delegation dinner.</p><div class="day-venue">University of the Cordilleras</div></article>
    <article class="day-card"><div class="day-number">03</div><span>APRIL 28 · HIGHLANDS</span><h3>Experience &amp; Explore</h3><p>Awards, summit closing and the Baguio–Benguet Innovation Crawl.</p><div class="day-venue">Baguio &amp; Benguet</div></article>
  </div></div></section>

  <section class="section hosts"><div class="container"><div class="section-heading"><span class="kicker">HOST INSTITUTIONS</span><h2>One shared vision.</h2></div><div class="host-grid"><article><img class="host-logo" :src="ucLogo" alt="University of the Cordilleras logo" /><div><h3>University of the Cordilleras</h3><p>Baguio City, Philippines</p></div></article><article><img class="host-logo" :src="adamsonLogo" alt="Adamson University logo" /><div><h3>Adamson University</h3><p>Manila, Philippines</p></div></article><article><img class="host-logo" :src="dostLogo" alt="DOST–CAR logo" /><div><h3>DOST–CAR</h3><p>Philippines</p></div></article></div></div></section>

  <section class="section partners-section"><div class="container"><div class="section-heading"><span class="kicker">OUR PARTNERS</span><h2>Innovation across borders.</h2><p>Working together to turn knowledge into sustainable impact.</p></div><div class="partner-grid"><article v-for="partner in partners" :key="partner.name" class="partner-card"><img :src="partner.logo" :alt="`${partner.name} logo`" /><h3>{{ partner.name }}</h3></article></div></div></section>

  <section class="cta-section"><div class="cta-grid"></div><div class="container cta-inner"><span class="kicker light">YOUR NEXT VENTURE STARTS HERE</span><h2>Your research could become<br />the next big innovation.</h2><div><a class="button gold" href="https://docs.google.com/forms/d/e/1FAIpQLSdsWrFh4gs-pbSWvJy3fJuvEgBxh4pSn588ByAEA3sY0l6_gw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Register for the Summit</a></div></div></section>
</template>
