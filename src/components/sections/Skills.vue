<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      技能展示
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="skill in profile.skills" :key="skill.name" class="space-y-1">
        <div class="flex justify-between text-sm">
          <span class="text-text-primary">{{ skill.name }}</span>
          <span class="text-accent font-mono">{{ skill.level }}%</span>
        </div>
        <div class="h-2 bg-border-custom rounded-full overflow-hidden">
          <div class="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
               :style="{ width: skill.level + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '../../data/profile.js'
</script>
