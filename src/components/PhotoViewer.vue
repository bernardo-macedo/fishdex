<template>
  <Teleport to="body">
    <Transition name="photo-viewer">
      <div
        v-if="src"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        @click.self="$emit('close')"
      >
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none p-2"
          aria-label="Close"
        >
          ×
        </button>
        <img
          :src="src"
          :alt="alt"
          class="max-w-full max-h-full object-contain select-none"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ src: String, alt: { type: String, default: '' } })
defineEmits(['close'])
</script>

<style scoped>
.photo-viewer-enter-active,
.photo-viewer-leave-active {
  transition: opacity 0.2s ease;
}
.photo-viewer-enter-from,
.photo-viewer-leave-to {
  opacity: 0;
}
</style>
