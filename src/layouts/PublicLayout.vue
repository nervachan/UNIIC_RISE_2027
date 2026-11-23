<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight, CalendarDays, MapPin, Mail, Instagram, Linkedin } from 'lucide-vue-next'

const route = useRoute()
const mobileOpen = ref(false)
const nav: Array<[string, string]> = [
  ['About', '/about'], ['Event Components', '/event-components'], ['Program', '/program'],
  ['Submissions', '/submissions'], ['People', '/speakers'], ['Innovation Crawl', '/innovation-crawl'],
  ['Announcements', '/announcements'], ['Contact', '/contact']
]
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/" aria-label="UNIIC RISE 2027 home">
        <span class="brand-mark"><span>R</span></span>
        <span class="brand-copy"><strong>UNIIC RISE</strong><small>2027</small></span>
      </RouterLink>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <RouterLink v-for="item in nav" :key="item[1]" :to="item[1]" :class="{ active: route.path.startsWith(item[1]) }">{{ item[0] }}</RouterLink>
      </nav>
      <RouterLink class="nav-cta" to="/register">Register <ArrowUpRight :size="15" /></RouterLink>
      <button class="menu-button" :aria-label="mobileOpen ? 'Close menu' : 'Open menu'" @click="mobileOpen = !mobileOpen">
        <X v-if="mobileOpen" /><Menu v-else />
      </button>
    </header>

    <nav v-if="mobileOpen" class="mobile-nav" aria-label="Mobile navigation">
      <RouterLink v-for="item in nav" :key="item[1]" :to="item[1]" @click="mobileOpen=false">{{ item[0] }}</RouterLink>
      <RouterLink class="nav-cta mobile" to="/register" @click="mobileOpen=false">Register Now <ArrowUpRight :size="16" /></RouterLink>
    </nav>

    <main><RouterView /></main>

    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <RouterLink class="brand footer-logo" to="/"><span class="brand-mark"><span>R</span></span><span class="brand-copy"><strong>UNIIC RISE</strong><small>2027</small></span></RouterLink>
          <p>From Research to Venture: Co-Creating Scalable Solutions for Sustainable Impact.</p>
          <div class="socials"><a href="#" aria-label="Instagram"><Instagram :size="18" /></a><a href="#" aria-label="LinkedIn"><Linkedin :size="18" /></a><a href="mailto:rise2027@uniic.org" aria-label="Email"><Mail :size="18" /></a></div>
        </div>
        <div><h3>Explore</h3><RouterLink to="/about">About the Summit</RouterLink><RouterLink to="/event-components">Event Components</RouterLink><RouterLink to="/program">Program</RouterLink><RouterLink to="/awards">Awards</RouterLink></div>
        <div><h3>Participate</h3><RouterLink to="/register">Register</RouterLink><RouterLink to="/submissions/research">Submit Research</RouterLink><RouterLink to="/submissions/startup">Join Startup Pitch</RouterLink><RouterLink to="/venue-travel">Venue & Travel</RouterLink></div>
        <div><h3>Event</h3><p class="footer-line"><CalendarDays :size="17" /> April 26–28, 2027</p><p class="footer-line"><MapPin :size="17" /> Manila & Baguio City</p><p class="footer-line"><Mail :size="17" /> rise2027@uniic.org</p></div>
      </div>
      <div class="footer-bottom"><span>© 2027 UNIIC RISE. All rights reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div></div>
    </footer>
  </div>
</template>
