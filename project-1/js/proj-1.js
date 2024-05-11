// const slides = document.querySelectorAll(".slide");
// var counter = 0;

// slides.forEach(
//     (slide,index) => {
//         slide.style.left = `${index*100}%`
//     }
// )

// const goPrev = () =>{
//   if(counter > 0){
//     counter--
//     slideImage()
//   }
// }
// const goNext = () =>{
// if(counter< slides.length - 1){
//     counter++
//     slideImage()
// }
// }

// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter*100}%)`
//         }
//     )
// }

// // ---------------  to stop the images if counter < 0 and counter > sliide.length   ---------------- 



const slides = document.querySelectorAll(".slide");
var counter = 0;
const totalSlides = slides.length;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`
    }
)

const goPrev = () =>{
    counter--;
    if(counter < 0) {
        counter = totalSlides - 1; // Reset counter to last slide index
    }
    slideImage();
}

const goNext = () =>{
    counter++;
    if(counter >= totalSlides) {
        counter = 0; // Reset counter to first slide index
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
// // ---------------  to start over the images if counter < 0 and counter > sliide.length   ---------------- 
