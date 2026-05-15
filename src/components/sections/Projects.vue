<template>
  <section ref="elementRef" class="mb-12 transition-all duration-700"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      项目作品
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard v-for="(project, index) in profile.projects" :key="index"
                   :project="project" />
    </div>
  </section>
</template>

<script setup>
import profile from '../../data/profile.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
import ProjectCard from '../ProjectCard.vue'
const { elementRef, isVisible } = useScrollReveal()
</script>
