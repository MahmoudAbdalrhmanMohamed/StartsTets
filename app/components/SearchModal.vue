<template>
  <div>
    <!-- Search Button -->
    <button
      @click="openModal"
      class="p-1 w-10 h-10 grid place-content-center rounded-full bg-white text-gray-800 shadow hover:shadow-md transition"
    >
      <Icon name="mdi:magnify" size="1.5rem" />
    </button>

    <!-- Search Modal Overlay -->
    <transition name="fade">
      <div
        v-if="isOpen"
        @click="handleClickOutside"
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-start pt-24 px-4"
      >
        <!-- Modal Box -->
        <div
          ref="modalContent"
          class="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fadeIn"
        >
          <!-- Input Section -->
          <div class="relative">
            <input
              v-model="searchQuery"
              @input="performSearch"
              type="text"
              placeholder="ابحث عن منتجات أو مقالات..."
              class="w-full px-6 py-4 text-lg border-b focus:outline-none focus:ring-2 focus:ring-primary rounded-t-xl"
              ref="searchInput"
            />
            <button
              @click="closeModal"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
            >
              <Icon name="mdi:close" size="24" />
            </button>
          </div>

          <!-- Results List -->
          <div
            v-if="searchResults.length > 0"
            class="max-h-96 overflow-y-auto divide-y"
          >
            <NuxtLink
              v-for="result in searchResults"
              :key="result.id"
              :to="
                result.type === 'product'
                  ? `/articles#${result.id}`
                  : `/article/${result.id}`
              "
              @click="closeModal"
              class="flex items-center gap-4 p-4 hover:bg-gray-50 transition cursor-pointer"
            >
              <NuxtImg
                :src="result.image"
                :alt="result.title"
                width="64"
                height="64"
                format="webp"
                loading="lazy"
                quality="70"
                class="w-16 h-16 object-cover rounded-lg shadow-sm"
                fetch-priority="low"
              />
              <div>
                <h3 class="font-medium text-gray-800 text-base">
                  {{ result.title }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ result.type === "product" ? "منتج" : "مقال" }}
                </p>
              </div>
            </NuxtLink>
          </div>

          <!-- No Results -->
          <div
            v-if="searchQuery && searchResults.length === 0"
            class="p-6 text-center text-gray-500"
          >
            لا توجد نتائج لـ "{{ searchQuery }}"
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const searchQuery = ref("");
const searchResults = ref([]);
const searchInput = ref(null);

const products = [
  {
    id: 1,
    title: "مجموعة غرفة نوم مودرن",
    image: "/images/furniture-1.jpg",
    type: "product",
  },
  {
    id: 2,
    title: "كنبة صالون فاخرة",
    image: "/images/furniture-2.jpg",
    type: "product",
  },
  {
    id: 3,
    title: "طاولة طعام خشبية",
    image: "/images/furniture-3.jpg",
    type: "product",
  },
];

const articles = [
  {
    id: 1,
    title: "أفكار ديكور لغرف النوم الصغيرة",
    image: "/images/article-1.jpg",
    type: "article",
  },
  {
    id: 2,
    title: "أحدث صيحات الأثاث لعام 2023",
    image: "/images/article-2.jpg",
    type: "article",
  },
];

const openModal = () => {
  isOpen.value = true;
  nextTick(() => searchInput.value?.focus());
};

const closeModal = () => {
  isOpen.value = false;
  searchQuery.value = "";
  searchResults.value = [];
};

const performSearch = () => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    searchResults.value = [];
    return;
  }

  const productMatches = products.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
  const articleMatches = articles.filter((a) =>
    a.title.toLowerCase().includes(query)
  );

  searchResults.value = [...productMatches, ...articleMatches];
};

const modalContent = ref();
const handleClickOutside = (e) => {
  if (
    isOpen.value &&
    modalContent.value &&
    !modalContent.value.contains(e.target)
  ) {
    closeModal();
  }
};

onMounted(() => {
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openModal();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    transform: scale(0.98);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
