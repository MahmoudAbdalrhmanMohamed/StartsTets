<template>
  <form @submit.prevent="submitForm" class="max-w-lg mx-auto space-y-4">
    <input v-model="form.name" placeholder="الاسم" class="w-full border p-2" />
    <input
      v-model="form.email"
      type="email"
      placeholder="البريد الإلكتروني"
      class="w-full border p-2"
    />
    <textarea
      v-model="form.message"
      placeholder="رسالتك"
      class="w-full border p-2"
    ></textarea>
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      إرسال
    </button>
  </form>
</template>

<script setup>
const form = reactive({ name: "", email: "", message: "" });
const submitForm = async () => {
  await $fetch("/api/contact", { method: "POST", body: form });
  alert("تم إرسال الرسالة بنجاح");
};
</script>
