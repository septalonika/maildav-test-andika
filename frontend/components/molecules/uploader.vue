<script setup lang="ts">
import { ref } from "vue";
import { useImageStore } from "@/stores/imageStore";

let imagesContent = ref<File | null>(null);
const store = useImageStore();

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    imagesContent.value = target.files[0];
    store.image = imagesContent.value;
  }
}
</script>

<template>
  <div>
    <input @change="handleFileChange" type="file" class="file-input" />
    <div v-if="imagesContent">
      <p>Selected File: {{ imagesContent.name }}</p>
    </div>
  </div>
</template>
