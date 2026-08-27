<script setup lang="ts">
interface Props {
  text?: string
  type?: 'green' | 'yellow' | 'red' | 'purple' | 'gray'
}

withDefaults(defineProps<Props>(), {
  type: 'green'
})
</script>

<template>
  <span class="FPBadge" :class="type">
    <slot>{{ text }}</slot>
  </span>
</template>

<style>
.FPBadge {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  transform: translateY(-2px);
  vertical-align: middle;
}

.vp-doc h1 > .FPBadge,
.vp-doc h2 > .FPBadge,
.vp-doc h3 > .FPBadge,
.vp-doc h4 > .FPBadge,
.vp-doc h5 > .FPBadge,
.vp-doc h6 > .FPBadge {
  margin: 0 0 0 2px;
  vertical-align: middle;
}

.FPBadge.green {
  color: #16a34a;
  background-color: rgba(22, 163, 74, 0.14);
}

.FPBadge.yellow {
  color: #a16207;
  background-color: rgba(234, 179, 8, 0.16);
}

.FPBadge.red {
  color: #dc2626;
  background-color: rgba(220, 38, 38, 0.14);
}

.FPBadge.purple {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.FPBadge.gray {
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-default-soft);
}

.dark .FPBadge.green {
  color: #4ade80;
  background-color: rgba(74, 222, 128, 0.16);
}

.dark .FPBadge.yellow {
  color: #facc15;
  background-color: rgba(250, 204, 21, 0.16);
}

.dark .FPBadge.red {
  color: #f87171;
  background-color: rgba(248, 113, 113, 0.16);
}
</style>
