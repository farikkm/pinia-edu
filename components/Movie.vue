<script setup lang="ts">
// import { useSearch } from "@/store/search";

// const props = defineProps({
//   movie: {
//     type: Object,
//     required: true,
//     default: () => { }
//   },
//   isSearch: {
//     type: Boolean,
//     required: false,
//     default: false
//   }
// })

interface IMovie {
  id: number,
  original_title: string,
  overview: string, 
  poster_path: string,
  release_date: string,
  isWatched: boolean
}

const props = defineProps<{
  movie: IMovie
  isSearch?: boolean
}>()

console.log(props.movie);


const movieStore = useMovieStore()
const searchStore = useSearch()

const watched = (id: number): void => {
  movieStore.toggleWatched(id)
}
const deleteMovie = (id: number): void => {
  movieStore.deleteMovie(id)
}
</script>

<template>
  <div class="movie mt-5">
    <div class="movie__body rounded-xl flex gap-10 items-center p-5 bg-slate-300">

      <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title"
        class="movie__img min-w-40 h-40 rounded-full object-cover" />

      <div class="text-black">
        <h3 class="movie__name text-2xl">
          {{ movie.original_title }}
          <span class="text-sm ps-3">{{ movie.release_date }}</span>
        </h3>
        <p class="movie__overwiew mt-2 opacity-80 text-sm">{{ movie.overview.length > 200 ? `${movie.overview.slice(0,
        200)}..` : movie.overview }}</p>
        <div v-if="!isSearch" class="movie__buttons mt-3">
          <div>
            <span class="text-sm font-bold">Status: </span>
            <UButton class="ml-3" :color="movie.isWatched ? 'primary' : 'amber'" variant="solid"
              @click="watched(movie.id)">
              <span v-if="movie.isWatched">Watched</span>
              <span v-else>Unwatched</span>
            </UButton>
          </div>
          <UButton class="mt-4 px-5 py-2" color="red" text="white" variant="solid" @click="deleteMovie(movie.id)">Delete
          </UButton>
        </div>
        <div v-else>
          <UButton @click="searchStore.addToUserMovies(movie)" class="mt-3 py-1.5 px-7 flex justify-center items-center" color="primary" variant="solid">
            Add
          </UButton>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>