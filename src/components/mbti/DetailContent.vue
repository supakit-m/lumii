<template>
  <div class="flex flex-col items-center overflow-hidden bottom-0 pb-10">
    <transition>
      <div
        class="absolute z-5 top-[10%] w-75 overflow-hidden rounded-full flex items-center justify-center"
      >
        <img
          v-if="mbtiData.image"
          :src="mbtiData.image"
          :alt="mbtiData.name"
          class="w-full h-full object-cover"
        />
      </div>
    </transition>

    <div
      class="absolute bottom-20 left-0 w-full flex justify-center items-start px-6  z-20"
    >
      <div
        class="bg-white/10 backdrop-contrast-100 rounded-3xl p-8 w-full max-w-sm text-slate-800 ring-1 ring-white/20 shadow-2xl overflow-y-auto max-h-full"
      >
        <h3
          class="font-bold text-center text-white text-lg border-b border-slate-300 pb-2 mt-21"
        >
          {{ mbtiData.group }}
        </h3>

        <ul class="space-y-3 text-base text-white">
          <li class="flex items-start">
            <span class="font-bold min-w-20">• นิสัย:</span>
            <span>{{ mbtiData.traits.personality }}</span>
          </li>
          <li class="flex items-start">
            <span class="font-bold min-w-20">• จุดเด่น:</span>
            <span>{{ mbtiData.traits.strength }}</span>
          </li>
          <li class="flex items-start text-red-300">
            <span class="font-bold min-w-20">• ควรระวัง:</span>
            <span>{{ mbtiData.traits.caution }}</span>
          </li>
          <li class="flex items-start">
            <span class="font-bold min-w-20">• ความรัก:</span>
            <span>{{ mbtiData.traits.love }}</span>
          </li>
          <li class="flex items-start border-t pt-2 mt-2">
            <span class="font-bold min-w-20">• การทำงาน:</span>
            <span class="font-medium">{{ mbtiData.traits.career }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mbtiList } from "@/data/mbti/mbtiData";

export default {
  props: ["selectedType"],
  computed: {
    mbtiData() {
      const type = this.selectedType?.toLowerCase();
      return mbtiList.find((item) => item.id === type) || mbtiList[0];
    },
  },
  mounted() {
    const fullTitle = `${this.mbtiData.name} - ${this.mbtiData.title}`;
    this.$emit("update-title", this.mbtiData.title);
  },
};
</script>
