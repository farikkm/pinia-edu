<script setup lang="ts">
import { onMounted } from "vue";
useHead({
  title: 'Main Page | farikk\'s Cinema'
})

// Store
const movieStore = useMovieStore()

// Get movies from localStorage
setTimeout(() => {
  movieStore.loader = true
  if (typeof window !== 'undefined') {
    const movieInLocalStorage = localStorage.getItem('movies')
    if (movieInLocalStorage && movieStore.movies.length == 0) {
      movieStore.movies = JSON.parse(movieInLocalStorage)
    }
  }
  movieStore.loader = false
}, 700)
</script>

<template>
  <div class="wrapper flex flex-col justify-center items-center">
    <div class="page">
      <!-- Watched movies -->
      <div v-if="movieStore.watchedMovies.length">
        <h2 class="title mt-4 text-3xl text-center">Watched movies</h2>
        <div class="movies-watched">
          <Movie v-for="movie in movieStore.watchedMovies" :movie="movie" :key="movie.id" />
        </div>
      </div>
      <!-- All movies -->
      <div v-if="movieStore.movies">
        <h2 class="title mt-4 text-3xl text-center">All movies - {{ movieStore.totalMoviesCount }}</h2>
        <div class="movies">
          <Movie v-for="movie in movieStore.movies" :movie="movie" :key="movie.id" />
        </div>
      </div>

    </div>
    <Loader class="mt-5" v-if="movieStore.loader" />
  </div>
</template>

<style scoped></style>