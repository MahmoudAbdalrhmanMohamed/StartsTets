<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">جميع المنتجات</h1>
        <div class="flex items-center space-x-4 space-x-reverse">
          <select class="bg-gray-100 border-0 rounded-md px-4 py-2">
            <option>ترتيب حسب: الأحدث</option>
            <option>ترتيب حسب: الأقل سعرًا</option>
            <option>ترتيب حسب: الأعلى سعرًا</option>
            <option>ترتيب حسب: الأكثر مبيعًا</option>
          </select>
          <button class="p-2 rounded-md bg-gray-100">
            <Icon name="mdi:filter" size="20" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Filters Sidebar -->
        <div class="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-bold text-lg mb-4">الفئات</h3>
          <ul class="space-y-2">
            <li
              v-for="category in categories"
              :key="category.id"
              class="flex items-center justify-between"
            >
              <NuxtLink to="#" class="text-gray-600 hover:text-primary">{{
                category.name
              }}</NuxtLink>
              <span class="text-gray-400 text-sm">{{ category.count }}</span>
            </li>
          </ul>

          <h3 class="font-bold text-lg mt-8 mb-4">نطاق السعر</h3>
          <div class="mb-4">
            <input type="range" min="0" max="10000" class="w-full" />
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>0 ر.س</span>
            <span>10,000 ر.س</span>
          </div>

          <button
            class="w-full bg-primary text-white py-2 rounded-md mt-6 -dark"
          >
            تطبيق الفلتر
          </button>
        </div>

        <!-- Products List -->
        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FurnitureCard
              v-for="product in products"
              :key="product.id"
              :title="product.title"
              :image="product.image"
              :price="product.price"
              :old-price="product.oldPrice"
              :sale="product.sale"
              :slug="product.id + '1'"
            />
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-12">
            <nav
              class="flex items-center *:transition-all *:duration-300 gap-2"
            >
              <nuxt-link
                v-if="route.params.id != 1"
                :to="`/articles/page/${--$route.params.id}`"
                class="p-2 w-10 hover:bg-yellow-100 h-10 grid place-content-center place-items-center rounded-md bg-yellow-200 text-gray-600 hover:text-white"
              >
                <Icon name="mdi:chevron-right" size="20" />
              </nuxt-link>
              <nuxt-link
                :to="`/articles/page/${'1'}`"
                class="p-2 w-10 h-10 hover:bg-yellow-200 grid place-content-center place-items-center rounded-md bg-yellow-200 text-gray-600 hover:text-white"
              >
                1
              </nuxt-link>
              <nuxt-link
                :to="`/articles/page/${'2'}`"
                class="p-2 w-10 h-10 hover:bg-yellow-200 grid place-content-center place-items-center rounded-md bg-yellow-200 text-gray-600 hover:text-white"
              >
                2
              </nuxt-link>
              <nuxt-link
                :to="`/articles/page/${'3'}`"
                class="p-2 w-10 h-10 hover:bg-yellow-200 grid place-content-center place-items-center rounded-md bg-yellow-200 text-gray-600 hover:text-white"
              >
                3
              </nuxt-link>
              <nuxt-link
                v-if="route.params.id != 3"
                :to="`/articles/page/${++route.params.id}`"
                class="p-2 w-10 h-10 hover:bg-yellow-200 grid place-content-center place-items-center rounded-md bg-yellow-200 text-gray-600 hover:text-white"
              >
                <Icon name="mdi:chevron-left" size="20" />
              </nuxt-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.id);

// Fake data for articles page
const categories = ref([
  { id: 1, name: "غرف نوم", count: 45 },
  { id: 2, name: "صالونات", count: 32 },
  { id: 3, name: "مطابخ", count: 28 },
  { id: 4, name: "أثاث مكتبي", count: 19 },
  { id: 5, name: "طاولات طعام", count: 15 },
  { id: 6, name: "كراسي", count: 23 },
]);

const products = ref([
  {
    id: 1,
    title: "مجموعة غرفة نوم مودرن",
    image: "/images/furniture-1.jpg",
    price: "2,499",
    oldPrice: "3,200",
    sale: "22",
  },
  {
    id: 2,
    title: "كنبة صالون فاخرة",
    image: "/images/furniture-2.jpg",
    price: "1,799",
    oldPrice: "2,100",
    sale: "15",
  },
  {
    id: 3,
    title: "طاولة طعام خشبية",
    image: "/images/furniture-3.jpg",
    price: "1,200",
    oldPrice: "null",
    sale: "null",
  },
  {
    id: 4,
    title: "خزانة ملابس كبيرة",
    image: "/images/furniture-4.jpg",
    price: "1,899",
    oldPrice: "2,400",
    sale: "21",
  },
  {
    id: 5,
    title: "سرير أطفال",
    image: "/images/furniture-5.jpg",
    price: "999",
    oldPrice: "1,200",
    sale: "17",
  },
  {
    id: 6,
    title: "كنبة زاوية",
    image: "/images/furniture-6.jpg",
    price: "3,499",
    oldPrice: "4,200",
    sale: "17",
  },
  {
    id: 7,
    title: "طاولة مكتب",
    image: "/images/furniture-7.jpg",
    price: "899",
    oldPrice: "null",
    sale: "null",
  },
  {
    id: 8,
    title: "مجموعة غرفة نوم كلاسيك",
    image: "/images/furniture-8.jpg",
    price: "3,200",
    oldPrice: "3,800",
    sale: "16",
  },
  {
    id: 9,
    title: "كرسي مكتب مريح",
    image: "/images/furniture-9.jpg",
    price: "650",
    oldPrice: "800",
    sale: "19",
  },
]);
</script>
