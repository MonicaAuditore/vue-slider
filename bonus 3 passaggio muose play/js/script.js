const { createApp } = Vue;

createApp({
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: `img/01.webp`,
          title: `Titolo immagine Uno`,
          text: "Descrizione img Uno",
        },
        {
          image: `img/02.webp`,
          title: `Titolo immagine Due`,
          text: "Descrizione img Due",
        },
        {
          image: `img/03.webp`,
          title: `Titolo immagine Tre`,
          text: "Descrizione img Tre",
        },
        {
          image: `img/04.webp`,
          title: `Titolo immagine Quattro`,
          text: "Descrizione img Quattro",
        },
        {
          image: `img/05.webp`,
          title: `Titolo immagine Cinque`,
          text: "Descrizione img Cinque",
        },
      ],

      autoplay: null,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide == 0) {
        this.currentSlide = this.slides.length - 1;
      } else {
        this.currentSlide--;
      }
    },

    nextSlide() {
      if (this.currentSlide == this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },

    mouseEnterSlider() {
      this.autoplay = setInterval(this.nextSlide, 3000);
    },

    mouseLeaveSlider() {
      clearInterval(this.autoplay);
      this.autoplay;
    },
  },

  mounted() {},
}).mount("#app");
