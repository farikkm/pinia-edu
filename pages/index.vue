<script setup lang="ts">
useHead({
  title: 'Main Page | farikk\'s Cinema'
})
import { useMovieStore } from "~/store";

const movieStore = useMovieStore()
</script>

<template>
  <div class="page">
    <div class="tabs mt-3 flex justify-center items-center gap-5">
      <UButton size="xl" color="primary" variant="soft" class="font-bold tracking-wider"
        icon="i-heroicons-heart">Favorite</UButton>
      <UButton color="primary" variant="soft" size="xl" class="font-bold tracking-wider"
        icon="i-heroicons-magnifying-glass">Search</UButton>
    </div>

    <h2 class="title mt-4 text-3xl text-center">All movies</h2>

    <div class="movies">
      <Movie v-for="movie in movieStore.movies" :movie="movie" :key="movie.id" />
    </div>

  </div>
</template>

<style scoped></style>