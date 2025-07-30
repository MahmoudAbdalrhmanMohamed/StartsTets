<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Main Content -->
        <div class="md:w-2/3">
          <NuxtLink
            :to="`/articles/page/${'1'}`"
            class="flex items-center text-primary mb-6"
          >
            <Icon name="mdi:arrow-right" size="20" />
            <span class="mr-2">العودة للمقالات</span>
          </NuxtLink>

          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            {{ article.title }}
          </h1>

          <div class="flex items-center text-gray-500 mb-6">
            <span>{{ article.date }}</span>
            <span class="mx-2">•</span>
            <span>بواسطة {{ article.author }}</span>
          </div>

          <NuxtImg
            :src="article.image"
            :alt="article.title"
            width="800"
            height="400"
            class="w-full h-96 object-cover rounded-lg mb-6"
            format="webp"
            loading="lazy"
            fetch-priority="low"
            quality="90"
          />

          <div class="prose max-w-none" v-html="article.content"></div>

          <!-- Tags -->
          <div class="mt-8 flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Author Bio -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex items-center">
              <NuxtImg
                :src="article.authorAvatar"
                :alt="article.author"
                class="w-16 h-16 rounded-full mr-4"
                width="800"
                height="400"
                format="webp"
                loading="lazy"
                fetch-priority="low"
                quality="90"
              />

              <div>
                <h4 class="font-bold text-lg">{{ article.author }}</h4>
                <p class="text-gray-600">{{ article.authorBio }}</p>
              </div>
            </div>
          </div>

          <!-- Comments -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-xl font-bold mb-6">
              التعليقات ({{ comments.length }})
            </h3>

            <div
              v-for="comment in comments"
              :key="comment.id"
              class="mb-6 pb-6 border-b border-gray-200 last:border-0"
            >
              <div class="flex">
                <NuxtImg
                  :src="comment.avatar"
                  :alt="comment.name"
                  class="w-12 h-12 rounded-full mr-4"
                  width="800"
                  height="400"
                  format="webp"
                  loading="lazy"
                  fetch-priority="low"
                  quality="90"
                />

                <div>
                  <div class="flex justify-between items-center">
                    <h4 class="font-semibold">{{ comment.name }}</h4>
                    <span class="text-gray-500 text-sm">{{
                      comment.date
                    }}</span>
                  </div>
                  <p class="text-gray-600 mt-2">{{ comment.text }}</p>
                </div>
              </div>
            </div>

            <!-- Comment Form -->
            <div class="mt-8">
              <h4 class="font-bold text-lg mb-4">أضف تعليقًا</h4>
              <form class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="الاسم"
                    class="bg-gray-100 border-0 rounded-md px-4 py-3 w-full"
                  />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    class="bg-gray-100 border-0 rounded-md px-4 py-3 w-full"
                  />
                </div>
                <textarea
                  placeholder="تعليقك"
                  rows="5"
                  class="bg-gray-100 border-0 rounded-md px-4 py-3 w-full"
                ></textarea>
                <button
                  type="submit"
                  class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
                >
                  إرسال التعليق
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="md:w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 class="font-bold text-lg mb-4">مقالات مشابهة</h3>
            <div
              v-for="related in relatedArticles"
              :key="related.id"
              class="mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
            >
              <NuxtLink
                :to="`/article/${related.id}`"
                class="flex items-center group"
              >
                <NuxtImg
                  :src="related.image"
                  :alt="related.title"
                  class="w-16 h-16 object-cover rounded-md mx-4"
                  width="800"
                  height="400"
                  format="webp"
                  loading="lazy"
                  fetch-priority="low"
                  quality="90"
                />

                <div>
                  <h4
                    class="font-semibold text-gray-800 group-hover:text-primary"
                  >
                    {{ related.title }}
                  </h4>
                  <span class="text-gray-500 text-sm">{{ related.date }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="font-bold text-lg mb-4">الوسوم الشائعة</h3>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="tag in popularTags"
                :key="tag"
                class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-blue-300 cursor-default"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const articleId = route.params.id;

// Fake data for single article
const article = ref({
  id: articleId,
  title: "أفكار ديكور لغرف النوم الصغيرة",
  image: "/images/article-1.jpg",
  date: "15 أكتوبر 2023",
  author: "أحمد علي",
  authorAvatar: "/images/avatar-4.jpg",
  authorBio:
    "مصمم ديكور داخلي بخبرة أكثر من 10 سنوات في مجال التصميم الداخلي والأثاث المنزلي.",
  tags: ["ديكور", "غرف نوم", "تصميم داخلي", "مساحات صغيرة"],
  content: `
      <p class="mb-4">غرف النوم الصغيرة يمكن أن تكون تحديًا حقيقيًا عندما يتعلق الأمر بالتخطيط والديكور، ولكن مع بعض الحيل الذكية يمكنك تحويلها إلى مساحة مريحة وجذابة. في هذه المقالة، سنشارك معك بعض الأفكار التي تساعدك في استغلال كل بوصة في غرفتك الصغيرة.</p>
      
      <h2 class="text-xl font-bold my-4">1. اختيار الأثاث المناسب</h2>
      <p class="mb-4">عندما تكون المساحة محدودة، يصبح اختيار الأثاث المناسب أمرًا بالغ الأهمية. إليك بعض النصائح:</p>
      <ul class="list-disc mr-4 mb-4 space-y-2">
        <li>اختر سريرًا بحجم مناسب (غالبًا سرير مفرد أو سرير مزدوج صغير)</li>
        <li>استخدم خزائن ملابس مدمجة أو أرفف معلقة لتوفير المساحة</li>
        <li>اختر طاولة جانبية صغيرة أو استبدلها برف معلق</li>
      </ul>
      
      <h2 class="text-xl font-bold my-4">2. استغلال المساحات الرأسية</h2>
      <p class="mb-4">عندما تكون المساحة الأفقية محدودة، يمكنك التوسع رأسيًا:</p>
      <ul class="list-disc mr-4 mb-4 space-y-2">
        <li>استخدم أرففًا عالية للتخزين</li>
        <li>اختر خزائن ملابس طويلة تصل حتى السقف</li>
        <li>استفد من المساحة فوق السرير بوضع رفوف أو وحدات تخزين</li>
      </ul>
      
      <h2 class="text-xl font-bold my-4">3. الألوان والإضاءة</h2>
      <p class="mb-4">الألوان الفاتحة والإضاءة الجيدة يمكن أن تجعل الغرفة تبدو أكبر:</p>
      <ul class="list-disc mr-4 mb-4 space-y-2">
        <li>استخدم ألوانًا فاتحة للجدران والأثاث</li>
        <li>أضف مرايا لخلق وهم مساحة أكبر</li>
        <li>استخدم إضاءة متعددة المصادر لجعل الغرفة أكثر إشراقًا</li>
      </ul>
      
      <p class="mb-4">بتطبيق هذه النصائح، يمكنك تحويل غرفتك الصغيرة إلى مساحة مريحة وعملية دون التضحية بالأناقة والجمال.</p>
    `,
});

const relatedArticles = ref([
  {
    id: 2,
    title: "أحدث صيحات الأثاث لعام 2023",
    image: "/images/article-2.jpg",
    date: "8 أكتوبر 2023",
  },
  {
    id: 3,
    title: "نصائح لاختيار الأثاث المكتبي المريح",
    image: "/images/article-3.jpg",
    date: "1 أكتوبر 2023",
  },
  {
    id: 4,
    title: "كيف تختار ألوان الأثاث لمنزلك",
    image: "/images/article-4.jpg",
    date: "24 سبتمبر 2023",
  },
]);

const popularTags = ref([
  "ديكور",
  "أثاث",
  "تصميم داخلي",
  "منزل",
  "أفكار",
  "غرف نوم",
  "صالونات",
  "مطابخ",
]);

const comments = ref([
  {
    id: 1,
    name: "محمد حسن",
    avatar: "/images/avatar-5.jpg",
    date: "16 أكتوبر 2023",
    text: "مقال رائع! استفدت كثيرًا من النصائح خاصة فيما يخص استغلال المساحات الرأسية.",
  },
  {
    id: 2,
    name: "نورة عبدالرحمن",
    avatar: "/images/avatar-6.jpg",
    date: "17 أكتوبر 2023",
    text: "أعاني من صغر غرفة النوم وسأجرب هذه الأفكار. شكرًا لك على المقال المفيد.",
  },
]);
</script>
