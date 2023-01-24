/*
Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente

Per questi bouns aspettare la spiegazione di domani:
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const slides = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

console.log(slides);

//-----------------------------------------

const { createApp } = Vue;
let th = document.getElementById("th");

createApp({
  data() {
    return {
      images: [
        "img/01.webp",
        "img/02.webp",
        "img/03.webp",
        "img/04.webp",
        "img/05.webp",
      ],

      thumbs: [
        "img/01.webp",
        "img/02.webp",
        "img/03.webp",
        "img/04.webp",
        "img/05.webp",
      ],

      title: [
        "Marvel's Spiderman Miles Morale",
        "Ratchet & Clank: Rift Apart",
        "Fortnite",
        "Stray",
        "Marvel's Avengers",
      ],

      classActive: "active",
      classthumb: "thumb",

      text: [
        "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
      ],
      activeIndex: 0,
    };
  },

  methods: {
    nextImg() {
      if (this.activeIndex == this.images.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },

    prevImg() {
      if (this.activeIndex == 0) {
        this.activeIndex = this.images.length - 1;
      } else {
        this.activeIndex--;
      }
    },
  },
}).mount("#app");
