<template>
  <div
    class="flex flex-col z-50 overflow-hidden absolute bottom-0 pb-10 h-full w-full"
  >
    <transition name="slide-fade" mode="out-in">
      <div v-if="currentQuestion" :key="currentIndex" class="">
        <div class="w-full max-w-95  mx-auto mt-10">
          <div
            class="relative w-full aspect-5/6 overflow-hidden rounded-4xl shadow-2xl border-x-2 border-white/30"
          >
            <img
              :src="currentQuestion.image || '/mbti/bg/moon.png'"
              class="absolute inset-0 w-full h-full object-cover z-10"
              alt="quiz-image"
            />

            <div
              class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-20"
            ></div>
          </div>
        </div>

        <div
          class="relative p-5 h-full w-full flex flex-col items-center top-0"
        >
          <div
            class="bg-white/20 border border-white/40 rounded-[2.5rem] p-8 w-full shadow-2xl backdrop-blur-sm"
          >
            <div class="space-y-4 mt-34">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="selectAnswer(option.value)"
                class="w-full py-4 px-6 bg-white border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all rounded-2xl text-slate-700 font-bold shadow-sm active:scale-95 text-lg"
              >
                {{ option.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mbtiQuizzes } from "@/data/mbti/quizData";

export default {
  data() {
    return {
      questions: mbtiQuizzes,
      currentIndex: 0,
      scores: {
        E: 0,
        I: 0,
        N: 0,
        S: 0,
        F: 0,
        T: 0,
        J: 0,
        P: 0,
      },
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
    totalQuestions() {
      return this.questions.length;
    },
  },
  // ใช้ Watcher เพื่อส่งชื่อคำถามขึ้นไปที่ HeaderTitle ตลอดเวลาที่เปลี่ยนข้อ
  watch: {
    currentIndex: {
      handler(newIndex) {
        if (this.questions[newIndex]) {
          this.$emit("update-title", this.questions[newIndex].question);
        }
      },
      immediate: true, // ให้ทำงานทันทีที่โหลด Component
    },
  },
  methods: {
    selectAnswer(value) {
      // เก็บแต้ม
      this.scores[value]++;

      // ตรวจสอบข้อต่อไป
      if (this.currentIndex < this.totalQuestions - 1) {
        this.currentIndex++;
      } else {
        this.finishQuiz();
      }
    },
    finishQuiz() {
      // คำนวณผลลัพธ์
      const result = [
        this.scores.E >= this.scores.I ? "E" : "I",
        this.scores.N >= this.scores.S ? "N" : "S",
        this.scores.F >= this.scores.T ? "F" : "T",
        this.scores.J >= this.scores.P ? "J" : "P",
      ].join("");

      this.$emit("select-mbti", result);
    },
  },
};
</script>

<style scoped>
/* แอนิเมชันตอนเปลี่ยนข้อคำถาม */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

/* ตอนเข้ามา: เลื่อนจากขวามาซ้าย + จางลง */
.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

/* ตอนออกไป: เลื่อนออกไปทางซ้าย + จางลง */
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
