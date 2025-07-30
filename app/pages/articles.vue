<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">جميع المقالات</h1>
    <ul class="space-y-2">
      <li v-for="a in articles" :key="a.slug">
        <NuxtLink
          :to="`/article/${a.slug}`"
          class="text-blue-700 hover:underline"
          >{{ a.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const articles = await useFetch("/api/articles");
</script>
