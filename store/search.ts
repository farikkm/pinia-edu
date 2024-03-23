import type {IMovie} from '@/interfaces'

import { useMovieStore } from "."

const API_KEY = `${import.meta.env.VITE_API_KEY}`
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

interface ISearchStore {
  loader: boolean
  movies: IMovie[],
}

export const useSearch = defineStore('search', {
  state: (): ISearchStore => ({
    loader: false,
    movies: []
  }),
  actions: {
    async getMovies(searchInput: string) {
      this.loader = true
      const res = await fetch(`${URL}&query=${searchInput}`)
      const data = await res.json()
      this.movies = data.results
      this.loader = false
    },
    addToUserMovies(obj: IMovie) {
      const movieStore = useMovieStore()
      movieStore.movies.push({ ...obj, isWatched: false })
      movieStore.activeTabs = 1
      navigateTo('/')
    }
  }
})