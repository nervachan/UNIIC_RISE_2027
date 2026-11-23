<script setup lang="ts">
import { useRoute } from 'vue-router'
const route=useRoute()
</script>
<template><section class="page-hero"><div class="container"><span class="kicker light">ANNOUNCEMENT</span><h1>{{route.params.slug}}</h1></div></section><section class="content-section"><div class="container prose"><p>Full announcement content will be provided through the future content management system.</p></div></section></template>
