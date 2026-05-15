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
