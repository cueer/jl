<template>
  <div class="flex min-h-screen bg-bg-primary">
    <Sidebar />
    <div class="ml-80 flex-1">
      <MainContent />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script>
