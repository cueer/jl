<template>
  <section ref="elementRef" class="mb-12 transition-all duration-700"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <h2 class="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      关于我
    </h2>
    <p class="text-text-muted leading-relaxed text-base">
      {{ profile.bio }}
    </p>
  </section>
</template>

<script setup>
import profile from '../../data/profile.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
const { elementRef, isVisible } = useScrollReveal()
</script>
