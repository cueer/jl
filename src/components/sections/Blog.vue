<template>
  <section ref="elementRef" class="mb-12 transition-all duration-700"
           :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      过往项目
    </h2>

    <div class="space-y-4">
      <a v-for="(post, index) in profile.blog" :key="index"
         :href="post.link" target="_blank" rel="noopener"
         class="block bg-bg-card rounded-lg p-5 border border-border-custom hover:border-accent transition-colors">
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-text-primary mb-1">{{ post.title }}</h3>
            <p class="text-text-muted text-sm leading-relaxed">{{ post.summary }}</p>
          </div>
          <span class="text-sm text-accent font-mono whitespace-nowrap">{{ post.date }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import profile from '../../data/profile.js'
import { useScrollReveal } from '../../composables/useScrollReveal.js'
const { elementRef, isVisible } = useScrollReveal()
</script>
