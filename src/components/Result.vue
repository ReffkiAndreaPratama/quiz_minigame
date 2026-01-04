<script setup lang="ts">
defineProps<{
  score: number
  total: number
  accuracy: number
  best: number
}>()

const emit = defineEmits<{
  (e: "restart"): void
  (e: "review"): void
}>()
</script>

<template>
  <div class="card">
    <h2>Quiz Selesai 🎉</h2>

    <p>Skor: {{ score }} / {{ total }}</p>
    <p>Akurasi: {{ accuracy }}%</p>
    <p>🏆 Best Score: {{ best }}</p>

    <button @click="emit('review')">Review Jawaban</button>
    <button @click="emit('restart')">Main Lagi</button>
  </div>
</template>
