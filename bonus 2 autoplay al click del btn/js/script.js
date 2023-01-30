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
    };
  },
  methods: {
    //Modo alternativo per aggiungere la classe, richiamare la funzione a : class="" e passargli index come argomento:
    // thumbnailClasses(i) {
    //   if (this.currentSlide == i) {
    //     return "active";
    //   } else {
    //     return "";
    //   }
    // },

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
  },
  mounted() {
    setInterval(this.nextSlide, 3000);
    //oppure
    // setInterval(() => {
    //   this.nextSlide();
    // }, 3000);
  },
}).mount("#app");

// const slidesContainer = document.querySelector(".slides");
// const thumbnailsContainer = document.querySelector(".thumbnails");
// let currentSlide = 0;

// images.forEach((singleImage) => {
//   console.log(singleImage);
//   const newSlide = document.createElement("div");
//   newSlide.classList.add("slide");
//   newSlide.innerHTML = `
//   <img src="${singleImage.image}" alt="${singleImage.title}" />
//   <div class="texts">
//     <h3>${singleImage.title}</h3>
//     <p>${singleImage.text}</p>
//   </div>
// `;
//   slidesContainer.append(newSlide);

//   // -----------------------------------

//   const newThumbnail = document.createElement("div");
//   newThumbnail.classList.add("thumbnail");
//   newThumbnail.style.height = 100 / images.length + "%";
//   newThumbnail.innerHTML = `
//   <img src="${singleImage.image}" alt="${singleImage.title}" />

// `;
//   thumbnailsContainer.append(newThumbnail);
// });

// const allSlides = document.querySelectorAll(".slide");
// // console.log("allSlides", allSlides);
// allSlides[currentSlide].classList.add("active");

// const allThumbnails = document.querySelectorAll(".thumbnail");
// allThumbnails[currentSlide].classList.add("active");

// const prevButton = document.querySelector(".prev");

// prevButton.addEventListener("click", () => {
//   allSlides[currentSlide].classList.remove("active");
//   allThumbnails[currentSlide].classList.remove("active");

//   if (currentSlide > 0) {
//     currentSlide--;
//   } else {
//     currentSlide = images.length - 1;
//   }
//   allSlides[currentSlide].classList.add("active");
//   allThumbnails[currentSlide].classList.add("active");
// });

// const nextButton = document.querySelector(".next");

// nextButton.addEventListener("click", () => {
//   allSlides[currentSlide].classList.remove("active");
//   allThumbnails[currentSlide].classList.remove("active");
//   if (currentSlide < images.length - 1) {
//     currentSlide++;
//   } else {
//     currentSlide = 0;
//   }
//   allSlides[currentSlide].classList.add("active");
//   allThumbnails[currentSlide].classList.add("active");
// });
