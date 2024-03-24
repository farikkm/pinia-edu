import type {IMovie} from '@/interfaces'

type typeMovies = {
  movies: IMovie[]
  activeTabs: number,
  loader: boolean
}

export const useMovieStore = defineStore('movieStore', {
  state: (): typeMovies => ({
    movies: [],
    activeTabs: 1, 
    loader: true
  }),
  actions: {
    setActiveTabs(id: number): void {
      this.activeTabs = id
    },
    toggleWatched(id: number): void {
      const idx = this.movies.findIndex(item => item.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },
    deleteMovie(id: number): void {
      this.movies = this.movies.filter(item => item.id !== id)
    }
  },
  getters: {
    watchedMovies: (state: typeMovies): IMovie[] => {
      return state.movies.filter(item => item?.isWatched)
    },
    totalMoviesCount: (state: typeMovies): number => {
      return state.movies.length
    }
  },
})