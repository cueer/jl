<template>
  <section ref="elementRef" class="mb-12 transition-all duration-700"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      教育背景
    </h2>

    <div class="relative border-l-2 border-border-custom ml-3 pl-8 space-y-6">
      <div v-for="(edu, index) in profile.education" :key="index"
           class="relative">
        <div class="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary"></div>
        <div class="bg-bg-card rounded-lg p-5 border border-border-custom">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 class="text-lg font-semibold text-text-primary">{{ edu.school }}</h3>
            <span class="text-sm text-accent font-mono">{{ edu.period }}</span>
          </div>
          <p class="text-text-muted font-medium">{{ edu.degree }}</p>
          <p v-if="edu.description" class="text-text-muted text-sm mt-2">{{ edu.description }}</p>
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
