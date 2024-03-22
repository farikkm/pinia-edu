<template>
  <header class="flex flex-col gap-5 py-3 justify-center items-center">
    <div class="header__body">
      <div class="header__logo flex items-center gap-4">
        <NuxtImg src="/logo.png" alt="logo" width="100px" />
        <span class="text-2xl">farikk's Cinema</span>
      </div>
    </div>

    <div class="tabs flex justify-center items-center gap-5">
      <UButton to="/" size="xl" :color="movieStore.activeTabs === 1 ? 'teal' : 'white'" variant="solid" class="font-bold tracking-wider"
        icon="i-heroicons-heart">Favorite</UButton>
      <UButton to="/search" :color="movieStore.activeTabs === 2 ? 'teal' : 'white'" variant="solid" size="xl" class="font-bold tracking-wider"
        icon="i-heroicons-magnifying-glass">Search</UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
const movieStore = useMovieStore()
</script>

<style scoped>

</style>