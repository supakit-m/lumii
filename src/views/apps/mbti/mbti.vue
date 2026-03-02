<template>
  <div class="relative flex flex-col bg-bg-primary h-full">
    <div
      class="relative w-full h-screen overflow-hidden max-w-125 max-h-250 mx-auto my-auto bg-[#3f4449] shadow-2xl border-x border-slate-800"
    >
      <div
        v-if="currentPage !== 'home'"
        class="p-4 flex justify-between items-center sticky top-0 z-60"
      >
        <button
          @click="navigateTo('home')"
          class="hover:scale-110 transition-transform active:scale-95"
        >
          <img
            src="/mbti/icons/home.png"
            alt="home"
            class="w-12 h-12 object-contain drop-shadow-md"
          />
        </button>

        <!-- <button
          @click="navigateTo('home')"
          class="hover:scale-110 transition-transform active:scale-95"
        >
          <img
            src="/mbti/icons/profile.png"
            alt="profile"
            class="w-12 h-12 object-contain drop-shadow-md"
          />
        </button> -->
      </div>

      <div class="absolute inset-0 z-0">
        <img src="/mbti/bg/sky.png" class="w-full h-full object-cover" />
        <div
          v-for="star in stars"
          :key="star.id"
          class="absolute bg-white rounded-full opacity-0 animate-twinkle"
          :style="{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }"
        ></div>
      </div>

      <transition
        enter-active-class="transition-all duration-[1200ms] ease-out"
        enter-from-class="translate-y-full"
      >
        <img
          v-if="seq.mountain2"
          src="/mbti/bg/mountain2.png"
          class="absolute bottom-0 left-0 w-[120%] z-30"
        />
      </transition>

      <transition
        enter-active-class="transition-all duration-[1200ms] ease-out"
        enter-from-class="translate-y-full"
      >
        <img
          v-if="seq.mountain1"
          src="/mbti/bg/mountain1.png"
          class="absolute bottom-9 right-0 w-[120%] z-20"
        />
      </transition>

      <transition
        enter-active-class="transition-all duration-[2000ms] ease-out"
        enter-from-class="translate-y-full opacity-0"
      >
        <div
          v-if="seq.cloud"
          class="absolute z-40 animate-float-cloud transition-all duration-2000 ease-in-out"
          :class="cloudPositionClass"
        >
          <img
            src="/mbti/bg/cloud.png"
            class="w-full h-auto scale-110 opacity-80"
          />
        </div>
      </transition>

      <transition
        enter-active-class="transition-all duration-[2000ms] ease-out"
        enter-from-class="translate-y-[800px] scale-50 opacity-0"
      >
        <div
          v-if="seq.moon"
          class="absolute z-10 transition-all duration-2000 ease-in-out"
          :class="moonPositionClass"
        >
          <img
            src="/mbti/bg/moon.png"
            class="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          />
        </div>
      </transition>

      <div class="absolute inset-0 z-50 overflow-hidden">
        <transition
          name="fade-page"
          mode="out-in"
          @before-leave="isTransitioning = true"
          @after-enter="isTransitioning = false"
        >
          <component
            :is="currentViewComponent"
            :key="currentPage"
            class="h-full w-full"
            @change-page="navigateTo"
            @select-mbti="viewDetail"
            @update-title="headerTitle = $event"
            :selected-type="selectedType"
          />
        </transition>
      </div>

      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-500 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0 scale-100"
      >
        <div
          v-if="currentPage !== 'home'"
          class="absolute flex justify-center items-center p-5 bg-white transition-all duration-1000 ease-in-out"
          :class="labelPositionClass"
        >
          <h2 class="text-black uppercase tracking-widest whitespace-pre-line text-center">
            {{ headerTitle }}
          </h2>
        </div>
      </transition>
      <div class="min-h-screen flex flex-col justify-end pb-10">
        <div
          v-if="currentPage == 'detail'"
          class="p-4 flex justify-start items-center sticky bottom-0 z-60"
        >
          <button
            @click="navigateTo('list')"
            class="hover:scale-110 transition-transform active:scale-95"
          >
            <img
              src="/mbti/icons/undo.png"
              alt="list"
              class="w-12 h-12 object-contain drop-shadow-md"
            />
          </button>
        </div>
      </div>
      <p
        class="absolute bottom-0 pb-3 text-white/70 text-xs italic font-irish text-center w-full z-70"
      >
        A calm night is perfect for self-reflection 🌙
      </p>
    </div>
  </div>
</template>

<script>
import HomeContent from "@/components/mbti/HomeContent.vue";
import ListContent from "@/components/mbti/ListContent.vue";
import DetailContent from "@/components/mbti/DetailContent.vue";
import QuizContent from "@/components/mbti/QuizContent.vue";

export default {
  components: { HomeContent, ListContent, DetailContent, QuizContent },
  data() {
    return {
      currentPage: "home",
      selectedType: null,
      stars: [],
      headerTitle: "16 Personalities",
      // สร้าง Sequence State เพื่อคุมการเล่นทีละอย่าง
      seq: {
        mountain2: false,
        mountain1: false,
        cloud: false,
        moon: false,
        content: false,
      },
    };
  },
  computed: {
    currentViewComponent() {
      if (this.currentPage === "home") return "HomeContent";
      if (this.currentPage === "list") return "ListContent";
      if (this.currentPage === "detail") return "DetailContent";
      if (this.currentPage === "quiz") return "QuizContent";
      return "HomeContent";
    },
    labelPositionClass() {
      if (this.currentPage === "home")
        return "w-full bottom-[20%] z-80 text-2xl font-bold font-irish";
      if (this.currentPage === "list")
        return "w-full bottom-[63%] z-80 text-2xl font-bold font-irish";
      if (this.currentPage === "detail")
        return "w-full bottom-[35%] z-80 text-2xl font-bold font-bold";
      if (this.currentPage === "quiz")
        return "w-full top-[54%]  z-80 text-xl font-bold ";
      return "";
    },
    moonPositionClass() {
      if (this.currentPage === "home")
        return "top-[10%] left-1/2 -translate-x-1/2 w-60 opacity-100 scale-100";
      if (this.currentPage === "list")
        return "top-[7%] left-[5%] w-32 opacity-100 scale-120";
      if (this.currentPage === "detail")
        return "top-[8%] left-1/2 -translate-x-1/2 w-84 opacity-100 ";
      if (this.currentPage === "quiz")
        return "top-[7%] right-[5%] w-40 opacity-100 scale-120";
      return "";
    },
    cloudPositionClass() {
      if (this.currentPage === "home") return "bottom-[20%] w-full";
      if (this.currentPage === "list") return "bottom-[72%] w-[120%]";
      if (this.currentPage === "detail") return "bottom-[50%] w-full";
      if (this.currentPage === "quiz") return "bottom-[20%] w-full";
      return "";
    },
  },
  methods: {
    generateStars() {
      this.stars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1 + "px",
        duration: Math.random() * 5 + 2 + "s",
        delay: Math.random() * 5 + "s",
      }));
    },
    runEntranceSequence() {
      // ลำดับที่ 1: Mountain 2
      setTimeout(() => {
        this.seq.mountain2 = true;
      }, 100);

      // ลำดับที่ 2: Mountain 1 (มาหลังจากชิ้นแรกนิดนึง)
      setTimeout(() => {
        this.seq.mountain1 = true;
      }, 500);

      // ลำดับที่ 3: เมฆ
      setTimeout(() => {
        this.seq.cloud = true;
      }, 900);

      // ลำดับที่ 4: พระจันทร์
      setTimeout(() => {
        this.seq.moon = true;
      }, 1400);

      // ลำดับที่ 5: เนื้อหา Fade ขึ้นมา
      setTimeout(() => {
        this.seq.content = true;
      }, 2200);
    },
    navigateTo(page) {
      this.currentPage = page;
      if (page === "list") this.headerTitle = "16 Personalities";
    },
    viewDetail(type) {
      this.selectedType = type;
      this.currentPage = "detail";
      this.headerTitle = type;
    },
  },
  mounted() {
    this.generateStars();
    this.runEntranceSequence();
  },
};
</script>

<style>
/* CSS เหมือนเดิมของคุณ */
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}
@keyframes floatHorizontal {
  0%,
  100% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
}
.animate-twinkle {
  animation: twinkle infinite ease-in-out;
}
.animate-float-cloud {
  animation: floatHorizontal 6s infinite ease-out;
}

.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 1s ease;
}
.fade-page-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-page-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.font-custom-serif {
  font-family:
    ui-serif, Georgia, Cambria, "Times New Roman", Times, serif, "Sarabun",
    sans-serif;
}
</style>
