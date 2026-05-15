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
