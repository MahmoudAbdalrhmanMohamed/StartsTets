<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
          <NuxtImg
            src="/images/logo.png"
            alt="أثاث شاهين"
            width="120"
            height="80"
            format="webp"
            loading="eager"
            fetch-priority="high"
            quality="90"
            preload
            placeholder
            fit="cover"
            class="h-10 w-auto"
          />
        </NuxtLink>
      </div>

      <nav class="hidden md:flex gap-4 space-x-reverse">
        <NuxtLink to="/" class="text-gray-800 hover:text-primary"
          >الرئيسية</NuxtLink
        >
        <NuxtLink
          :to="`/articles/page/${'1'}`"
          class="text-gray-800 hover:text-primary"
          >المقالات</NuxtLink
        >
        <NuxtLink to="/about-us" class="text-gray-800 hover:text-primary"
          >من نحن</NuxtLink
        >
        <NuxtLink to="/contact-us" class="text-gray-800 hover:text-primary"
          >اتصل بنا</NuxtLink
        >
      </nav>

      <div class="flex items-center gap-4">
        <SearchModal />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  color: #d4a762;
  font-weight: bold;
}
</style>
