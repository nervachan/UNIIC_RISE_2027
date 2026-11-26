import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/event-components', name: 'event-components', component: () => import('@/views/EventComponentsView.vue') },
    { path: '/program', name: 'program', component: () => import('@/views/ProgramView.vue') },
    { path: '/speakers', name: 'speakers', component: () => import('@/views/SpeakersView.vue') },
    { path: '/mentors', name: 'mentors', component: () => import('@/views/MentorsView.vue') },
    { path: '/partners', name: 'partners', component: () => import('@/views/PartnersView.vue') },
    { path: '/awards', name: 'awards', component: () => import('@/views/AwardsView.vue') },
    { path: '/innovation-crawl', name: 'innovation-crawl', component: () => import('@/views/InnovationCrawlView.vue') },
    { path: '/venue-travel', name: 'venue-travel', component: () => import('@/views/VenueTravelView.vue') },
    { path: '/announcements', name: 'announcements', component: () => import('@/views/AnnouncementsView.vue') },
    { path: '/announcements/:slug', name: 'announcement-detail', component: () => import('@/views/AnnouncementDetailView.vue') },
    { path: '/register', name: 'register', component: () => import('@/views/RegisterView.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
  ],
  scrollBehavior() { return { top: 0 } },
})

export default router
