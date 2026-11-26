<script setup lang="ts">
import { partners } from '../data/partners'
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="kicker light">INSTITUTIONAL PARTNERS</span>
      <h1>Built through collaboration.</h1>
      <p>Meet the universities and organizations working together to advance innovation and sustainable impact.</p>
    </div>
  </section>
  <section class="content-section partners-section">
    <div class="container partner-grid">
      <article v-for="partner in partners" :key="partner.name" class="partner-card">
        <img :src="partner.logo" :alt="`${partner.name} logo`" />
        <h2>{{ partner.name }}</h2>
      </article>
    </div>
  </section>
</template>
