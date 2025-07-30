<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gray-100 py-16">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center"
      >
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            أثاث راقي لمستوى معيشة أفضل
          </h1>
          <p class="text-gray-600 text-lg mb-6">
            اكتشف مجموعتنا المميزة من الأثاث المنزلي والمكتبي المصمم بعناية
            ليرفع من جودة حياتك
          </p>
          <div class="flex space-x-4 space-x-reverse">
            <NuxtLink
              :to="`/articles/page/${'1'}`"
              class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
              >تصفح المنتجات</NuxtLink
            >
            <NuxtLink
              to="/about-us"
              class="border border-primary text-primary px-6 py-3 rounded-md hover:bg-gray-50"
              >تعرف علينا</NuxtLink
            >
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            src="/images/hero.jpg"
            alt="أثاث منزلي"
            class="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          تصفح حسب الفئة
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/articles/page/${'1'}`"
            class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            >
              <Icon :name="category.icon" size="24" class="text-primary" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800">
              {{ category.name }}
            </h3>
            <p class="text-gray-500 text-sm mt-1">{{ category.count }} منتج</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800">منتجات مميزة</h2>
          <NuxtLink
            :to="`/articles/page/${'1'}`"
            class="text-primary hover:underline"
            >عرض الكل</NuxtLink
          >
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <FurnitureCard
            v-for="product in featuredProducts"
            :key="product.id"
            :title="product.title"
            :image="product.image"
            :price="product.price"
            :old-price="product.oldPrice"
            :sale="product.sale"
          />
        </div>
      </div>
    </section>

    <!-- Offers Banner -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div
          class="bg-primary rounded-lg p-8 md:p-12 text-gray-600 relative overflow-hidden"
        >
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              خصم يصل إلى 50% على مجموعات غرف النوم
            </h2>
            <p class="text-lg mb-6">احصل على أفضل العروض لفترة محدودة فقط</p>
            <NuxtLink
              :to="`/articles/page/${'1'}`"
              class="bg-blue-500 text-primary px-6 py-3 rounded-md inline-block text-white transition-all duration-300 hover:bg-blue-300"
              >تسوق الآن</NuxtLink
            >
          </div>

          <NuxtImg
            src="/images/hero.jpg"
            alt="عرض خاص"
            class="absolute bottom-0 left-0 h-full opacity-20"
            width="800"
            height="400"
            format="webp"
            loading="lazy"
            fetch-priority="low"
            quality="90"
          />
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800">أحدث المقالات</h2>
          <NuxtLink
            :to="`/articles/page/${'1'}`"
            class="text-primary hover:underline"
            >عرض الكل</NuxtLink
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="article in latestArticles"
            :key="article.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <NuxtLink :to="`/article/${article.id}`">
              <NuxtImg
                :src="article.image"
                :alt="article.title"
                class="w-full h-48 object-cover"
                width="800"
                height="400"
                format="webp"
                loading="lazy"
                fetch-priority="low"
                quality="90"
              />

              <div class="p-6">
                <span class="text-sm text-gray-500">{{ article.date }}</span>
                <h3 class="text-xl font-semibold text-gray-800 mt-2 mb-3">
                  {{ article.title }}
                </h3>
                <p class="text-gray-600">{{ article.excerpt }}</p>
                <div
                  class="mt-4 flex items-center text-primary hover:underline"
                >
                  <span>اقرأ المزيد</span>
                  <Icon name="mdi:arrow-left" size="20" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          آراء عملائنا
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white p-6 rounded-lg shadow-md"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4"
              >
                <NuxtImg
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                  width="800"
                  height="400"
                  format="webp"
                  loading="lazy"
                  fetch-priority="low"
                  quality="90"
                />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">
                  {{ testimonial.name }}
                </h4>
                <div class="flex text-yellow-400">
                  <Icon v-for="i in 5" :key="i" name="mdi:star" size="16" />
                </div>
              </div>
            </div>
            <p class="text-gray-600">{{ testimonial.comment }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fake data for the home page
const categories = ref([
  { id: 1, name: "غرف نوم", icon: "mdi:bed-king", count: 45 },
  { id: 2, name: "صالونات", icon: "mdi:sofa", count: 32 },
  { id: 3, name: "مطابخ", icon: "mdi:kitchen", count: 28 },
  { id: 4, name: "أثاث مكتبي", icon: "mdi:desk", count: 19 },
]);

const featuredProducts = ref([
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
    oldPrice: "2,100",
    sale: "15",
  },
  {
    id: 4,
    title: "خزانة ملابس كبيرة",
    image: "/images/furniture-4.jpg",
    price: "1,899",
    oldPrice: "2,400",
    sale: "21",
  },
]);

const latestArticles = ref([
  {
    id: 1,
    title: "أفكار ديكور لغرف النوم الصغيرة",
    image: "/images/article-1.jpg",
    date: "15 أكتوبر 2023",
    excerpt:
      "كيفية استغلال المساحات الصغيرة في غرف النوم لتحصل على مساحة تخزين أكبر ومظهر أنيق.",
  },
  {
    id: 2,
    title: "أحدث صيحات الأثاث لعام 2023",
    image: "/images/article-2.jpg",
    date: "8 أكتوبر 2023",
    excerpt:
      "تعرف على أحدث اتجاهات وتصاميم الأثاث التي ستسيطر على عالم الديكور هذا العام.",
  },
  {
    id: 3,
    title: "نصائح لاختيار الأثاث المكتبي المريح",
    image: "/images/article-3.jpg",
    date: "1 أكتوبر 2023",
    excerpt:
      "كيف تختار الأثاث المكتبي الذي يوفر لك الراحة ويزيد من إنتاجيتك أثناء العمل.",
  },
]);

const testimonials = ref([
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "/images/avatar-1.jpg",
    comment:
      "جودة المنتجات ممتازة والتوصيل كان سريعًا جدًا. أنصح الجميع بالتسوق من متجر أثاث شاهين.",
  },
  {
    id: 2,
    name: "سارة عبدالله",
    avatar: "/images/avatar-2.jpg",
    comment:
      "التصاميم راقية والأسعار مناسبة. فريق خدمة العملاء كان لطيفًا وساعدني في اختيار ما يناسب منزلي.",
  },
  {
    id: 3,
    name: "خالد سعيد",
    avatar: "/images/avatar-3.jpg",
    comment:
      "اشتريت مجموعة غرفة نوم منذ عام وما زالت بحالة ممتازة. شكرًا لكم على الجودة العالية.",
  },
]);
</script>
