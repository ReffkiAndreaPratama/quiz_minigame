<script setup lang="ts">
const props = defineProps<{
  question: string
  options: string[]
  answer: number
  selected: number | null
  locked: boolean
}>()

const emit = defineEmits<{ (e: "answer", i: number): void }>()

function cls(i: number) {
  if (!props.locked) return "option"
  if (i === props.answer) return "option correct"
  if (i === props.selected) return "option wrong"
  return "option"
}
</script>

<template>
  <div class="card">
    <h2>{{ question }}</h2>

    <button
      v-for="(o, i) in options"
      :key="i"
      :class="cls(i)"
      :disabled="locked"
      @click="emit('answer', i)"
    >
      {{ o }}
    </button>
  </div>
</template>
