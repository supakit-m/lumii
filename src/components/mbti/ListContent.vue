<template>
  <div class="flex flex-col overflow-hidden">
    <div class="absolute p-4 grid grid-cols-4 gap-3 bottom-0 pb-10">
      <div
        v-for="type in mbtiTypes"
        :key="type"
        @click="$emit('select-mbti', type)"
        class="bg-white/10 border border-white/20 p-2 rounded-xl text-center cursor-pointer hover:bg-white/30 hover:scale-105 active:scale-95 transition-all group"
      >
        <div class="aspect-square mb-1">
          <img
            :src="`/mbti/character/${type.toLowerCase()}.png`"
            :alt="type"
            class="w-[120%] h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span class="text-white text-[14px] font-bold tracking-wider">{{
          type
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mbtiTypes: [
        "INTJ",
        "INTP",
        "ENTJ",
        "ENTP",
        "INFJ",
        "INFP",
        "ENFJ",
        "ENFP",
        "ISTJ",
        "ISFJ",
        "ESTJ",
        "ESFJ",
        "ISTP",
        "ISFP",
        "ESTP",
        "ESFP",
      ],
    };
  },
  mounted() {
    this.$emit('update-title', '16 Personalities');
  }
};
</script>