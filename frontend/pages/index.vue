<script setup lang="ts">
const store = useImageStore();
type ResponseInfo = {
  error: boolean;
  message: string;
  status: string;
};

let timer: any;
const handleSubmitImage = async () => {
  if (store.image) {
    store.sendImage();
    timer = setTimeout(() => {
      store.isHidden = true;
      store.toastMessage = "";
      clearTimeout(timer);
    }, 3000);
  }
};
</script>

<template>
  <div class="flex w-screen h-screen justify-center">
    <div
      class="fixed h-screen gap-2 -z-0 top-0 bottom-0 right-0 left-0 bg-gradient-to-l from-[#2d9596] via-[#c3e2cc] via-80% to-[#ecf4d6] font-sans text-[#265073] flex justify-center items-center"
    >
      <MoleculesUploader />
      <button
        class="p-4 btn flex-col justify-center text-2xl font-bold rounded-lg hover:scale-105 active:scale-75 duration-75"
        @click="handleSubmitImage"
      >
        UPLOAD
      </button>
    </div>
    <div
      :class="{
        'toast toast-top toast-start': !store.isHidden,
      }"
    >
      <div
        class="alert alert-success"
        :class="{
          'alert-error': store.isError,
        }"
      >
        <span>{{ store?.toastMessage }}</span>
      </div>
    </div>

    <div class="flex justify-center">
      <AtomsFooter />
    </div>
  </div>
</template>
