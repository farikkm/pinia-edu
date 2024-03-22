<template>
  <header class="flex flex-col gap-5 py-3 justify-center items-center">
    <div class="header__body">
      <div class="header__logo flex items-center gap-4">
        <NuxtImg src="/logo.png" alt="logo" width="100px" />
        <span class="title text-3xl font-bold italic">farikk's Cinema</span>
      </div>
    </div>

    <div class="tabs flex justify-center items-center gap-5">
      <UButton to="/" size="xl" :color="movieStore.activeTabs === 1 ? 'teal' : 'white'" variant="solid"
        class="font-bold tracking-wider" icon="i-heroicons-heart" @click="setTab(1)">Favorite
      </UButton>
      <UButton to="/search" :color="movieStore.activeTabs === 2 ? 'teal' : 'white'" variant="solid" size="xl"
        class="font-bold tracking-wider" icon="i-heroicons-magnifying-glass" @click="setTab(2)">Search
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
const movieStore = useMovieStore()

const setTab = (id: number): void => {
  movieStore.setActiveTabs(id)
}
</script>

<style scoped>
.title {
  font-family: "Comic Neue";
}
</style>