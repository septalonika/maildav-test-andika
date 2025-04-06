import { defineStore } from "pinia";
import { useImageFetch } from "~/composables/imageFetcher";

export const useImageStore = defineStore("image_store", {
  state: () => ({
    image: {},
    isHidden: true,
    toastMessage: "",
    isError: false,
  }),
  actions: {
    async sendImage() {
      if (this.image) {
        const formData = new FormData();
        formData.append("file", this.image);
        try {
          const response = await useImageFetch({
            path: "/analyze",
            method: "post",
            baseURL: "",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          this.toastMessage = response[0].message;
          this.isHidden = false;
          this.isError = response[0].error;
        } catch (error) {
          console.error("Error sending image", error);
          this.toastMessage = error.error;
          this.isHidden = false;
          this.isError = true;
          throw error;
        }
      }
    },
  },
});
