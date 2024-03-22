<script setup lang="ts">
useHead({
  title: 'Main Page | farikk\'s Cinema'
})

const movieStore = useMovieStore()
</script>

<template>
  <div class="page">
    <!-- Watched movies -->
    <div v-if="movieStore.watchedMovies.length">
      <h2 class="title mt-4 text-3xl text-center">Watched movies</h2>
      <div class="movies-watched">
        <Movie v-for="movie in movieStore.watchedMovies" :movie="movie" :key="movie.id" />
      </div>
    </div>
    <!-- All movies -->
    <div>
      <h2 class="title mt-4 text-3xl text-center">All movies - {{ movieStore.totalMoviesCount }}</h2>
      <div class="movies">
        <Movie v-for="movie in movieStore.movies" :movie="movie" :key="movie.id" />
      </div>
    </div>

  </div>
</template>

<style scoped></style>