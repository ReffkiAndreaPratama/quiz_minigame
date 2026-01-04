<script setup lang="ts">
defineProps<{
  history: {
    question: string
    correct: string
    selected: string
  }[]
}>()
</script>

<template>
  <div class="card">
    <h2>Review Jawaban</h2>

    <div v-for="(h, i) in history" :key="i" class="review">
      <p><strong>{{ i + 1 }}. {{ h.question }}</strong></p>
      <p>Jawaban kamu: {{ h.selected }}</p>
      <p>Jawaban benar: {{ h.correct }}</p>
    </div>
  </div>
</template>
