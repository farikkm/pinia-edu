<script setup lang="ts">
  const props = defineProps({
    movie: {
      type: Object,
      required: true,
      default: () => {} 
    }
  })
</script>

<template>
  <div class="movie mt-5">
    <div class="movie__body rounded-xl flex gap-10 items-center p-5 bg-slate-300">

      <img 
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" 
        :alt="movie.original_title"
        class="movie__img min-w-40 h-40 rounded-full object-cover"
      />

      <div class="text-black">
        <h3 class="movie__name text-2xl">
          {{ movie.original_title }} 
          <span class="text-sm ps-3">{{ movie.release_date }}</span>
        </h3>
        <p class="movie__overwiew mt-2 opacity-80 text-sm">{{ movie.overview }}</p>
        <div class="movie__buttons mt-3 flex gap-5">
          <button class="movie__watched p-2 bg-green-600 text-white rounded-2xl">
            <span v-if="movie.isWatched">Watched</span>
            <span v-else>Watched</span>
          </button>
          <button class="movie__remove p-2 px-3 bg-red-600 text-white rounded-2xl">Delete</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
</style>