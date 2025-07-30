<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">أثاث شاهين</h3>
          <p class="text-gray-400">
            متجر أثاث شاهين يقدم أفضل أنواع الأثاث المنزلي والمكتبي بجودة عالية
            وأسعار تنافسية في السعودية.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white"
                >الرئيسية</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="`/articles/page/${'1'}`"
                class="text-gray-400 hover:text-white"
                >المقالات</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about-us" class="text-gray-400 hover:text-white"
                >من نحن</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact-us" class="text-gray-400 hover:text-white"
                >اتصل بنا</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">وسائل التواصل</h3>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2 space-x-reverse">
              <Icon name="mdi:phone" size="20" />
              <span class="text-gray-400">+966 12 345 6789</span>
            </li>
            <li class="flex items-center space-x-2 space-x-reverse">
              <Icon name="mdi:email" size="20" />
              <span class="text-gray-400">info@shahin-furniture.com</span>
            </li>
            <li class="flex items-center space-x-2 space-x-reverse">
              <Icon name="mdi:map-marker" size="20" />
              <span class="text-gray-400">جدة، السعودية</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">اشترك في النشرة البريدية</h3>
          <p class="text-gray-400 mb-4">اشترك لتصلك آخر العروض والتخفيضات</p>
          <div class="flex">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              class="bg-gray-800 text-white px-4 py-2 rounded-r-none rounded-l-md w-full"
            />
            <button
              class="bg-primary text-white px-4 py-2 rounded-l-none rounded-r-md"
            >
              اشتراك
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2023 أثاث شاهين. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
