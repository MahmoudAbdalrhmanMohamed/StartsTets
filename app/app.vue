<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: ["overflow-x-hidden"],
  },
});
</script>

<style>
body {
  font-family: "Tajawal", sans-serif;
}
</style>
\
