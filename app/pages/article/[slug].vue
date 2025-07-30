<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
    <div class="prose max-w-none" v-html="article.content" />
  </div>
</template>

<script setup>
const route = useRoute();

const { article } = await useFetch(`/api/articles/${route.params.slug}`);

if (!article.value) {
  article.value = {
    title: "",
    content: "",
  };
}
</script>
