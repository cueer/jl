<template>
  <section class="mb-12">
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
</script>
