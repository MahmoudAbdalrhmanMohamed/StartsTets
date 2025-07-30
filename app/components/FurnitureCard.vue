<template>
  <nuxt-link
    :to="`/article/${slug}`"
    class="bg-white block rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div class="relative block">
      <NuxtImg
        :src="image"
        :alt="title"
        width="400"
        height="192"
        format="webp"
        loading="lazy"
        class="w-full h-48 object-cover"
        fetch-priority="low"
        quality="80"
      />
      <div
        v-if="sale"
        class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs"
      >
        خصم {{ sale }}%
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
      <div class="flex justify-between items-center">
        <div>
          <span v-if="oldPrice" class="text-gray-400 line-through text-sm mr-2"
            >{{ oldPrice }} ر.س</span
          >
          <span class="text-primary font-bold">{{ price }} ر.س</span>
        </div>
        <button
          class="bg-primary text-white p-2 rounded-full hover:bg-primary-dark"
        >
          <Icon name="mdi:cart-plus" size="20" />
        </button>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  price: String,
  oldPrice: String,
  sale: String,
  slug: String,
});
</script>
