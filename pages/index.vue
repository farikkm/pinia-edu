<template>
  <div class="page">
    <h2 class="movie__title mt-4 text-3xl text-center">All movies</h2>

    <div class="movies">
      <Movie v-for="movie in movieStore.movies" :movie="movie" :key="movie.id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from "~/store";

const movieStore = useMovieStore()
</script>

<style scoped></style>