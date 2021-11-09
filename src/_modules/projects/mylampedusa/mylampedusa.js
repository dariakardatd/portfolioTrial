// "use strict";

// export class SliderCards {
//   constructor(slider) {
//     console.log(slider, "Slider module");

//     let sliderImages = slider.querySelectorAll(".sliderProject__slide"),
//       arrowLeft = slider.querySelectorAll(".btn--arrowLeft"),
//       arrowRight = slider.querySelectorAll(".btn--arrowRight"),
//       current = 0,
//       currentTheme;


//     // Clear all images
//     function reset() {
//       for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].classList.remove("active");
//         // sliderImages[i].style.display = "none";
//       }
//     }

//     // Init slider
//     function startSlide() {
//       reset();
//        addDots();
//        goToSlide(0)

//     }

//     // Show prev
//     function slideLeft() {
//       goToSlide(current-1)
//     }

//     // Show next
//     function slideRight() {
//       goToSlide(current+1)
//     }

//     function goToSlide(pos) {

//       reset();
//       //select new slide
//       sliderImages[pos].style.display = "inline-flex";

      

//       //reset dots
//       const allDots = slider.querySelectorAll(".btn__dot");
//       if (allDots[pos]) {
//         allDots[current].classList.remove("active");
//         allDots[pos].classList.add("active");
//       };
 
//       //reset current theme
//       if(currentTheme) {
//         slider.classList.remove(currentTheme);
//         currentTheme=null;
//       }

//       //check and add the slide theme
//       const theme =  sliderImages[pos].dataset.theme;
//       if(theme) {
//         slider.classList.add(theme);
//         currentTheme=theme;
//       }

      
      
//       current=pos; 


//       sliderImages[current].classList.add("active");
//       }
  

//     // ADD DOTS FUNCTION

//     function addDots () {
//       const dots = slider.querySelector(".dotsWrapper");
//       console.log(slider, sliderImages, dots )
//       if (!dots) return   
      
//       for (let k = 0; k < sliderImages.length; k++) {
//         const dot = document.createElement("div");
//         dot.classList.add("btn__dot");
//         dots.appendChild(dot);
//         dot.addEventListener("click", (e) => {
//           goToSlide(k)
//           // console.log(sliderImages);
//           // sliderImages[k].classList.toggle("fade");
//         }, false);
        
//       }
//     }


//     // Left arrow click
//     arrowLeft &&
//       [...arrowLeft].map(item => {
//         item.addEventListener("click", function() {
//           if (current === 0) {
//             current = sliderImages.length;
//             // sliderImages.classList.add("fade");
//           }
//           slideLeft();
//         });
//       });

//     // Right arrow click
//     arrowRight &&
//       [...arrowRight].map(item => {
//         item.addEventListener("click", function() {
//           if (current === sliderImages.length - 1) {
//             current = -1;
//           }
//           slideRight();
//         });
//       });

//     startSlide();
//   }


// }
