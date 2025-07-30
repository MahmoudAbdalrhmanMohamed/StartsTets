<template>
  <div>
    <!-- Hero -->
    <section class="relative py-20 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          اتصل بنا
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          نحن هنا للإجابة على جميع استفساراتك. لا تتردد في التواصل معنا بأي
          طريقة تفضلها.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-12">
          <!-- Contact Form -->
          <div class="md:w-1/2">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">
                أرسل لنا رسالة
              </h2>

              <form class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-gray-700 mb-2"
                      >الاسم</label
                    >
                    <input
                      type="text"
                      id="name"
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-gray-700 mb-2"
                      >البريد الإلكتروني</label
                    >
                    <input
                      type="email"
                      id="email"
                      class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label for="phone" class="block text-gray-700 mb-2"
                    >رقم الهاتف</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-gray-700 mb-2"
                    >الموضوع</label
                  >
                  <input
                    type="text"
                    id="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label for="message" class="block text-gray-700 mb-2"
                    >الرسالة</label
                  >
                  <textarea
                    id="message"
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="md:w-1/2">
            <div class="bg-white p-8 rounded-lg shadow-md mb-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">
                معلومات التواصل
              </h2>

              <div class="space-y-6">
                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Icon
                      name="mdi:map-marker"
                      size="24"
                      class="text-primary"
                    />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800 mb-1">العنوان</h3>
                    <p class="text-gray-600">
                      شارع الملك عبدالعزيز، جدة، المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Icon name="mdi:phone" size="24" class="text-primary" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800 mb-1">الهاتف</h3>
                    <p class="text-gray-600">+966 12 345 6789</p>
                    <p class="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Icon name="mdi:email" size="24" class="text-primary" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800 mb-1">
                      البريد الإلكتروني
                    </h3>
                    <p class="text-gray-600">info@shahin-furniture.com</p>
                    <p class="text-gray-600">support@shahin-furniture.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 space-x-reverse">
                  <div class="bg-primary bg-opacity-10 p-3 rounded-full">
                    <Icon name="mdi:clock" size="24" class="text-primary" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800 mb-1">ساعات العمل</h3>
                    <p class="text-gray-600">من الأحد إلى الخميس: 9 ص - 10 م</p>
                    <p class="text-gray-600">الجمعة والسبت: 4 م - 12 م</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">
                وسائل التواصل الاجتماعي
              </h2>

              <div class="flex gap-4 justify-center">
                <a
                  href="#"
                  class="bg-blue-500 grid place-content-center text-white p-2 w-14 h-14 rounded-full hover:bg-blue-600"
                >
                  <Icon name="mdi:facebook" size="24" />
                </a>
                <a
                  href="#"
                  class="bg-blue-400 grid place-content-center text-white p-2 w-14 h-14 rounded-full hover:bg-blue-500"
                >
                  <Icon name="mdi:twitter" size="24" />
                </a>
                <a
                  href="#"
                  class="bg-pink-600 grid place-content-center text-white p-2 w-14 h-14 rounded-full hover:bg-pink-700"
                >
                  <Icon name="mdi:instagram" size="24" />
                </a>
                <a
                  href="#"
                  class="bg-blue-700 grid place-content-center text-white p-2 w-14 h-14 rounded-full hover:bg-blue-800"
                >
                  <Icon name="mdi:linkedin" size="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="pb-16">
      <div class="container mx-auto px-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">خريطة الموقع</h2>
          <div class="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.4449999999995!2d39.16771931541681!3d21.56865698570083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1f5d5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
