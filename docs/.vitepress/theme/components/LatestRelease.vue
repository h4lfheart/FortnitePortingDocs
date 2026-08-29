<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  owner?: string
  repo?: string
}

const props = withDefaults(defineProps<Props>(), {
  owner: 'h4lfheart',
  repo: 'FortnitePorting'
})

const tag = ref<string | null>(null)
const url = `https://github.com/${props.owner}/${props.repo}/releases/latest`

onMounted(async () => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${props.owner}/${props.repo}/releases/latest`
    )
    if (!res.ok) return
    const data = await res.json()
    if (typeof data.tag_name === 'string') {
      tag.value = data.tag_name
    }
  } catch {

  }
})
</script>

<template>
  <a :href="url" target="_blank" rel="noreferrer">{{ tag ?? 'latest release' }}</a>
</template>
