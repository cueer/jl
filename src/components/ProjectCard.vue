<template>
  <a :href="project.link" target="_blank" rel="noopener"
     class="block bg-bg-card rounded-lg p-5 border border-border-custom hover:border-accent hover:-translate-y-1 transition-all duration-300">
    <h3 class="text-lg font-semibold text-text-primary mb-2">{{ project.name }}</h3>
    <p class="text-text-muted text-sm leading-relaxed mb-3">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="tag in project.tags" :key="tag"
            class="px-2 py-0.5 text-xs bg-bg-primary text-accent rounded border border-border-custom">
        {{ tag }}
      </span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
