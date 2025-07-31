<!-- components/Toast.vue -->
<template>
  <Transition name="toast">
    <div
      v-if="isVisible"
      class="fixed z-50 p-4 rounded-lg shadow-lg max-w-xs pointer-events-auto flex items-start"
      :class="[typeClasses, positionClasses]"
    >
      <Icon :name="iconName" size="20" class="mt-0.5 flex-shrink-0" />
      <div class="ml-3 flex-1">
        <p class="text-sm font-medium">
          {{ message }}
        </p>
      </div>
      <button class="ml-2 flex-shrink-0" @click="hide">
        <Icon name="mdi:close" size="16" />
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "info",
    validator: (value) =>
      ["success", "error", "info", "warning"].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
  position: {
    type: String,
    default: "top-right",
    validator: (value) =>
      ["top-right", "top-left", "bottom-right", "bottom-left"].includes(value),
  },
});

const isVisible = ref(false);
let timeoutId = null;

const typeClasses = computed(() => {
  return {
    success: "bg-green-100 text-green-800 border border-green-200",
    error: "bg-red-100 text-red-800 border border-red-200",
    info: "bg-blue-100 text-blue-800 border border-blue-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  }[props.type];
});

const positionClasses = computed(() => {
  return {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }[props.position];
});

const iconName = computed(() => {
  return {
    success: "mdi:check-circle",
    error: "mdi:alert-circle",
    info: "mdi:information",
    warning: "mdi:alert",
  }[props.type];
});

const show = () => {
  isVisible.value = true;
  if (props.duration > 0) {
    timeoutId = setTimeout(hide, props.duration);
  }
};

const hide = () => {
  isVisible.value = false;
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

// Auto-show when component is mounted
//onMounted(() => {
//  show();
//});

// Expose methods to parent component
defineExpose({
  show,
  hide,
});
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
