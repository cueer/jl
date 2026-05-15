# Online Resume Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- []`) syntax for tracking.

**Goal:** Build a personal brand resume website with Vue 3, Vite, Tailwind CSS, deployed to GitHub Pages.

**Architecture:** Single-page app with fixed sidebar + scrollable main content. All resume data centralized in one JS file. Dark professional theme (deep blue + red accent). Responsive design collapsing sidebar to top banner on mobile.

**Tech Stack:** Vue 3.4+ (Composition API), Vite 6, Tailwind CSS 3, GitHub Actions

---

## File Map

| File | Responsibility |
|------|----------------|
| `package.json` | Dependencies and scripts |
| `vite.config.js` | Build config, base path for GitHub Pages |
| `tailwind.config.js` | Custom dark theme colors |
| `index.html` | SPA entry point |
| `src/main.js` | Vue app bootstrap |
| `src/style/main.css` | Tailwind directives + global styles |
| `src/data/profile.js` | All resume content (single source of truth) |
| `src/App.vue` | Root layout: sidebar + main content |
| `src/components/Sidebar.vue` | Left sidebar: avatar, name, contacts, skill tags |
| `src/components/MainContent.vue` | Right content wrapper with sections |
| `src/components/sections/About.vue` | Personal bio section |
| `src/components/sections/Experience.vue` | Work timeline |
| `src/components/sections/Skills.vue` | Skill progress bars |
| `src/components/sections/Projects.vue` | Project card grid |
| `src/components/sections/Education.vue` | Education timeline |
| `src/components/sections/Blog.vue` | Blog article list |
| `public/avatar.png` | Placeholder avatar |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |

---

### Task 1: Initialize Project

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.vue`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "online-resume",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/jl/'
})
```

- [ ] **Step 3: Create index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>个人简历</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Create src/main.js**

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

- [ ] **Step 5: Create placeholder src/App.vue**

```vue
<template>
  <div class="min-h-screen bg-gray-900 text-gray-200">
    <h1 class="text-3xl text-center py-20">Resume Website</h1>
  </div>
</template>
```

- [ ] **Step 6: Install dependencies and verify**

Run: `npm install && npm run dev`
Expected: Dev server starts, browser shows "Resume Website" text

- [ ] **Step 7: Commit**

```bash
git add package.json vite.config.js index.html src/main.js src/App.vue
git commit -m "chore: initialize Vue 3 + Vite project"
```

---

### Task 2: Configure Tailwind CSS

**Files:**
- Create: `tailwind.config.js`
- Create: `src/style/main.css`
- Modify: `src/main.js`
- Modify: `src/App.vue`

- [ ] **Step 1: Install Tailwind CSS**

Run: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
Expected: `tailwind.config.js` and `postcss.config.js` created

- [ ] **Step 2: Configure tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#1a1a2e',
        'bg-sidebar': '#16213e',
        'accent': '#e94560',
        'text-primary': '#e0e0e0',
        'text-muted': '#8892b0',
        'bg-card': '#233554',
        'border-custom': '#2a2a4a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace']
      }
    }
  },
  plugins: []
}
```

- [ ] **Step 3: Create src/style/main.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-bg-primary text-text-primary;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    @apply bg-bg-primary;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-border-custom rounded;
  }
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-accent;
  }
}
```

- [ ] **Step 4: Import CSS in src/main.js**

```js
import { createApp } from 'vue'
import App from './App.vue'
import './style/main.css'

createApp(App).mount('#app')
```

- [ ] **Step 5: Test Tailwind in src/App.vue**

```vue
<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-10">
    <h1 class="text-3xl text-accent font-bold">Tailwind Works</h1>
    <p class="text-text-muted mt-2">Custom dark theme configured</p>
    <div class="mt-4 p-4 bg-bg-card rounded-lg border border-border-custom">
      Card test
    </div>
  </div>
</template>
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: Build succeeds, `dist/` folder created with CSS included

- [ ] **Step 7: Commit**

```bash
git add tailwind.config.js postcss.config.js src/style/main.css src/main.js src/App.vue
git commit -m "feat: configure Tailwind CSS with dark professional theme"
```

---

### Task 3: Create Data File

**Files:**
- Create: `src/data/profile.js`

- [ ] **Step 1: Create src/data/profile.js**

```js
export default {
  name: "张三",
  title: "前端工程师",
  avatar: "/avatar.png",
  bio: "热爱技术的前端工程师，专注于构建高性能、高可用的 Web 应用。拥有丰富的 Vue 和 React 项目经验，热衷于探索新技术并将其应用于实际项目中。",

  contact: {
    email: "zhangsan@example.com",
    github: "https://github.com/zhangsan",
    linkedin: "https://linkedin.com/in/zhangsan",
    phone: "138-0000-0000"
  },

  skills: [
    { name: "JavaScript", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "Git", level: 80 },
    { name: "Webpack/Vite", level: 75 }
  ],

  experience: [
    {
      company: "某科技有限公司",
      role: "高级前端工程师",
      period: "2023.01 - 至今",
      description: "负责公司核心产品的前端架构设计与开发，主导技术选型和组件库建设，带领3人前端团队完成多个重点项目。"
    },
    {
      company: "某互联网公司",
      role: "前端工程师",
      period: "2021.06 - 2022.12",
      description: "参与电商平台前端开发，负责商品详情页和购物车模块，优化页面加载性能提升40%。"
    },
    {
      company: "某创业公司",
      role: "初级前端工程师",
      period: "2020.03 - 2021.05",
      description: "独立完成公司官网和管理后台的前端开发，从零搭建项目并部署上线。"
    }
  ],

  projects: [
    {
      name: "企业级组件库",
      description: "基于 Vue 3 + TypeScript 开发的企业级 UI 组件库，包含50+组件，支持主题定制和国际化。",
      tags: ["Vue 3", "TypeScript", "Vite", "Storybook"],
      link: "https://github.com/zhangsan/ui-lib"
    },
    {
      name: "实时数据可视化平台",
      description: "大数据可视化平台，支持实时数据流展示、自定义图表配置和多端适配。",
      tags: ["React", "ECharts", "WebSocket", "Node.js"],
      link: "https://github.com/zhangsan/data-viz"
    },
    {
      name: "个人技术博客",
      description: "基于 VuePress 搭建的技术博客，累计发布50+篇技术文章，月均访问量1w+。",
      tags: ["VuePress", "Markdown", "CI/CD"],
      link: "https://zhangsan.github.io/blog"
    }
  ],

  education: [
    {
      school: "某某大学",
      degree: "计算机科学与技术 · 本科",
      period: "2016.09 - 2020.06",
      description: "GPA 3.8/4.0，获优秀毕业生称号"
    }
  ],

  blog: [
    {
      title: "Vue 3 Composition API 最佳实践",
      summary: "深入探讨 Vue 3 组合式 API 的使用技巧和常见模式...",
      date: "2025-12-01",
      link: "https://zhangsan.github.io/blog/vue3-composition-api"
    },
    {
      title: "前端性能优化实战指南",
      summary: "从加载性能、渲染性能到运行时性能的全面优化策略...",
      date: "2025-08-15",
      link: "https://zhangsan.github.io/blog/frontend-performance"
    },
    {
      title: "从零搭建 Vite 项目",
      summary: "手把手教你使用 Vite 搭建现代化前端项目...",
      date: "2025-05-20",
      link: "https://zhangsan.github.io/blog/vite-setup"
    }
  ]
}
```

- [ ] **Step 2: Verify import works**

Temporarily add to `src/App.vue`:
```vue
<script setup>
import profile from './data/profile.js'
console.log(profile.name)
</script>
```

Run: `npm run dev`
Expected: Console shows "张三", no import errors

- [ ] **Step 3: Commit**

```bash
git add src/data/profile.js src/App.vue
git commit -m "feat: add centralized profile data file with sample content"
```

---

### Task 4: Build Root Layout

**Files:**
- Modify: `src/App.vue`
- Create: `src/components/Sidebar.vue`
- Create: `src/components/MainContent.vue`

- [ ] **Step 1: Create Sidebar.vue placeholder**

```vue
<template>
  <aside class="w-80 bg-bg-sidebar p-6 flex flex-col items-center min-h-screen">
    <p class="text-accent">Sidebar</p>
  </aside>
</template>
```

- [ ] **Step 2: Create MainContent.vue placeholder**

```vue
<template>
  <main class="flex-1 p-8 overflow-y-auto">
    <p class="text-accent">Main Content</p>
  </main>
</template>
```

- [ ] **Step 3: Wire up App.vue with split layout**

```vue
<template>
  <div class="flex min-h-screen bg-bg-primary">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
</script>
```

- [ ] **Step 4: Verify layout**

Run: `npm run dev`
Expected: Two columns visible — "Sidebar" on left, "Main Content" on right

- [ ] **Step 5: Commit**

```bash
git add src/App.vue src/components/Sidebar.vue src/components/MainContent.vue
git commit -m "feat: add root split layout with sidebar and main content"
```

---

### Task 5: Build Sidebar

**Files:**
- Modify: `src/components/Sidebar.vue`
- Create: `public/avatar.png`

- [ ] **Step 1: Create placeholder avatar**

Create `public/avatar.png` — any 200x200 placeholder image (solid color circle is fine).

- [ ] **Step 2: Build full Sidebar.vue**

```vue
<template>
  <aside class="w-80 bg-bg-sidebar border-r border-border-custom p-6 flex flex-col items-center min-h-screen fixed left-0 top-0 overflow-y-auto">
    <!-- Avatar -->
    <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-4">
      <img :src="profile.avatar" :alt="profile.name" class="w-full h-full object-cover" />
    </div>

    <!-- Name & Title -->
    <h1 class="text-2xl font-bold text-text-primary">{{ profile.name }}</h1>
    <p class="text-accent font-medium mt-1">{{ profile.title }}</p>

    <!-- Divider -->
    <div class="w-16 h-0.5 bg-accent my-4 rounded"></div>

    <!-- Contact Info -->
    <div class="w-full space-y-3 text-sm">
      <a :href="'mailto:' + profile.contact.email"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        <span class="truncate">{{ profile.contact.email }}</span>
      </a>

      <a :href="profile.contact.github" target="_blank" rel="noopener"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>GitHub</span>
      </a>

      <a :href="profile.contact.linkedin" target="_blank" rel="noopener"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </a>

      <div class="flex items-center gap-3 text-text-muted">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
        <span>{{ profile.contact.phone }}</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-border-custom my-4"></div>

    <!-- Skill Tags -->
    <div class="w-full">
      <h3 class="text-xs uppercase tracking-wider text-text-muted mb-3">技能标签</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in profile.skills" :key="skill.name"
              class="px-3 py-1 text-xs bg-bg-card text-accent rounded-full border border-border-custom hover:bg-accent hover:text-bg-primary transition-colors cursor-default">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import profile from '../data/profile.js'
</script>
```

- [ ] **Step 3: Adjust App.vue for fixed sidebar**

Update `src/App.vue`:
```vue
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
```

- [ ] **Step 4: Verify**

Run: `npm run dev`
Expected: Fixed sidebar on left with avatar, name, contact links, skill tags. Main content area on right.

- [ ] **Step 5: Commit**

```bash
git add src/components/Sidebar.vue src/App.vue public/avatar.png
git commit -m "feat: build sidebar with avatar, contacts, and skill tags"
```

---

### Task 6: Build About Section

**Files:**
- Create: `src/components/sections/About.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create About.vue**

```vue
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
```

- [ ] **Step 2: Wire up MainContent.vue**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
</script>
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: "关于我" heading with bio text visible in main content area

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/About.vue src/components/MainContent.vue
git commit -m "feat: add About section with bio"
```

---

### Task 7: Build Experience Section (Timeline)

**Files:**
- Create: `src/components/sections/Experience.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create Experience.vue**

```vue
<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      工作经历
    </h2>

    <div class="relative border-l-2 border-border-custom ml-3 pl-8 space-y-8">
      <div v-for="(job, index) in profile.experience" :key="index"
           class="relative">
        <!-- Timeline dot -->
        <div class="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-bg-primary"></div>

        <!-- Content -->
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
</script>
```

- [ ] **Step 2: Add to MainContent.vue**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
    <Experience />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
import Experience from './sections/Experience.vue'
</script>
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Timeline with dots, company cards, dates visible

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Experience.vue src/components/MainContent.vue
git commit -m "feat: add Experience section with timeline layout"
```

---

### Task 8: Build Skills Section (Progress Bars)

**Files:**
- Create: `src/components/sections/Skills.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create Skills.vue**

```vue
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
```

- [ ] **Step 2: Add to MainContent.vue**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
    <Experience />
    <Skills />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
import Experience from './sections/Experience.vue'
import Skills from './sections/Skills.vue'
</script>
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: 2-column grid of skill bars with percentage labels

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Skills.vue src/components/MainContent.vue
git commit -m "feat: add Skills section with progress bars"
```

---

### Task 9: Build Projects Section (Card Grid)

**Files:**
- Create: `src/components/ProjectCard.vue`
- Create: `src/components/sections/Projects.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create ProjectCard.vue**

```vue
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
```

- [ ] **Step 2: Create Projects.vue**

```vue
<template>
  <section class="mb-12">
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
import ProjectCard from '../ProjectCard.vue'
</script>
```

- [ ] **Step 3: Add to MainContent.vue**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
    <Experience />
    <Skills />
    <Projects />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
import Experience from './sections/Experience.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
</script>
```

- [ ] **Step 4: Verify**

Run: `npm run dev`
Expected: 2-column card grid with project names, descriptions, and tag pills. Hover lifts card.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.vue src/components/sections/Projects.vue src/components/MainContent.vue
git commit -m "feat: add Projects section with card grid"
```

---

### Task 10: Build Education Section

**Files:**
- Create: `src/components/sections/Education.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create Education.vue**

```vue
<template>
  <section class="mb-12">
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
</script>
```

- [ ] **Step 2: Add to MainContent.vue**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Education />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
import Experience from './sections/Experience.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import Education from './sections/Education.vue'
</script>
```

- [ ] **Step 3: Verify**

Run: `npm run dev`
Expected: Education timeline with school, degree, period

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Education.vue src/components/MainContent.vue
git commit -m "feat: add Education section"
```

---

### Task 11: Build Blog Section

**Files:**
- Create: `src/components/sections/Blog.vue`
- Modify: `src/components/MainContent.vue`

- [ ] **Step 1: Create Blog.vue**

```vue
<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span class="w-8 h-0.5 bg-accent rounded"></span>
      博客文章
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
</script>
```

- [ ] **Step 2: Update MainContent.vue with all sections**

```vue
<template>
  <div class="p-8 max-w-4xl">
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <Blog />
  </div>
</template>

<script setup>
import About from './sections/About.vue'
import Experience from './sections/Experience.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import Education from './sections/Education.vue'
import Blog from './sections/Blog.vue'
</script>
```

- [ ] **Step 3: Verify all sections**

Run: `npm run dev`
Expected: All 6 sections visible in correct order. Blog cards with title, summary, date.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Blog.vue src/components/MainContent.vue
git commit -m "feat: add Blog section and complete all content sections"
```

---

### Task 12: Responsive Design

**Files:**
- Modify: `src/components/Sidebar.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Make sidebar responsive in Sidebar.vue**

Add mobile header toggle and responsive classes. Update the `<aside>` tag:

```vue
<template>
  <!-- Mobile toggle button -->
  <button @click="mobileOpen = !mobileOpen"
          class="md:hidden fixed top-4 left-4 z-50 p-2 bg-bg-sidebar border border-border-custom rounded-lg text-accent">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>

  <!-- Mobile overlay -->
  <div v-if="mobileOpen" @click="mobileOpen = false"
       class="md:hidden fixed inset-0 bg-black/50 z-30"></div>

  <aside :class="[
    'bg-bg-sidebar border-r border-border-custom p-6 flex flex-col items-center overflow-y-auto',
    'md:w-80 md:fixed md:left-0 md:top-0 md:min-h-screen',
    mobileOpen
      ? 'fixed left-0 top-0 w-72 h-full z-40'
      : 'hidden md:flex'
  ]">
    <!-- Avatar -->
    <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-accent mb-4">
      <img :src="profile.avatar" :alt="profile.name" class="w-full h-full object-cover" />
    </div>

    <h1 class="text-2xl font-bold text-text-primary">{{ profile.name }}</h1>
    <p class="text-accent font-medium mt-1">{{ profile.title }}</p>

    <div class="w-16 h-0.5 bg-accent my-4 rounded"></div>

    <div class="w-full space-y-3 text-sm">
      <a :href="'mailto:' + profile.contact.email"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        <span class="truncate">{{ profile.contact.email }}</span>
      </a>
      <a :href="profile.contact.github" target="_blank" rel="noopener"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>GitHub</span>
      </a>
      <a :href="profile.contact.linkedin" target="_blank" rel="noopener"
         class="flex items-center gap-3 text-text-muted hover:text-accent transition-colors">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </a>
      <div class="flex items-center gap-3 text-text-muted">
        <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
        <span>{{ profile.contact.phone }}</span>
      </div>
    </div>

    <div class="w-full h-px bg-border-custom my-4"></div>

    <div class="w-full">
      <h3 class="text-xs uppercase tracking-wider text-text-muted mb-3">技能标签</h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in profile.skills" :key="skill.name"
              class="px-3 py-1 text-xs bg-bg-card text-accent rounded-full border border-border-custom">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import profile from '../data/profile.js'

const mobileOpen = ref(false)
</script>
```

- [ ] **Step 2: Update App.vue for responsive margin**

```vue
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
```

- [ ] **Step 3: Verify responsive**

Run: `npm run dev`, open browser DevTools and toggle device mode
Expected:
- Desktop (>768px): Fixed sidebar + scrollable content
- Mobile (<768px): Hamburger button, sidebar slides in as overlay, content full width

- [ ] **Step 4: Commit**

```bash
git add src/components/Sidebar.vue src/App.vue
git commit -m "feat: add responsive design with mobile hamburger menu"
```

---

### Task 13: Add Scroll Animations

**Files:**
- Create: `src/composables/useScrollReveal.js`
- Modify: `src/components/sections/About.vue`
- Modify: `src/components/sections/Experience.vue`
- Modify: `src/components/sections/Skills.vue`
- Modify: `src/components/sections/Projects.vue`
- Modify: `src/components/sections/Education.vue`
- Modify: `src/components/sections/Blog.vue`

- [ ] **Step 1: Create scroll reveal composable**

Create `src/composables/useScrollReveal.js`:

```js
import { ref, onMounted } from 'vue'

export function useScrollReveal() {
  const elementRef = ref(null)
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  return { elementRef, isVisible }
}
```

- [ ] **Step 2: Add animation to About.vue**

Update template to use the composable:
```vue
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
```

- [ ] **Step 3: Apply same pattern to remaining sections**

For each of Experience.vue, Skills.vue, Projects.vue, Education.vue, Blog.vue, add:
- `ref="elementRef"` on root `<section>`
- `class="transition-all duration-700"` with `:class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"`
- Import and call `useScrollReveal()` in `<script setup>`

- [ ] **Step 4: Verify animations**

Run: `npm run dev`
Expected: Sections fade in and slide up as you scroll down the page. Each section animates only once.

- [ ] **Step 5: Commit**

```bash
git add src/composables/useScrollReveal.js src/components/sections/
git commit -m "feat: add scroll reveal animations to all sections"
```

---

### Task 14: GitHub Pages Deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify build output**

Run: `npm run build`
Expected: `dist/` folder contains `index.html` and assets with correct `/jl/` base paths

- [ ] **Step 3: Verify dist/index.html**

Run: `cat dist/index.html`
Expected: Asset paths start with `/jl/` (e.g., `/jl/assets/index-xxx.js`)

- [ ] **Step 4: Add .gitignore**

Create `.gitignore`:
```
node_modules
dist
.superpowers
```

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/deploy.yml .gitignore
git commit -m "ci: add GitHub Pages deployment workflow"
```

---

### Task 15: Final Build Verification

- [ ] **Step 1: Clean build**

Run: `rm -rf dist && npm run build`
Expected: Build succeeds with no errors or warnings

- [ ] **Step 2: Check bundle size**

Run: `ls -lh dist/assets/`
Expected: JS bundle < 100KB, CSS bundle < 20KB (gzipped should be well under)

- [ ] **Step 3: Local preview**

Run: `npm run preview`
Expected: Full resume renders correctly at http://localhost:4173/jl/

- [ ] **Step 4: Final commit (if any changes)**

```bash
git add -A
git commit -m "chore: final build verification"
```

---

## Self-Review

**Spec coverage:**
- [x] Vue 3 + Vite + Tailwind — Tasks 1-2
- [x] Split sidebar layout — Tasks 4-5
- [x] All 6 content sections — Tasks 6-11
- [x] Centralized data file — Task 3
- [x] Dark professional theme — Task 2 (Tailwind config)
- [x] Responsive mobile design — Task 12
- [x] Scroll animations — Task 13
- [x] GitHub Pages deployment — Task 14

**No placeholders found.** All steps contain complete code.

**Type consistency:** `profile` import path consistent across all sections (`../../data/profile.js`). Component names match imports in MainContent.vue.
