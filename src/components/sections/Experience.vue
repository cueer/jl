<template>
  <section ref="elementRef" class="mb-12 transition-all duration-700"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      工作经历
    </h2>

    <div class="relative border-l-2 border-border-custom ml-3 pl-8 space-y-8">
      <div v-for="(job, index) in profile.experience" :key="index"
           class="relative">
        <div class="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary"></div>
        <div class="bg-bg-card rounded-lg p-5 border border-border-custom hover:border-accent transition-colors">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 class="text-lg font-semibold text-text-primary">{{ job.role }}</h3>
            <span class="text-sm text-accent font-mono">{{ job.period }}</span>
          </div>
          <p class="text-text-muted font-medium mb-2">{{ job.company }}</p>
          <p class="text-text-muted text-sm leading-relaxed">{{ job.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '../../data/profile.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
const { elementRef, isVisible } = useScrollReveal()
</script>
