<template>
  <div class="space-y-8">
    <section class="text-center">
      <h1 class="text-3xl font-bold">مرحباً بكم في شاهين للأثاث</h1>
      <p class="mt-2 text-gray-600">أجود أنواع الأثاث بأفضل الأسعار</p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">منتجات مميزة</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="border rounded p-2"
        >
          <img :src="product.image" class="w-full h-40 object-cover" />
          <h3 class="mt-2 text-lg">{{ product.name }}</h3>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">أحدث المقالات</h2>
      <div class="space-y-2">
        <div v-for="article in latestArticles" :key="article.id">
          <NuxtLink
            :to="`/article/${article.slug}`"
            class="text-blue-600 hover:underline"
          >
            {{ article.title }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredProducts = ref([
  { id: 1, name: "كنبة فاخرة", image: "/images/products/sofa.jpg" },
  { id: 2, name: "طاولة طعام", image: "/images/products/table.jpg" },
]);

const latestArticles = ref([
  { id: 1, title: "نصائح لاختيار الأثاث المناسب", slug: "furniture-tips" },
  { id: 2, title: "أحدث صيحات الديكور", slug: "latest-decor-trends" },
]);
</script>
