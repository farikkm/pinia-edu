<script setup lang="ts">
useHead({
  title: 'Search | farikk\'s Cinema'
})

import { useSearch } from "@/store/search";

const searchStore = useSearch()
const getMovies = (input: string) => {
  searchStore.getMovies(input)
  movieInput.value = ''
}

const movieInput = ref('')
</script>

<template>
  <div class="search flex justify-center items-center flex-col">
    <form class="w-full search__form mt-5" @submit.prevent="getMovies(movieInput)">
      <label id="search"
        class="flex justify-center items-center text-2xl mb-2 font-medium text-gray-900 dark:text-white">Search</label>
      <input type="text" placeholder="Movie name..."
        class="search__input bg-gray-800 border text-white border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        v-model="movieInput" />
    </form>

    <Loader v-if="searchStore.loader" class="mt-6" />
    <div v-else>
      <Movie 
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
      />
    </div>
  </div>
</template>

<style scoped></style>