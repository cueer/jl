<template>
  <div class="flex min-h-screen bg-bg-primary">
    <Sidebar />
    <div class="flex-1 md:ml-80">
      <MainContent />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script>
