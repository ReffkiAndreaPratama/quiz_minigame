<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { questions as allQ, Difficulty } from "./data/questions"
import QuestionCard from "./components/QuestionCard.vue"
import Result from "./components/Result.vue"
import Review from "./components/Review.vue"

const difficulty = ref<Difficulty>("easy")
const timeMap = { easy: 15, medium: 10, hard: 5 }

const unlocked = ref<Record<Difficulty, boolean>>({
  easy: true,
  medium: JSON.parse(localStorage.getItem("unlock_medium") || "false"),
  hard: JSON.parse(localStorage.getItem("unlock_hard") || "false")
})

const started = ref(false)
const showResult = ref(false)
const showReview = ref(false)

const quiz = ref<typeof allQ>([])
const current = ref(0)
const score = ref(0)
const selected = ref<number | null>(null)
const locked = ref(false)
const timeLeft = ref(10)
let timer: number

const history = ref<any[]>([])
const best = ref(Number(localStorage.getItem("bestScore") || 0))

const accuracy = computed(() =>
  Math.round((score.value / quiz.value.length) * 100)
)

function startQuiz() {
  quiz.value = allQ
    .filter(q => q.difficulty === difficulty.value)
    .sort(() => Math.random() - 0.5)

  started.value = true
  current.value = 0
  score.value = 0
  history.value = []
  showResult.value = false
  showReview.value = false

  startTimer()
}

function startTimer() {
  clearInterval(timer)
  timeLeft.value = timeMap[difficulty.value]
  locked.value = false
  selected.value = null

  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value === 0) answer(-1)
  }, 1000)
}

function answer(i: number) {
  if (locked.value) return
  locked.value = true
  clearInterval(timer)
  selected.value = i

  const q = quiz.value[current.value]
  history.value.push({
    question: q.question,
    correct: q.options[q.answer],
    selected: i >= 0 ? q.options[i] : "Tidak dijawab"
  })

  if (i === q.answer) score.value++

  setTimeout(() => {
    if (current.value < quiz.value.length - 1) {
      current.value++
      startTimer()
    } else {
      finishQuiz()
    }
  }, 800)
}

function finishQuiz() {
  showResult.value = true

  if (score.value > best.value) {
    best.value = score.value
    localStorage.setItem("bestScore", String(best.value))
  }

  // 🔓 UNLOCK LOGIC
  if (difficulty.value === "easy" && accuracy.value >= 70) {
    unlocked.value.medium = true
    localStorage.setItem("unlock_medium", "true")
  }

  if (difficulty.value === "medium" && accuracy.value >= 70) {
    unlocked.value.hard = true
    localStorage.setItem("unlock_hard", "true")
  }
}

function restart() {
  started.value = false
  showResult.value = false
  showReview.value = false
}
</script>

<template>
  <div class="container">
    <h1>Mini Quiz App</h1>

    <!-- Difficulty Selector -->
    <div v-if="!started" class="difficulty">
      <button @click="difficulty='easy'">Easy</button>
      <button
        :disabled="!unlocked.medium"
        @click="difficulty='medium'"
      >
        Medium 🔒
      </button>
      <button
        :disabled="!unlocked.hard"
        @click="difficulty='hard'"
      >
        Hard 🔒
      </button>

      <button class="start" @click="startQuiz">Mulai</button>
    </div>

    <!-- Quiz -->
    <p v-if="started && !showResult">⏱️ {{ timeLeft }}s</p>

    <QuestionCard
      v-if="started && !showResult"
      :question="quiz[current].question"
      :options="quiz[current].options"
      :answer="quiz[current].answer"
      :selected="selected"
      :locked="locked"
      @answer="answer"
    />

    <Result
      v-if="showResult"
      :score="score"
      :total="quiz.length"
      :accuracy="accuracy"
      :best="best"
      @review="showReview = true"
      @restart="restart"
    />

    <Review v-if="showReview" :history="history" />
  </div>
</template>
