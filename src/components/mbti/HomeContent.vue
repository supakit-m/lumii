<template>
  <div class="flex flex-col items-center justify-center h-full pt-10">
    <h1 class="text-white text-4xl font-irish mb-8 drop-shadow-lg">Let's go</h1>
    <div class="bg-white/20 backdrop-blur-md p-6 rounded-3xl border border-white/30 w-[80%] space-y-4">
      <button @click="$emit('change-page', 'quiz')" class="w-full py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
        Start test!
      </button>
      <button @click="$emit('change-page', 'list')" class="w-full py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
        16 Personalities
      </button>
      <!-- <button class="w-full py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
        My Profile
      </button> -->
    </div>
  </div>
</template>