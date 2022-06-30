const { createApp } = Vue

  createApp({
    data() {
      return {
        Faktura: null,
        OCR: " "
      }
    },
    methods: {
      calcOCR(){
          this.OCR = 123;
      }
    }
  }).mount('#app')