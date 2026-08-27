<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLayout, VPLink } from 'vitepress/theme'

type SidebarItem = {
  text?: string
  link?: string
  items?: SidebarItem[]
}

type SectionGroup = {
  key: string
  text: string
  items: { text: string; link: string }[]
}

const { page } = useData()
const { sidebar } = useLayout()

function pageKey(path: string): string {
  return path
    .replace(/\\/g, '/')
    .replace(/^\//, '')
    .replace(/\.html$/, '')
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')
    .replace(/\/$/, '')
}

const sections = computed(() => {
  const current = pageKey(page.value.relativePath)
  const result: SectionGroup[] = []

  for (const group of sidebar.value as SidebarItem[]) {
    if (!group.text || !group.link) continue

    const key = pageKey(group.link)
    const isCurrent = key === current
    const isNestedSection = key.startsWith(`${current}/`)

    if (!isCurrent && !isNestedSection) continue

    const items = (group.items ?? [])
      .filter((child): child is SidebarItem & { text: string; link: string } =>
        Boolean(child.text && child.link)
      )
      .map((child) => ({ text: child.text, link: child.link }))

    if (isNestedSection && items.length === 0) {
      items.push({ text: 'Overview', link: group.link })
    }

    if (items.length === 0) continue

    result.push({
      key,
      text: group.text,
      items
    })
  }

  return result
})
</script>

<template>
  <div v-if="sections.length" class="section-links">
    <section
      v-for="section in sections"
      :key="section.key"
      class="section-links-group"
    >
      <h2>{{ section.text }}</h2>
      <ul v-if="section.items.length">
        <li v-for="item in section.items" :key="item.link">
          <VPLink :href="item.link">{{ item.text }}</VPLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.section-links {
  margin-top: 1.5rem;
}

.section-links-group + .section-links-group {
  margin-top: 1.5rem;
}

.section-links-group h2 {
  margin-top: 0;
  border-top: none;
  padding-top: 0;
}

.section-links-group ul {
  padding-left: 1.25rem;
}

.section-links-group li + li {
  margin-top: 0.35rem;
}
</style>
