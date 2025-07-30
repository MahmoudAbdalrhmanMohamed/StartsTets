<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          من نحن
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          شركة أثاث شاهين هي الوجهة المفضلة لعشاق الأثاث الراقي في المملكة
          العربية السعودية منذ عام 2005.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <NuxtImg
              src="/images/furniture-1.jpg"
              alt="عن الشركة"
              class="rounded-lg shadow-xl"
              width="800"
              height="400"
              format="webp"
              loading="lazy"
              fetch-priority="low"
              quality="90"
            />
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">قصتنا</h2>
            <p class="text-gray-600 mb-4">
              بدأت رحلتنا في عام 2005 بمتجر صغير في جدة، حيث كنا نقدم تشكيلة
              محدودة من الأثاث المنزلي. بفضل ثقة عملائنا وتفانينا في تقديم
              الأفضل، نمت شركتنا لتصبح أحد أبرز موردي الأثاث في المملكة.
            </p>
            <p class="text-gray-600 mb-6">
              اليوم، لدينا 5 فروع في مختلف أنحاء السعودية ومركز توزيع حديث يخدم
              جميع مناطق المملكة.
            </p>

            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 class="text-4xl font-bold text-primary mb-2">18+</h3>
                <p class="text-gray-600">سنوات من الخبرة</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 class="text-4xl font-bold text-primary mb-2">5</h3>
                <p class="text-gray-600">فروع في المملكة</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 class="text-4xl font-bold text-primary mb-2">10K+</h3>
                <p class="text-gray-600">عميل راضي</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 class="text-4xl font-bold text-primary mb-2">50+</h3>
                <p class="text-gray-600">موظف محترف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div
              class="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6"
            >
              <Icon name="mdi:target" size="24" class="text-primary" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
            <p class="text-gray-600">
              أن نكون الخيار الأول لكل من يبحث عن أثاث راقٍ وعالي الجودة في
              المملكة العربية السعودية، وأن نقدم تجربة تسوق استثنائية تعكس ذوقنا
              الرفيع واهتمامنا بتفاصيل الديكور.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div
              class="bg-primary bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6"
            >
              <Icon name="mdi:lightbulb-on" size="24" class="text-primary" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h3>
            <p class="text-gray-600">
              تقديم تشكيلة مميزة من الأثاث والديكور بجودة عالية وأسعار تنافسية،
              مع التركيز على رضا العملاء وتقديم خدمة ما بعد البيع التي تضمن
              استمرارية العلاقة مع عملائنا.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          فريقنا
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.id"
            class="bg-white rounded-lg shadow-md overflow-hidden text-center"
          >
            <NuxtImg
              :src="member.image"
              :alt="member.name"
              class="w-full h-64 object-cover"
              width="800"
              height="400"
              format="webp"
              loading="lazy"
              fetch-priority="low"
              quality="90"
            />

            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800">{{ member.name }}</h3>
              <p class="text-primary mb-4">{{ member.position }}</p>
              <p class="text-gray-600">{{ member.bio }}</p>

              <div class="flex justify-center mt-4 space-x-4 space-x-reverse">
                <a href="#" class="text-gray-400 hover:text-primary">
                  <Icon name="mdi:twitter" size="20" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary">
                  <Icon name="mdi:linkedin" size="20" />
                </a>
                <a href="#" class="text-gray-400 hover:text-primary">
                  <Icon name="mdi:instagram" size="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fake data for about us page
const team = ref([
  {
    id: 1,
    name: "خالد شاهين",
    position: "المدير التنفيذي",
    image: "/images/team-1.jpg",
    bio: "مؤسس الشركة وخبير في مجال الأثاث والديكور منذ أكثر من 20 عامًا.",
  },
  {
    id: 2,
    name: "سارة أحمد",
    position: "مديرة التصميم",
    image: "/images/team-2.jpg",
    bio: "مصممة ديكور داخلي حاصلة على عدة جوائز في تصميم الأثاث.",
  },
  {
    id: 3,
    name: "محمد علي",
    position: "مدير المبيعات",
    image: "/images/team-3.jpg",
    bio: "خبير في خدمة العملاء وإدارة فرق المبيعات لمدة 15 عامًا.",
  },
  {
    id: 4,
    name: "نورة عبدالله",
    position: "مديرة التسويق",
    image: "/images/team-4.jpg",
    bio: "متخصصة في التسويق الرقمي والتسويق عبر وسائل التواصل الاجتماعي.",
  },
]);
</script>
