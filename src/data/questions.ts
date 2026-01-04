export type Difficulty = "easy" | "medium" | "hard"

export type Question = {
  question: string
  options: string[]
  answer: number
  category: string
  difficulty: Difficulty
}

export const questions: Question[] = [
  // ===== EASY =====
  {
    question: "Apa kepanjangan dari HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 0,
    category: "frontend",
    difficulty: "easy"
  },
  {
    question: "Fungsi utama CSS adalah?",
    options: [
      "Mengatur logika",
      "Mengatur database",
      "Mengatur tampilan",
      "Mengatur server"
    ],
    answer: 2,
    category: "frontend",
    difficulty: "easy"
  },
  {
    question: "Tag HTML untuk link?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0,
    category: "frontend",
    difficulty: "easy"
  },
  {
    question: "Apa itu JavaScript?",
    options: [
      "Bahasa markup",
      "Bahasa styling",
      "Bahasa pemrograman",
      "Framework"
    ],
    answer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    question: "Apa itu responsive design?",
    options: [
      "Design cepat",
      "Design menyesuaikan layar",
      "Design statis",
      "Design backend"
    ],
    answer: 1,
    category: "frontend",
    difficulty: "easy"
  },

  // ===== MEDIUM =====
  {
    question: "Method array untuk membuat array baru?",
    options: ["forEach", "map", "push", "pop"],
    answer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    question: "Hasil typeof [] adalah?",
    options: ["array", "object", "list", "null"],
    answer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    question: "Apa fungsi localStorage?",
    options: [
      "Simpan data server",
      "Simpan session backend",
      "Simpan data browser",
      "Simpan cache JS"
    ],
    answer: 2,
    category: "javascript",
    difficulty: "medium"
  },
  {
    question: "Reactivity Vue 3 menggunakan?",
    options: ["useState", "ref", "state", "props"],
    answer: 1,
    category: "vue",
    difficulty: "medium"
  },
  {
    question: "Directive Vue untuk looping?",
    options: ["v-if", "v-for", "v-bind", "v-model"],
    answer: 1,
    category: "vue",
    difficulty: "medium"
  },
  {
    question: "Apa kegunaan computed?",
    options: [
      "Event handler",
      "Derived state",
      "State biasa",
      "Async function"
    ],
    answer: 1,
    category: "vue",
    difficulty: "medium"
  },
  {
    question: "Perintah menjalankan Vite dev server?",
    options: ["npm start", "npm dev", "npm run dev", "vite run"],
    answer: 2,
    category: "tooling",
    difficulty: "medium"
  },
  {
    question: "Apa itu SPA?",
    options: [
      "Single Page Application",
      "Server Page App",
      "Static Page App",
      "Simple Program App"
    ],
    answer: 0,
    category: "frontend",
    difficulty: "medium"
  },
  {
    question: "Function lifecycle Vue 3?",
    options: ["mounted", "useEffect", "onMounted", "created"],
    answer: 2,
    category: "vue",
    difficulty: "medium"
  },
  {
    question: "Apa itu props?",
    options: [
      "State internal",
      "Data dari parent",
      "Event handler",
      "CSS"
    ],
    answer: 1,
    category: "frontend",
    difficulty: "medium"
  },

  // ===== HARD =====
  {
    question: "Apa itu TypeScript?",
    options: [
      "Framework JS",
      "Library JS",
      "Superset JavaScript",
      "Compiler CSS"
    ],
    answer: 2,
    category: "typescript",
    difficulty: "hard"
  },
  {
    question: "Keuntungan utama TypeScript?",
    options: [
      "Lebih cepat",
      "Type safety",
      "Lebih sedikit file",
      "Tidak perlu testing"
    ],
    answer: 1,
    category: "typescript",
    difficulty: "hard"
  },
  {
    question: "Keyword array string di TS?",
    options: ["string{}", "string()", "string[]", "ArrayString"],
    answer: 2,
    category: "typescript",
    difficulty: "hard"
  },
  {
    question: "Pinia digunakan untuk?",
    options: [
      "Routing",
      "State management",
      "Styling",
      "HTTP request"
    ],
    answer: 1,
    category: "vue",
    difficulty: "hard"
  },
  {
    question: "Emit di Vue berfungsi untuk?",
    options: [
      "Ubah state",
      "Kirim event ke parent",
      "Render ulang",
      "Validasi form"
    ],
    answer: 1,
    category: "vue",
    difficulty: "hard"
  },
  {
    question: "Apa itu closure?",
    options: [
      "Loop",
      "Function dalam function",
      "Variable global",
      "Async handler"
    ],
    answer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    question: "Apa itu debounce?",
    options: [
      "Delay function",
      "Loop function",
      "Promise handler",
      "State watcher"
    ],
    answer: 0,
    category: "javascript",
    difficulty: "hard"
  },
  {
    question: "Hasil Boolean([])?",
    options: ["true", "false", "null", "undefined"],
    answer: 0,
    category: "javascript",
    difficulty: "hard"
  },
  {
    question: "Apa itu composable di Vue?",
    options: [
      "Reusable logic function",
      "Reusable UI",
      "Plugin",
      "Directive"
    ],
    answer: 0,
    category: "vue",
    difficulty: "hard"
  },
  {
    question: "Tujuan README?",
    options: [
      "Build config",
      "Testing",
      "Dokumentasi project",
      "Deploy app"
    ],
    answer: 2,
    category: "tooling",
    difficulty: "hard"
  }
]
